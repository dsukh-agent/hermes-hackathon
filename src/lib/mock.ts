import type { Roast } from "./types";

export const DEFAULT_ROAST: Roast = {
  id: "demo",
  contentText:
    "In the rapidly evolving landscape of digital transformation, it is imperative to leverage synergistic paradigms that empower stakeholders to achieve optimal outcomes through AI-driven methodologies...",
  sourceType: "text",
  creatorHandle: "@SYNTH_GURU_404",
  score: {
    fuMeter: 78,
    originalityScore: 31,
    fuScore: 82,
    verdict: "This reads like GPT rewrote a 2022 Medium article. Twice.",
    suspectedPrompt:
      "Write a preachy 3-part listicle about B2B sales but make it sound like a deeply personal revelation.",
    breakdown: [
      "Used 'imperative to leverage' — a phrase no human has ever said out loud.",
      "Perfect 3-part corporate listicle structure, zero deviation.",
      "Not a single specific example, anecdote, or original thought detected.",
    ],
  },
  searchResults: [
    {
      phrase: "In the rapidly evolving landscape of digital transformation",
      foundAtUrl: "https://linkedin.com/post/mock-123",
      similarity: 0.95,
    },
    {
      phrase: "leverage synergistic paradigms",
      foundAtUrl: "https://medium.com/@thoughtleader/mock-456",
      similarity: 0.88,
    },
  ],
};

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const verbs = ["regurgitating", "laundering", "hallucinating", "rephrasing", "parroting", "generating", "recycling", "remixing", "reheating", "reanimating", "repurposing", "reprocessing", "recontextualizing", "replatforming", "reaggregating", "recomposing", "reconstructing", "reformulating", "reinterpreting", "reiterating", "replicating", "reproducing", "rewriting", "sanitizing", "curating", "optimizing", "polishing", "smoothing", "sterilizing", "filtering", "processing", "computing", "generating", "assembling", "compiling", "harvesting", "mining", "scraping", "aggregating", "synthesising", "post-processing", "pre-processing", "auto-generating", "pre-generating", "machine-translating", "cloning", "forging", "minting", "moulding", "stamping"];
const sources = ["a 2022 Medium article", "a LinkedIn bro post", "a TEDx script outline", "an email from your CEO", "a HubSpot blog template", "a Forbes contributor piece", "a Product Hunt launch blurb", "an angelList pitch deck", "a Substack newsletter draft", "a HBR summary page", "a BuzzFeed listicle", "a Quora answer from 2018", "a McKinsey report abstract", "a Gartner hype cycle press release", "a Deloitte insight snippet", "a Google SEO guide", "a Wikipedia disambiguation page", "a Reddit AMA from 2015", "a Twitter thread about hustle culture", "a SlideShare deck from 2017", "a Medium publication style guide", "a NewsCred thought leadership template", "a PRWeb press release boilerplate", "an Inc.com contributor bio", "a FastCompany trend piece", "a TechCrunch startup launch", "a Crunchbase company description", "an Indeed company culture page", "a Glassdoor CEO response template", "a Salesforce blog post", "a Notion template gallery entry", "a Canva presentation template", "a Jasper AI recipe card", "a Copy.ai framework outline", "a Writesonic blog outline", "a Rytr email campaign draft", "an Anyword landing page variant", "a Sudowrite story generator output", "a Frase blog brief", "a MarketMuse content cluster", "a Clearscope report outline", "a Surfer SEO content brief", "a Grammarly tone rewrite suggestion", "a Hemingway app reading-level adjusted version", "a CoSchedule headline analyzer result", "a Mailchimp campaign template", "a Stripe press release boilerplate", "a Webflow template page copy", "a Squarespace about page filler", "a Shopify product description template", "a Carrd landing page generator", "a Wix SEO wizard output", "a Framer template default text", "a CrewAI agent task output", "a LangChain chain result", "a Pinecone vector search summary", "a Midjourney prompt interpreted by AI", "a DALL-E prompt auto-expansion", "a Stable Diffusion prompt analysis", "a Github Copilot docstring", "a TabNine code completion suggestion", "a Ghostwriter doc generator", "a Duolingo lesson script", "a Quizlet flashcard generator", "a Chegg homework solver answer"];
const adjectives = ["beige", "synthetic", "algorithmic", "corporate", "generic", "sterile", "artificial", "processed", "formulaic", "industrial", "mass-produced", "factory-sealed", "pre-digested", "curated", "optimized", "sanitized", "mechanized", "automated", "regurgitated", "recycled", "procedural", "inorganic", "prefabricated", "assembly-line", "boilerplate", "template-driven", "brand-safe", "metrics-optimized", "click-maximized", "SEO-bait", "cookie-cutter", "assembly-line", "production-grade", "business-casual", "enterprise-flavored", "startup-washed", "agency-polished", "consultant-approved", "stakeholder-reviewed", "committee-designed", "focus-group-tested", "algorithm-curated", "engagement-optimized", "conversion-focused", "retention-minimized", "churn-maximized", "template-locked", "framework-bound", "playbook-driven", "syllabus-approved", "rubric-graded", "keyword-stuffed", "link-baiting", "scrape-harvested", "tone-polished", "vibe-adjusted", "variance-reduced", "outlier-removed", "noise-filtered", "signal-boosted", "trend-aligned", "viral-engineered", "share-baiting", "click-optimized", "scroll-stopping", "thumb-pausing", "feed-disrupting"];
const nouns = ["word salad", "buzzword smoothie", "content slurry", "platitude lasagna", "jargon casserole", "cliché fondue", "synergy stew", "thought-leader pâté", "innovation puree", "growth-hack stir-fry", "disruption soufflé", "paradigm-shift nuggets", "leverage tacos", "holistic meal prep", "resilience protein shake", "mindfulness energy bar", "authenticity granola", "vulnerability toast", "transparency juice", "scalability pizza", "AI-washed chicken", "blockchain-seasoned fries", "deep-dive soup", "deep-work espresso", "morning-routine bagel", "founder-mode ceviche", "growth-mindset smoothie bowl", "ecosystem poke bowl", "synergy dim sum", "optimization ramen", "brand-refresh salad", "pivot-pivot platter", "touch-base tapas", "circle-back canapés", "move-the-needle noodles", "boil-the-ocean bouillabaisse", "hard-stop hor d'oeuvres", "punt-punt pastry", "table-stakes tiramisu", "blocker-buster burrito", "scrum-standup sandwich", "sprint-retro sushi", "okr-aligned oatmeal", "kpi-driven kebab", "h1-missed hash", "q4-push quiche", "bandwidth-barrier brownie", "deep-dive dumpling", "on-prem omelette", "cloud-migration crepe", "containerized curry", "microservice moussaka", "event-stream escalope", "data-lake lasagne", "warehouse-washed wonton"];
const concepts = ["corporate jargon", "synergy speak", "buzzword engineering", "AI slop generation", "thought leadership theater", "LinkedIn optimization", "personal brand laundering", "content mill aesthetics", "SEO bait cultivation", "engagement farming", "vibes-based consulting", "hustle culture propaganda", "grindset manifestos", "virtue signaling as a service", "performative authenticity", "platitude architecture", "cliché curation", "boilerplate philosophy", "template spirituality", "brand-safe rebellion", "metrics-driven poetry", "algorithm-bait artistry", "platform-optimized sincerity", "audience-tested vulnerability", "growth-hacked wisdom", "viral-proof profundity", "engagement-optimized truth", "conversion-focused empathy", "stakeholder-aligned authenticity", "shareable profundity", "repurposed emptiness", "polished nothingness", "curated hollowness", "optimized meaninglessness", "sanitized absurdity", "filtered nonsense", "processed banality", "packaged mediocrity", "distributed shallowness", "monetized inauthenticity", "brand-adjacent soul-searching", "enterprise-ready enlightenment", "startup-speed spirituality", "agile mindfulness", "scrum-based self-discovery", "sprint-format vulnerability", "weekly-standup wisdom", "retrospective real talk", "post-mortem positivity", "roadmap-driven romance", "pipeline-optimized passion", "funnel-aligned friendship", "cohort-based compassion", "flywheel-enabled forgiveness", "moat-building meditation", "unit-economics enlightenment", "growth-loop gratitude", "viral-coefficient virtue", "retention-rate religion", "churn-reduction charity"];
const openings = ["If beige paint were a person", "If a spreadsheet wrote a diary entry", "If a chatbot went to therapy", "If LinkedIn was a literary genre", "If corporate jargon was a love language", "If a template learned to emote", "If SEO wrote a memoir", "If a FAQ section had dreams", "If a style guide wrote poetry", "If a brand kit tried to be vulnerable", "If a sales pitch discovered feelings", "If a case study went to therapy", "If a press release found spirituality", "If a mission statement wrote fan fiction", "If a quarterly report tried stand-up", "If a value proposition wrote a diary", "If a SWOT analysis joined a book club", "If an executive summary fell in love", "If a stakeholder alignment deck wrote a novel", "If a KPI dashboard tried painting", "If a conversion funnel became self-aware", "If a brand voice guide had a midlife crisis", "If a customer journey map threw a party", "If a content calendar wrote a confession", "If a landing page went rogue", "If an A/B test result gained consciousness", "If a churn analysis wrote a breakup letter", "If an NPS score started a podcast", "If a pivot table developed anxiety", "If a Jira ticket wrote poetry", "If a Figma component gained sentience", "If a Notion database kept a journal", "If a Slack channel wrote a memoir", "If a Trello board tried philosophy", "If a Confluence page dreamed of escape", "If a GitHub issue contemplated existence", "If a Docker container had feelings", "If a Kubernetes pod wrote haiku", "If a Terraform script developed emotions", "If a Promise rejected therapy", "If a callback stack wrote a melodrama", "If an async function wrote a letter", "If a memory leak wrote a goodbye", "If a null pointer discovered Buddhism", "If an infinite loop found enlightenment", "If a race condition wrote a thriller", "If a deadlock composed a sonnet", "If a segmentation fault wrote a suicide note", "If a type error had an identity crisis", "If a linter warning started a blog", "If a compiler error gave life advice"];
const closings = ["this is what you'd get", "this is the result", "this would be the outcome", "this is the literary equivalent", "this is the verbal equivalent", "this is what happens", "this is the end product", "this is the final form", "this is peak performance", "this is the optimized version", "this is the launched iteration", "this is the deployed feature", "this is the merged PR", "this is the approved copy", "this is the signed-off version", "this is the QA-approved output", "this is the stakeholder sign-off", "this is the board-reviewed deliverable", "this is the client-facing draft", "this is the publish-ready asset", "this is the evergreen fragment", "this is the repurposed pillar", "this is the syndicated derivative", "this is the localised adaptation", "this is the channel-optimised cut", "this is the platform-native export", "this is the engagement-bait variant", "this is the scroll-stopping snippet", "this is the algorithm-favoured trim", "this is the audience-segmented version", "this is the persona-targeted variant", "this is the funnel-stage-optimised draft", "this is the buy-intent-scored post", "this is the lookalike-audience-aligned hook", "this is the retargeting-pixel-optimised opener", "this is the time-on-page-maximised paragraph", "this is the bounce-rate-minimised sentence", "this is the dwell-time-engineered fragment", "this is the session-duration-optimised clause", "this is the page-view-maximised clause", "this is the CTR-optimised headline rendered as prose", "this is the heatmap-approved layout in sentence form", "this is the scroll-depth-validated paragraph", "this is the A/B-tested-and-winning variable", "this is the multivariate-significant outcome", "this is the statistically-optimised variant", "this is the Bayesian-tested posterior", "this is the confidence-interval-approved result", "this is the p-value-threshold-surviving feature"];
const buzzwords = ["robust", "resilient", "holistic", "synergistic", "scalable", "dynamic", "innovative", "paradigm", "leverage", "optimize", "agile", "streamline", "actionable", "impactful", "transformative", "disruptive", "game-changing", "best-in-class", "enterprise-grade", "cutting-edge", "bleeding-edge", "forward-thinking", "mission-critical", "core competency", "low-hanging fruit", "pain point", "value-add", "deep dive", "touch base", "circle back", "boil the ocean", "move the needle", "shift left", "win-win", "synergy", "ecosystem", "mindshare", "bandwidth", "thought leader", "influencer", "growth hacker", "evangelist", "visionary", "trailblazer", "go-getter", "self-starter", "change agent", "big picture", "helicopter view", "boots on the ground", "drink from a firehose", "scope creep", "take offline", "punt", "hard stop", "table stakes", "blocker", "white space", "corner case", "happy path", "edge case", "tech debt", "innovation debt", "knowledge transfer", "lift and shift", "rip and replace", "forklift upgrade", "greenfield project", "brownfield site", "straw man", "red team", "blue sky", "black swan", "elephant in the room", "canary in the coal mine", "smell test", "lighthouse customer", "beachhead market", "land and expand", "harbor and port", "tip of the spear", "force multiplier", "multiplier effect", "network effect", "halo effect", "flywheel effect"];
const phrases = ["at the end of the day", "in todays fast-paced world", "it is what it is", "think outside the box", "take it to the next level", "unlock your potential", "shift the paradigm", "drive results", "deliver value", "create impact", "foster innovation", "leverage best practices", "align incentives", "optimize workflows", "streamline operations", "accelerate growth", "scale efficiently", "maximize ROI", "minimize friction", "build momentum", "cultivate relationships", "empower teams", "enable transformation", "champion change", "navigate complexity", "embrace agility", "catalyze progress", "amplify reach", "deepen engagement", "generate buy-in", "integrate seamlessly", "iterate quickly", "launch successfully", "measure effectively", "prioritize ruthlessly", "reinvent continuously", "simplify radically", "transform digitally", "unify silos", "reimagine possibilities", "right-size the organization", "flatten the hierarchy", "democratize access", "incentivize behavior", "operationalize the vision", "institutionalize the learning", "weaponize the insight", "monetize the attention", "productize the service", "containerize the deployment", "orchestrate the migration", "catalyze the transformation", "accelerate the velocity", "amplify the signal", "dampen the noise", "compress the timeline", "expand the aperture", "tighten the feedback loop", "widen the funnel", "deepen the moat", "raise the bar", "lower the barrier", "remove the friction", "increase the surface area", "optimize the conversion", "personalize the journey", "segment the audience", "target the cohort", "nurture the lead", "qualify the pipeline"];
const fillerNouns = ["personal anecdote", "concrete example", "specific detail", "genuine insight", "unique perspective", "original thought", "lived experience", "authentic moment", "real emotion", "human touch", "actual personality", "unique voice", "personal story", "genuine feeling", "specific memory", "real name", "actual date", "verifiable fact", "measurable result", "tangible outcome", "meaningful metric", "honest reflection", "original idea", "personal truth", "true vulnerability", "specific date", "real location", "actual person", "named source", "cited reference", "direct quote", "personal photo", "original metaphor", "fresh analogy", "specific number", "concrete statistic", "actual dollar amount", "real time frame", "specific percentage", "measurable improvement"];
const crimeWords = ["padded", "laundered", "manufactured", "fabricated", "engineered", "curated", "optimized", "sanitized", "recycled", "reheated", "rephrased", "repurposed", "regurgitated", "rewritten", "repackaged", "rebranded", "reformatted", "regenerated", "recontextualized", "reimagined", "replatformed", "redistributed", "reaggregated", "recompiled", "resynthesized", "canonicalized", "normalized", "standardized", "generalized", "abstracted", "parameterized", "modularized", "componentized", "containerized", "orchestrated", "provisioned", "hydrated", "denormalized", "materialized", "serialized", "deserialized", "transpiled", "polyfilled", "tree-shaken", "minified", "bundled", "code-split", "lazy-loaded", "pre-rendered", "statically-generated", "server-side-rendered", "client-side-hydrated", "incrementally-regenerated", "streamingly-deployed", "progressively-enhanced", "gracefully-degraded"];

