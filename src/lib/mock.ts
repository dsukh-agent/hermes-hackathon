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
