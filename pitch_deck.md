# PITCH DECK: FU — The AI Slop Roaster
## Hackathon Presentation Outline
*Designed for Google NotebookLM, Slides, or Presentation Builders*

---

## SLIDE 1: TITLE SLIDE
### The AI Slop Detector & Outrage Board
* **Project Name:** FU
* **Sub-title:** A savage AI-slop detector. Paste a URL or text, get a brutal verdict card exposing how much of your content is synthetic garbage.
* **Tagline:** Feed the machine. Expose the mediocrity.
* **Track:** Virality Track (Hermes Buildathon)

---

## SLIDE 2: THE PROBLEM
### The Internet is Drowning in Synthetic Garbage
* **The Slop Apocalypse:** Platforms like LinkedIn, X, and Medium are overrun by plagiarized, automated, and AI-laundered content ("In today's fast-paced digital landscape...", "Let's delve...").
* **Fake Authority:** Ghostwritten influencers and corporate grifters use AI to fabricate professional authority, drown out real human creators, and manipulate audiences.
* **No Weapon for Humans:** Readers know content is fake, but have no quick, shareable, or objective way to publicly call it out and verify it.

---

## SLIDE 3: THE SOLUTION
### FU — A Savage Verdict Machine
We built a single, focused product that lets anyone analyze and shame AI-generated slop.
* **1. The Analyzer:** Users paste a text block, YouTube URL, or social media link (LinkedIn, X). The app extracts the content, runs it through an AI-detection pipeline, and returns a brutal verdict card.
* **2. The Verdict Card:** A shareable "Spotify Wrapped" style result showing AI Slop %, Originality Index, an overall FU Score, a savage one-line verdict, a reconstructed prompt (what the human likely typed into ChatGPT), and an autopsy report of structural violations.
* **3. Human-First Scoring:** The scoring model is explicitly prompted to reward deeply personal, specific, authentic writing with low scores — making a low FU Score a genuine badge of human originality.

---

## SLIDE 4: THE VIRAL PRODUCT LOOP & NEW WORKFLOW
### How the "Slop Roaster" Works
1. **Intelligent Ingestion:** Drop a YouTube, X (Twitter), or LinkedIn URL into the Terminal, or paste raw text. 
2. **Deep Scraping:** Using LinkUp Search APIs and YouTube Transcript hooks, we bypass anti-bot measures and extract the exact text of the post or video natively.
3. **Round-Robin AI Analysis:** The content is routed through a resilient OpenRouter pipeline, distributing loads across `tencent/hy3:free`, `nvidia/nemotron-3-ultra-550b-a55b:free`, `poolside/laguna-m.1:free`, and `liquid/lfm-2.5-1.2b-instruct:free`, with an ultimate fallback to `nousresearch/hermes-3-llama-3.1-405b`.
4. **Originality Check:** We extract key phrases and pump them through LinkUp to detect blatant plagiarism across the web.
5. **The Verdict:** The engine generates a brutal, shareable verdict card exposing their exact brand of delusion, with export options (PNG download, copy URL).

---

## SLIDE 5: THE GLOBAL SLOP LEADERBOARD
### Public Shaming as a Service
* **The Global Slop Leaderboard:** Every roast generates a public entry ranked by FU Score, originality, and slop percentage — visible to anyone on the Leaderboard page.
* **Slop Bomb (Feature):** Users can drop an anonymous "slop bomb" on a target by pasting their URL and sharing the verdict directly. No payment, no friction — just pure, public accountability.
* **Shareable Verdict Cards:** Every roast comes with a One-Click PNG download and a copyable `/roast/[id]` URL. The target's humiliation is a single tap away from going viral.

---

## SLIDE 6: TECHNICAL INNOVATION
### High-Performance, Resilient Architecture
* **Next.js & Vercel:** Highly scalable, localized frontend running on Vercel Edge.
* **Convex Real-Time Database:** Operates as a reactive state machine for the Global Slop Leaderboard, tracking roasts, scores, and live status globally without locking threads.
* **LinkUp Plagiarism Search & Deep Scraping:** Extracts distinct claims from text to construct an objective lineage graph of copied ideas, and scrapes content directly from LinkedIn and X (Twitter) URLs.
* **Resilient AI Routing:** An intelligent round-robin fallback system tries up to 5 OpenRouter models. If all fail, a built-in "cooked" mock engine still returns a savage verdict — the show always goes on.
* **Client-Side Canvas Export:** Bypasses heavy native C++ server dependencies by rendering and downloading viral PNG cards directly inside the user's browser via `html-to-image`.

---

## SLIDE 7: DE-LAUNDERED PROMPT REVEAL
### Stripping Away the Illusion
Our AI pipeline doesn't just score slop—it **reconstructs the exact instructions** the creator likely typed into ChatGPT.
* **Example Target Post:** *"Woke up at 4:30 AM. Cold plunge. 2 hours of deep work. Always align your holistic synergy."*
* **De-Laundered Prompt Revealed:** *"Write an insufferable LinkedIn morning routine listicle using words like 'holistic' and 'synergy' to make readers feel inadequate."*
* **Autopsy Report:** The card lists 3 structural violations (e.g., "Used 'leverage' and 'synergy' unironically.").

---

## SLIDE 8: TRACTION & VIRALITY FORECAST
### Zero Cost, Exponential Growth
* **The "Victims Log" Testimonials:** To kickstart virality, we pre-populated our landing page with hilarious, real LinkedIn connections and avatars of founders/VCs (Prabhkiran Singh, David Sneider, etc.) reacting to being roasted by FU.
* **Zero Marketing Cost:** Every roast card downloaded contains a shareable URL (`/roast/[id]`) and creator handles, turning every angry target and laughing reader into a referral agent.
* **Live Today:** 
  * Live Vercel web app deployed.
  * Real-time Convex database powering the leaderboard.
  * OpenRouter + LinkUp API integration (with graceful mock fallback when keys are unavailable — always demo-ready).
  * Client-side sessionStorage persistence for instant page reloads.

---

## SLIDE 9: CONCLUSION
### Join the Anti-Slop Revolution
* **FU** is a simple, brutal tool: paste content, get roasted, share the verdict.
* It defends human writers by exposing synthetic garbage and celebrating authentic voices.
* Every verdict card is a public record — making slop costly in reputation, not dollars.
* **Our Motto:** Bring finished work, not problems.
