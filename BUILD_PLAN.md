# SlopScore — Build Plan

## Overview

- **Product:** SlopScore (slopcheck.app) — paste content → AI slop verdict card
- **Track:** Hermes Buildathon · Virality
- **Timeline:** 8 hours total
- **Stack:** Next.js 14 (App Router), Convex, Hermes + GPT-5.6, LinkUp, Cloudflare Pages, Satori, Datafast

---

## Phase 0 — Project Scaffold (30 min)

### 0.1 Repo + remote setup
- [ ] Create GitHub repo
- [ ] Push initial commit
- [ ] Set branch protection / team access

### 0.2 Next.js scaffold
- [ ] `npx create-next-app@14` with App Router + TypeScript + Tailwind
- [ ] Clean boilerplate (default page, globals.css)
- [ ] Set up path aliases (`@/` → `src/`)

### 0.3 Convex setup
- [ ] `npm install convex`
- [ ] `npx convex dev` → init project, get deployment URL
- [ ] Create `convex/` directory with schema
- [ ] Define tables: `roasts`, `users`, `scores`

### 0.4 Deploy target
- [ ] Push to Cloudflare Pages (first deploy via `wrangler` or Git)
- [ ] Set custom domain if available

### 0.5 Analytics
- [ ] Add Datafast snippet to `layout.tsx`
- [ ] Verify traffic shows in dashboard

**Dependency:** None
**Who:** Solo

---

## Phase 1 — Input UI (45 min)

### 1.1 Landing page shell
- [ ] Dark theme layout with Tailwind
- [ ] Hero: "SlopCheck — Roast AI slop in seconds"
- [ ] Subtitle: "Paste a URL or drop content text. Get a savage verdict card."

### 1.2 Input form
- [ ] Tab toggle: **URL** | **Paste text**
- [ ] URL mode: text input + "Roast it" button
- [ ] Text mode: `<textarea>` + "Roast it" button
- [ ] Client-side validation (empty check, URL format hint)

### 1.3 Loading state
- [ ] "Analysing content..." spinner with animated dots
- [ ] Disable button during analysis
- [ ] Show step indicator: Extracting → Searching → Scoring → Rendering

### 1.4 Error states
- [ ] Invalid URL → inline error message
- [ ] Analysis failure → retry button
- [ ] Rate limit hit → "You've used your 3 free roasts. Sign up for unlimited."

**Dependency:** Phase 0
**Who:** Solo

---

## Phase 2 — Content Extraction (45 min)

### 2.1 Text paste handler
- [ ] On submit, send raw text to API route `/api/analyze`
- [ ] Store original text in request context

### 2.2 YouTube URL handler
- [ ] `npm install youtube-transcript-api` (or use `youtubei.js`)
- [ ] Extract video ID from URL (handle various formats: `youtube.com/watch?v=`, `youtu.be/`, shorts)
- [ ] Fetch transcript via youtube-transcript-api
- [ ] Concatenate transcript text, trim to first 3,000 chars
- [ ] Fallback: if transcript fails, return error "Could not fetch transcript. Try pasting text instead."

### 2.3 Convex mutation — `createRoast`
- [ ] Input: `{ contentText, sourceType, sourceUrl?, userId? }`
- [ ] Returns: `roastId`
- [ ] Status: `pending`

**Dependency:** Phase 1
**Who:** Solo

---

## Phase 3 — LinkUp Originality Scan (45 min)

### 3.1 Phrase extractor
- [ ] Send content to LLM (small cheap model or GPT-4o-mini) with prompt:
      "Extract 3–5 key claims or distinctive phrases from this content. Return as JSON array of strings."
- [ ] Parse response, validate array

### 3.2 LinkUp search
- [ ] `POST https://api.linkup.com/search` with each phrase
- [ ] Collect results: `[{ phrase, foundAtUrl, similarity }]`
- [ ] Deduplicate by URL
- [ ] Handle: no results → return empty array (LLM scores without web data)

### 3.3 Convex mutation — `updateRoastSearchResults`
- [ ] Attach `searchResults` to roast document
- [ ] Update status: `search_complete`

**Dependency:** Phase 2, Hermes API key configured
**Who:** Solo

---

## Phase 4 — LLM Scoring Pipeline (60 min)

### 4.1 Hermes integration
- [ ] Set up Hermes client (API endpoint from Hermes docs)
- [ ] Model: GPT-5.6 (via Hermes routing)

### 4.2 Scoring prompt
- [ ] Compose prompt with:
  - System prompt (AI slop detection expert)
  - LinkUp search results (if any)
  - Content text
  - Instruction to return JSON with `aiSlopScore`, `originalityScore`, `fuScore`, `verdict`, `breakdown`