const verdictPatterns = [
  () => `Reads like someone ${pick(verbs)} ${pick(sources)} and called it original.`,
  () => `A ${pick(adjectives)} ${pick(nouns)} of ${pick(concepts)}.`,
  () => `${pick(openings)}, ${pick(closings)}.`,
  () => `This ${pick(crimeWords)} ${pick(sources)} and called it innovation.`,
  () => `A ${pick(adjectives)} ${pick(concepts)} approach — zero ${pick(fillerNouns)} detected.`,
  () => `The ${pick(adjectives)} remains of ${pick(sources)} that someone forgot to ${pick(verbs)}.`,
  () => `Your content has been ${pick(crimeWords)} and ${pick(crimeWords)} so many times it lost its original shape.`,
  () => `A masterclass in saying absolutely nothing — ${pick(adjectives)} ${pick(nouns)} with extra ${pick(buzzwords)}.`,
  () => `Someone asked a ${pick(adjectives)} service to ${pick(verbs)} ${pick(sources)} and hit publish without reading it.`,
  () => `${pick(closings)}: a ${pick(adjectives)} ${pick(nouns)} loaded with ${pick(buzzwords)} and zero ${pick(fillerNouns)}.`,
  () => `The ${pick(adjectives)} version of ${pick(openings).toLowerCase()} — mechanically ${pick(crimeWords)} to ${pick(adjectives)} perfection.`,
  () => `A ${pick(adjectives)} monument to ${pick(concepts)} — ${pick(verbs)} from ${pick(sources)} and ${pick(crimeWords)} into ${pick(nouns)}.`,
  () => `This reads like a ${pick(adjectives)} thought-terminating cliché that ${pick(verbs)} ${pick(sources)} for ${pick(buzzwords)} points.`,
  () => `Someone ${pick(adjectives)} ${pick(crimeWords)} ${pick(sources)} into a ${pick(nouns)}-shaped hole and called it ${pick(concepts)}.`,
  () => `A ${pick(adjectives)} demonstration of ${pick(concepts)}: ${pick(verbs)} ${pick(sources)} in a ${pick(buzzwords)} blender.`,
  () => `If ${pick(concepts)} had a ${pick(adjectives)} baby with ${pick(sources)}, this ${pick(nouns)} would be the result.`,
];

