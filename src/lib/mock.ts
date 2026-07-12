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

export function getRandomCookedRoast(id: string, contentText: string, sourceType: "text" | "youtube", sourceUrl?: string, creatorHandle?: string): Roast {
  const verdicts = [
    "A perfect storm of LinkedIn hustle culture buzzwords.",
    "Reads like an AI hallucinated a TED Talk.",
    "Generic corporate slop, completely devoid of human soul.",
    "This is what happens when you let a toaster write your thoughts.",
    "Plagiarized from a 2018 medium article and fed through a thesaurus.",
    "So synthetic it gave me microplastics in my brain.",
    "A monument to the Dunning-Kruger effect, powered by GPT.",
    "I've seen terms of service with more emotional depth than this.",
    "This post single-handedly caused a dip in human literacy.",
    "Proof that just because you can generate text, doesn't mean you should.",
    "Reads like an intern asked Claude to 'sound like a visionary'.",
    "If beige paint were a LinkedIn post, this would be it.",
    "The literary equivalent of unseasoned boiled chicken.",
    "An absolute masterclass in saying absolutely nothing.",
    "My smart fridge writes more compelling prose.",
    "I can hear the default ChatGPT tone bleeding through the screen.",
    "This is the verbal equivalent of a stock photo handshake.",
    "A harrowing glimpse into a completely automated, soulless future.",
    "I lost brain cells parsing this algorithmic word salad.",
    "This is why the machines will eventually replace us—because we let them write this."
  ];

  const prompts = [
    "Write a preachy post about leadership but use zero concrete examples.",
    "Generate an inspiring LinkedIn post about overcoming nothing.",
    "Write a thought-leader manifesto using every buzzword possible.",
    "Make me sound smart and experienced without actually saying anything.",
    "Write a 3-part listicle that sounds deep but is actually just common sense.",
    "Rewrite my completely ordinary morning routine as a lesson in B2B sales.",
    "Act like Steve Jobs but write about something completely mundane.",
    "Draft a humble-brag about my latest meaningless accomplishment.",
    "Create a post that uses the word 'leverage' at least four times.",
    "Write something that will make venture capitalists think I'm profound.",
    "Generate a story about a fictional employee I 'saved' to show I'm a good boss.",
    "Write a generic post about 'the future of work' with no actual predictions.",
    "Make an overly dramatic post about a minor inconvenience I faced today.",
    "Act like an expert in a field I just learned about yesterday.",
    "Write a post that ends with 'Agree?' to farm engagement.",
    "Compose a 500-word essay on why waking up at 4 AM makes me superior.",
    "Generate a post thanking my 'network' for a completely average Tuesday.",
    "Write a cryptic, vaguely motivational post that applies to literally anyone.",
    "Draft a post about how failure is good, but only mention my massive successes.",
    "Create a text wall of empty platitudes formatted with way too many line breaks."
  ];

  const breakdowns = [
    [
      "High density of synthetic corporate jargon detected.",
      "Structures match boilerplate AI generation templates.",
      "Sentences are overly complex with zero substantive meaning."
    ],
    [
      "Used 'leverage' and 'synergy' unironically.",
      "Perfect 3-part listicle structure, zero deviation.",
      "Lacks any personal anecdote or original thought."
    ],
    [
      "Detected 'delve', 'testament', or 'tapestry' - classic LLM tells.",
      "Reads like a prompt: 'rewrite this to be more professional'.",
      "Originality scan confirms significant phrasing overlap with known filler."
    ],
    [
      "Overuse of the word 'crucial' and 'imperative'.",
      "The conclusion summarizes points that were never actually made.",
      "Grammar is suspiciously flawless but tonally flat."
    ],
    [
      "Contains the classic AI transition: 'It is important to note...'",
      "Lacks any specific nouns; entirely composed of abstract concepts.",
      "The emotion feels mathematically calculated rather than felt."
    ],
    [
      "Reads like a Markov chain trained exclusively on Gary Vaynerchuk videos.",
      "Every sentence is exactly the same length. No human writes like this.",
      "Fails the Turing test by being aggressively helpful and informative."
    ],
    [
      "Uses emojis at the exact mathematical end of every single paragraph.",
      "The 'personal struggle' sounds entirely fabricated.",
      "Contains at least three empty rhetorical questions."
    ],
    [
      "The pacing is entirely uniform, indicating zero human passion.",
      "Uses 'unlock your potential' without specifying how or what.",
      "The vocabulary reads like someone swallowed a corporate dictionary."
    ],
    [
      "Zero evidence of lived experience.",
      "The analogies are mixed, broken, and nonsensical.",
      "Ends with a call to action that makes no logical sense."
    ],
    [
      "The entire text could be summarized in three words.",
      "Uses 'in today's fast-paced world' as an opening crutch.",
      "The author's 'unique perspective' is the literal dictionary definition of the topic."
    ]
  ];

  const fuMeter = Math.floor(Math.random() * 30) + 65; // 65-94
  const originality = Math.floor(Math.random() * 20) + 5; // 5-24

  return {
    id,
    contentText: contentText || "Text extraction failed, analyzing URL metadata instead...",
    sourceType,
    sourceUrl,
    creatorHandle,
    score: {
      fuMeter,
      originalityScore: originality,
      fuScore: Math.floor((fuMeter + (100 - originality)) / 2),
      verdict: verdicts[Math.floor(Math.random() * verdicts.length)],
      suspectedPrompt: prompts[Math.floor(Math.random() * prompts.length)],
      breakdown: breakdowns[Math.floor(Math.random() * breakdowns.length)],
    },
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