### 4.3 Response parsing
- [ ] Parse JSON from LLM response
- [ ] Validate ranges (0–100 for scores, verdict ≤15 words)
- [ ] Fallback: if JSON parsing fails, retry once with stricter prompt

### 4.4 Convex mutation — `updateRoastScores`
- [ ] Store: `{ aiSlopScore, originalityScore, fuScore, verdict, breakdown }`
- [ ] Update status: `scored`

**Dependency:** Phase 3
**Who:** Solo

---

## Phase 5 — Score Card UI (60 min)

### 5.1 Card component (`<ScoreCard />`)
- [ ] Dark background (`#0f0f0f`), rounded corners, subtle border
- [ ] Top: robot emoji + "SLOPCHECK" branding
- [ ] Content attribution: first 10 words + "@CreatorHandle" (if extractable)
- [ ] Score bars:
  - "AI SLOP" — filled bar (red gradient), percentage right-aligned
  - "ORIGINALITY" — filled bar (green gradient), percentage right-aligned
- [ ] FU Score: large centered number with label
- [ ] Verdict: italic, medium weight, quoted
- [ ] Footer: `slopcheck.app/roast/[id]`

### 5.2 Responsive
- [ ] Desktop: fixed width 500px
- [ ] Mobile: full width with padding

### 5.3 Animation
- [ ] Scores animate from 0 to final value on mount (CSS transition)
- [ ] Card fades in with slight scale

### 5.4 Multiple score bar variants
- [ ] Handle edge cases: all 0 (empty content), all 100 (max slop)

**Dependency:** Phase 4 (data shape), Phase 1 (page structure)
**Who:** Solo

---

## Phase 6 — PNG Export (45 min)

### 6.1 Satori setup
- [ ] `npm install satori sharp`
- [ ] Create `generateRoastOG.ts` — Satori component matching ScoreCard design
- [ ] Map scores/verdict to Satori JSX
- [ ] Load font (Inter or similar) from `public/fonts/`
- [ ] Render to SVG → `sharp` → PNG

### 6.2 API route — `/api/roast/[id]/image`
- [ ] Fetch roast from Convex
- [ ] Generate PNG via Satori + sharp
- [ ] Return PNG with `Content-Type: image/png`
- [ ] Cache headers: `Cache-Control: public, max-age=3600`

### 6.3 Download button
- [ ] In card UI, "Download PNG" button
- [ ] Triggers `fetch` to image route → creates blob → triggers download
- [ ] Loading state while image generates

**Dependency:** Phase 5
**Who:** Solo

---

## Phase 7 — Public Roast Page (45 min)

### 7.1 Route — `/roast/[id]`
- [ ] Next.js App Router: `app/roast/[id]/page.tsx`
- [ ] Fetch roast from Convex by ID
- [ ] If not found → 404 page
- [ ] If pending → polling every 2s until status === `scored`

### 7.2 Page layout
- [ ] Display `<ScoreCard />` component
- [ ] Below card: "Share this roast" section
  - [ ] Copy link button (copies `slopcheck.app/roast/[id]`)
  - [ ] Download PNG button
  - [ ] Share to LinkedIn button (opens share dialog with card + text)

### 7.3 OG image
- [ ] `app/roast/[id]/opengraph-image.tsx` using Satori
- [ ] Generate OG image at request time
- [ ] Ensures link previews show the verdict card

**Dependency:** Phase 6
**Who:** Solo

---

## Phase 8 — Signup Gate (45 min)

### 8.1 Convex auth setup
- [ ] `npm install @convex-dev/auth`
- [ ] Configure Google OAuth + email/password (or magic link)
- [ ] Auth UI component (Sign in with Google + email form)

### 8.2 Roast counter logic
- [ ] Track roast count per session (localStorage) and per user (Convex)
- [ ] Free tier: 3 roasts
- [ ] After 3rd roast:
  - Show "Sign up for unlimited roasts" modal
  - Option to view card but not share without signup

### 8.3 Gate for sharing
- [ ] "Share publicly" button → if not signed in → show auth modal
- [ ] After signup → redirect back to roast page with share action

**Dependency:** Phase 7
**Who:** Solo

---

## Phase 9 — Leaderboard (P1, 45 min)

### 9.1 Convex query — `getLeaderboard`
- [ ] Aggregate roasts with `fuScore` sorted descending
- [ ] Limit: top 10
- [ ] Filter: only public roasts (user opted to share)