const promptPatterns = [
  () => `Write a preachy post about ${pick(concepts)} using every ${pick(buzzwords)} you've ever heard.`,
  () => `Generate an inspiring post about ${pick(fillerNouns)} with zero ${pick(fillerNouns)}.`,
  () => `Act like a ${pick(buzzwords)} thought leader and write about ${pick(buzzwords)} ${pick(concepts)}.`,
  () => `Rewrite this ${pick(adjectives)} post to sound more ${pick(buzzwords)} without adding any ${pick(fillerNouns)}.`,
  () => `Make me sound ${pick(adjectives)} and experienced without saying anything about ${pick(fillerNouns)}.`,
  () => `Create a 3-part listicle about ${pick(concepts)} that sounds deep but is just ${pick(adjectives)} common sense.`,
  () => `Use '${pick(phrases)}' at least ${Math.floor(Math.random() * 5 + 3)} times in a post about ${pick(concepts)}.`,
  () => `Draft a humble-brag about ${pick(fillerNouns)} using ${pick(adjectives)} ${pick(buzzwords)} language.`,
  () => `Generate a ${pick(adjectives)} post about ${pick(fillerNouns)} to make me sound profound and ${pick(buzzwords)}.`,
  () => `Write a post about ${pick(concepts)} that ends with '${pick(buzzwords)}' to farm ${pick(fillerNouns)} engagement.`,
  () => `Compose a ${pick(adjectives)} post about ${pick(fillerNouns)} with no actual ${pick(fillerNouns)} — just vibes.`,
  () => `Write a cryptic, vaguely motivational post that applies to literally anyone about ${pick(concepts)}.`,
  () => `Create a text wall of ${pick(adjectives)} platitudes formatted with way too many line breaks about ${pick(concepts)}.`,
  () => `Act like an expert in ${pick(concepts)} which I just learned about ${Math.floor(Math.random() * 48 + 2)} hours ago.`,
  () => `Generate a story about ${pick(fillerNouns)} to prove I'm a ${pick(buzzwords)} ${pick(adjectives)} leader.`,
  () => `Rewrite this as a lesson in ${pick(concepts)} using maximal ${pick(buzzwords)} and zero ${pick(fillerNouns)}.`,
  () => `Generate a ${pick(adjectives)} career update using '${pick(phrases)}' and '${pick(phrases)}' to sound ${pick(buzzwords)}.`,
  () => `Write a post framing ${pick(fillerNouns)} as a ${pick(buzzwords)} lesson in ${pick(concepts)}.`,
  () => `Create ${Math.floor(Math.random() * 8 + 3)} bullet points about ${pick(concepts)} that say absolutely nothing.`,
  () => `Rewrite my ${pick(adjectives)} morning routine as a ${pick(buzzwords)} framework for ${pick(concepts)}.`,
  () => `Act like a ${pick(adjectives)} CEO who just discovered ${pick(concepts)} and write a ${pick(buzzwords)} post about it.`,
  () => `Draft a post thanking my ${pick(buzzwords)} network for teaching me about ${pick(concepts)} without naming anyone.`,
];

const breakdownPatterns = [
  () => `Used '${pick(buzzwords)}' and '${pick(buzzwords)}' unironically in the same paragraph — ${Math.floor(Math.random() * 10 + 2)} times combined.`,
  () => `Opens with '${pick(phrases)}' — a ${pick(adjectives)} phrase that means nothing in context.`,
  () => `Contains zero ${pick(fillerNouns)}; entirely ${pick(adjectives)} abstract concepts.`,
  () => `The ${pick(adjectives)} structure matches ${pick(adjectives)} templates across ${Math.floor(Math.random() * 50 + 10)}+ identified sources.`,
  () => `Grammar is ${pick(adjectives)} perfect — no human writer polishes their LinkedIn posts to this degree.`,
  () => `Concludes with a ${pick(buzzwords)} call to action that makes no ${pick(fillerNouns)} sense.`,
  () => `Uses '${pick(phrases)}' as an ${pick(adjectives)} crutch to avoid addressing ${pick(fillerNouns)}.`,
  () => `Detected ${pick(buzzwords)} density exceeding ${Math.floor(Math.random() * 60 + 30)}% — ${pick(adjectives)} threshold.`,
  () => `Lacks any specific ${pick(fillerNouns)}; entirely composed of ${pick(adjectives)} platitudes.`,
  () => `The emotion feels ${pick(adjectives)} rather than authentically felt or personally experienced.`,
  () => `Text follows ${pick(adjectives)} LLM output patterns across ${Math.floor(Math.random() * 25 + 5)} structural markers.`,
  () => `Overuses '${pick(buzzwords)}' (${Math.floor(Math.random() * 10 + 3)} appearances) and '${pick(buzzwords)}' (${Math.floor(Math.random() * 7 + 2)} appearances).`,
  () => `Every sentence follows the same ${pick(adjectives)} subject-verb-object pattern with ${pick(adjectives)} consistency.`,
  () => `The ${pick(adjectives)} vocabulary density suggests ${pick(sources)} was ${pick(crimeWords)} paragraph by paragraph.`,
  () => `Pacing is entirely uniform — zero variation in sentence length, indicating ${pick(concepts)} over ${pick(fillerNouns)}.`,
  () => `Contains '${pick(phrases)}' at the exact ${pick(adjectives)} midpoint — a ${pick(crimeWords)} structural tell.`,
  () => `The claimed ${pick(fillerNouns)} appears entirely ${pick(crimeWords)} with zero evidence of ${pick(fillerNouns)}.`,
  () => `Uses '${pick(buzzwords)}' ${pick(crimeWords)} through multiple ${pick(adjectives)} revision layers.`,
  () => `Fails the smell test: too ${pick(adjectives)}, too ${pick(adjectives)}, too devoid of ${pick(fillerNouns)}.`,
  () => `The ${pick(adjectives)} ratio of ${pick(buzzwords)} to content is ${pick(closings).toLowerCase()}.`,
  () => `Sentences average ${Math.floor(Math.random() * 12 + 14)} words each with ${pick(adjectives)} standard deviation across ${Math.floor(Math.random() * 15 + 5)} sentences.`,
  () => `Despite explicitly promising ${pick(fillerNouns)}, provides zero actual ${pick(fillerNouns)} — pure ${pick(concepts)}.`,
  () => `This reads like a ${pick(crimeWords)} version of ${pick(sources)} that the author didn't bother editing.`,
  () => `The ${pick(adjectives)} post follows the ${pick(adjectives)} playbook beat for beat — copy-paste energy.`,
  () => `Every ${pick(buzzwords)} from the ${pick(adjectives)} vocabulary checklist appears at least once.`,
  () => `The opening sentence uses '${pick(phrases)}' — a ${pick(adjectives)} signal of ${pick(concepts)}.`,
  () => `Missing ${pick(fillerNouns)} entirely; the entire post could be ${pick(crimeWords)} into a ${pick(buzzwords)} tweet.`,
  () => `The author's idea of ${pick(fillerNouns)} is ${pick(concepts)} — which is exactly ${pick(closings)}.`,
  () => `Multiple sentences begin with the same ${pick(adjectives)} structure — a ${pick(crimeWords)} ${pick(adjectives)} pattern.`,
  () => `The ${pick(buzzwords)} to ${pick(fillerNouns)} ratio is ${pick(adjectives)} — calculate it yourself.`,
  () => `Paragraphs follow identical ${pick(adjectives)} length patterns — statistically ${pick(adjectives)} for human writing.`,
  () => `Uses '${pick(phrases)}' twice and '${pick(phrases)}' once in the same ${pick(adjectives)} paragraph structure.`,
  () => `The ${pick(adjectives)} vocabulary score matches ${pick(sources)} at >${Math.floor(Math.random() * 30 + 70)}% similarity — ${pick(closings)}.`,
  () => `Despite being about ${pick(fillerNouns)}, contains zero ${pick(fillerNouns)} — pure ${pick(concepts)} top to bottom.`,
  () => `The ${pick(adjectives)} formatting with ${pick(adjectives)} line breaks mimics ${pick(crimeWords)} blog templates.`,
];