### 9.2 Leaderboard page — `/leaderboard`
- [ ] Table layout: Rank | Content preview | AI Slop % | FU Score | Link
- [ ] Auto-refresh every 30s
- [ ] "Most slopped content today" header

### 9.3 Link to leaderboard from landing
- [ ] Nav link or hero section CTA: "See today's worst offenders →"

**Dependency:** Phase 7
**Who:** Solo

---

## Phase 10 — Dodo Payments (P1, 60 min)

### 10.1 Dodo integration
- [ ] Sign up for Dodo Payments, get API keys
- [ ] Create product: "SlopCheck Unlimited" — $5/month

### 10.2 Checkout flow
- [ ] After 3 free roasts → upsell to $5/mo
- [ ] `POST /api/create-checkout-session` → redirect to Dodo hosted checkout
- [ ] Webhook handler: `/api/webhooks/dodo` → update user's subscription status in Convex

### 10.3 Subscription check
- [ ] `getUserSubscription(userId)` → returns active/inactive
- [ ] Gating: unlimited roasts if active subscription

**Dependency:** Phase 8
**Who:** Solo

---

## Phase 11 — Polish & Launch (30 min)

### 11.1 Final QA
- [ ] Test full flow: paste text → roast card → download → share
- [ ] Test YouTube URL → transcript → roast card
- [ ] Test signup gate at 3 roasts
- [ ] Test error states (invalid URL, API failure, rate limit)

### 11.2 Analytics check
- [ ] Datafast tracking all pages
- [ ] Custom event: `roast_created`, `roast_shared`, `user_signed_up`
- [ ] Confirm read-only dashboard access for judges

### 11.3 Distribution prep
- [ ] Pre-generate 2–3 roast cards for well-known slop creators
- [ ] Draft LinkedIn post text
- [ ] DM list prepared

### 11.4 Deploy
- [ ] Final push to Cloudflare Pages
- [ ] Verify custom domain (if any)
- [ ] Confirm all env vars set on Cloudflare dashboard

**Dependency:** All phases above
**Who:** Solo

---

## Timeline Summary

| Phase | Task | Est. Time | Clock |
|-------|------|-----------|-------|
| 0 | Project Scaffold | 30 min | T+0:30 |
| 1 | Input UI | 45 min | T+1:15 |
| 2 | Content Extraction | 45 min | T+2:00 |
| 3 | LinkUp Originality Scan | 45 min | T+2:45 |
| 4 | LLM Scoring Pipeline | 60 min | T+3:45 |
| 5 | Score Card UI | 60 min | T+4:45 |
| 6 | PNG Export | 45 min | T+5:30 |
| 7 | Public Roast Page | 45 min | T+6:15 |
| 8 | Signup Gate | 45 min | T+7:00 |
| 9 | Leaderboard (P1) | 45 min | T+7:45 |
| 10 | Dodo Payments (P1) | 60 min | T+8:45 |
| 11 | Polish & Launch | 30 min | T+9:15 |

**Cut line:** If behind at T+4:00, drop Phases 9–10.

---

## Environment Variables

```env
# Convex
CONVEX_DEPLOYMENT=

# Hermes / OpenAI
HERMES_API_KEY=
OPENAI_API_KEY=

# LinkUp
LINKUP_API_KEY=

# Dodo Payments (P1)
DODO_API_KEY=
DODO_WEBHOOK_SECRET=

# Convex Auth
GOOGLE_OAUTH_CLIENT_ID=
AUTH_SECRET=

# Datafast
DATFAST_SNIPPET_ID=
```

## File Structure

```
slopcheck/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── roast/
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── opengraph-image.tsx
│   │   ├── leaderboard/
│   │   │   └── page.tsx
│   │   └── api/
│   │       ├── analyze/route.ts
│   │       ├── roast/[id]/image/route.ts
│   │       ├── create-checkout-session/route.ts
│   │       └── webhooks/dodo/route.ts
│   ├── components/
│   │   ├── ScoreCard.tsx
│   │   ├── InputForm.tsx
│   │   ├── AuthModal.tsx
│   │   └── LeaderboardTable.tsx
│   ├── convex/
│   │   ├── schema.ts
│   │   ├── roasts.ts
│   │   ├── users.ts
│   │   └── auth.ts
│   ├── lib/
│   │   ├── hermes.ts
│   │   ├── linkup.ts
│   │   ├── youtube.ts
│   │   └── satori.ts
│   └── styles/
│       └── globals.css
├── public/
│   └── fonts/
├── convex/
│   ├── schema.ts
│   ├── auth.config.ts
│   └── auth.ts
├── .env.local
├── wrangler.toml
├── tailwind.config.ts
└── package.json
```