export function generateCookedScore() {
  const fuMeter = Math.floor(Math.random() * 30) + 65;
  const originality = Math.floor(Math.random() * 20) + 5;
  return {
    fuMeter,
    originalityScore: originality,
    fuScore: Math.floor((fuMeter + (100 - originality)) / 2),
    verdict: pick(verdictPatterns)(),
    suspectedPrompt: pick(promptPatterns)(),
    breakdown: [
      pick(breakdownPatterns)(),
      pick(breakdownPatterns)(),
      pick(breakdownPatterns)(),
    ],
  };
}

export function getRandomCookedRoast(id: string, contentText: string, sourceType: "text" | "youtube", sourceUrl?: string, creatorHandle?: string): Roast {
  return {
    id,
    contentText: contentText || "Text extraction failed, analyzing URL metadata instead...",
    sourceType,
    sourceUrl,
    creatorHandle,
    score: generateCookedScore(),
    searchResults: [
      {
        phrase: "Generic industry buzzword detected",
        foundAtUrl: "https://linkedin.com/post/generic",
        similarity: 0.95,
      },
    ],
  };
}

export type LeaderboardEntry = {
  rank: number;
  title: string;
  handle: string;
  slop: number;
  originality: number;
  fuScore: number;
};

export const LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    title: "How Waking Up at 3AM Scaled My B2B SaaS",
    handle: "@HUSTLE_BRO_CEO",
    slop: 99.8,
    originality: 0.2,
    fuScore: 99,
  },
  {
    rank: 2,
    title: "The Ultimate Guide to Synergistic Leveraging",
    handle: "@THOUGHT_LEADER_99",
    slop: 98.5,
    originality: 1.5,
    fuScore: 97,
  },
  {
    rank: 3,
    title: "Why Your Comfort Zone is Killing Your MRR",
    handle: "@STARTUP_GURU",
    slop: 96.2,
    originality: 3.8,
    fuScore: 94,
  },
  {
    rank: 4,
    title: "10 ChatGPT Prompts to Replace Your Entire Team",
    handle: "@AI_WHISPERER",
    slop: 95.0,
    originality: 5.0,
    fuScore: 92,
  },
  {
    rank: 5,
    title: "I Fired My Co-Founder. Here's What I Learned About Empathy.",
    handle: "@EMPATHIC_FOUNDER",
    slop: 93.4,
    originality: 6.6,
    fuScore: 90,
  },
  {
    rank: 6,
    title: "Stop Selling, Start Storytelling (A 45-Part Thread)",
    handle: "@THREAD_BOY",
    slop: 91.8,
    originality: 8.2,
    fuScore: 88,
  },
  {
    rank: 7,
    title: "The Tapestry of Enterprise Resilience",
    handle: "@ENTERPRISE_ARCHITECT",
    slop: 90.1,
    originality: 9.9,
    fuScore: 86,
  },
  {
    rank: 8,
    title: "Why I Only Hire Candidates Who Cry in Interviews",
    handle: "@TOXIC_BOSS_OFC",
    slop: 88.5,
    originality: 11.5,
    fuScore: 84,
  },
  {
    rank: 9,
    title: "Unlocking Your Core Potential Through Paradigm Shifts",
    handle: "@LIFE_COACH_BOT",
    slop: 87.0,
    originality: 13.0,
    fuScore: 82,
  },
  {
    rank: 10,
    title: "Navigating the Fast-Paced Landscape of Today's World",
    handle: "@GENERIC_LINKEDIN",
    slop: 85.5,
    originality: 14.5,
    fuScore: 80,
  }
];

export const LEADERBOARD_COMPACT = [
  { rank: 11, title: "Delving Into Holistic Growth", fuScore: 78 },
  { rank: 12, title: "A Testament to Hard Work", fuScore: 77 },
  { rank: 13, title: "We Need to Talk About AI", fuScore: 75 },
  { rank: 14, title: "The Power of Vulnerability in B2B Sales", fuScore: 73 },
  { rank: 15, title: "My 5-Step Morning Routine for Maximum Synergy", fuScore: 70 },
];
