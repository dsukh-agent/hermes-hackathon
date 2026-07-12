"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const apiRef = api as any;
import AppShell from "@/components/AppShell";
import LeaderboardTable from "@/components/LeaderboardTable";
import LiveTerminalFeed from "@/components/LiveTerminalFeed";
import { useRouter } from "next/navigation";

export default function LeaderboardContent() {
  const router = useRouter();
  const roasts = useQuery(apiRef.roasts.list);
  const addBounty = useMutation(apiRef.roasts.addBounty);

  const handleSelectRoast = (id: string) => {
    router.push(`/roast/${id}`);
  };

  const handleAddBounty = async (id: string, amount: number) => {
    try {
      await addBounty({ id, amount });
    } catch {
      console.log("Add bounty mock");
    }
  };

  let displayRoasts = roasts;
  
  if (roasts && roasts.length === 0) {
     displayRoasts = [
       {
         _id: "mock-1",
         contentText: "In today's fast-paced world, it's more important than ever to stay ahead of the curve. Thrilled to announce that I've joined...",
         sourceType: "text",
         fuMeter: 99.8,
         bountyPoolAmount: 1450,
         verdict: "A perfect storm of LinkedIn hustle culture buzzwords."
       },
       {
         _id: "mock-2",
         contentText: "I am humbled and honored to be recognized among the top 30 under 30 visionary thought leaders in the B2B SaaS space...",
         sourceType: "text",
         fuMeter: 98.5,
         bountyPoolAmount: 1200,
         verdict: "Reads like an AI hallucinated a TED Talk."
       },
       {
         _id: "mock-3",
         contentText: "Here are 10 ChatGPT prompts that will save you 40 hours a week and replace your entire marketing team (Bookmark this!):",
         sourceType: "text",
         fuMeter: 96.2,
         bountyPoolAmount: 950,
         verdict: "Plagiarized from a 2022 Medium article and fed through a thesaurus."
       },
       {
         _id: "mock-4",
         contentText: "What I learned about leadership from missing my flight: 1. Adversity breeds resilience 2. Time is a construct 3. Always leverage synergies.",
         sourceType: "text",
         fuMeter: 94.0,
         bountyPoolAmount: 820,
         verdict: "Generic corporate slop, completely devoid of human soul."
       },
       {
         _id: "mock-5",
         contentText: "The paradigm shift in Web3 architecture dictates a fundamentally new approach to how we onboard stakeholders...",
         sourceType: "text",
         fuMeter: 92.1,
         bountyPoolAmount: 700,
         verdict: "So synthetic it gave me microplastics in my brain."
       },
       {
         _id: "mock-6",
         contentText: "I woke up at 3 AM today. Not because I had to, but because my drive to disrupt the industry wouldn't let me sleep.",
         sourceType: "text",
         fuMeter: 90.5,
         bountyPoolAmount: 540,
         verdict: "This is what happens when you let a toaster write your thoughts."
       },
       {
         _id: "mock-7",
         contentText: "Are you truly unlocking your full potential, or are you just going through the motions? A thread 🧵👇",
         sourceType: "text",
         fuMeter: 88.0,
         bountyPoolAmount: 410,
         verdict: "A monument to the Dunning-Kruger effect, powered by GPT."
       },
       {
         _id: "mock-8",
         contentText: "The tapestry of modern enterprise software is woven with threads of innovation, perseverance, and holistic growth.",
         sourceType: "text",
         fuMeter: 85.5,
         bountyPoolAmount: 350,
         verdict: "The literary equivalent of unseasoned boiled chicken."
       },
       {
         _id: "mock-9",
         contentText: "It's crucial to remember that at the end of the day, B2B sales is just human-to-human connection. Let's delve into why.",
         sourceType: "text",
         fuMeter: 82.3,
         bountyPoolAmount: 200,
         verdict: "I've seen terms of service with more emotional depth than this."
       },
       {
         _id: "mock-10",
         contentText: "Just had an incredible coffee chat with a visionary founder who reminded me that the only limit is the one we set for ourselves.",
         sourceType: "text",
         fuMeter: 80.1,
         bountyPoolAmount: 150,
         verdict: "I can hear the default ChatGPT tone bleeding through the screen."
       }
     ];
  }

  return (
    <AppShell active="leaderboard">
      <div className="p-margin-mobile md:p-margin-desktop">
        {/* Header */}
        <div className="mb-12 border-l-border-width-heavy border-primary pl-6">
          <h1 className="font-headline-lg text-[32px] md:text-headline-lg text-primary uppercase mb-2">
            GLOBAL_SLOP_LEADERBOARD
          </h1>
          <p className="font-code-sm text-code-sm text-on-surface-variant max-w-2xl">
            [SYSTEM_LOG] DETECTING HIGH CONCENTRATIONS OF DERIVATIVE CONTENT. THE FOLLOWING ENTRIES
            HAVE EXCEEDED ADMISSIBLE LEVELS OF GENERATIVE MEDIOCRITY. ROAST AT WILL.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Main leaderboard table */}
          <div className="md:col-span-8">
            {displayRoasts === undefined ? (
              <div className="text-center py-12 border border-dashed border-zinc-800 rounded-2xl bg-[#0a0a0c]">
                <p className="text-zinc-500 font-mono text-xs">LOADING...</p>
              </div>
            ) : (
              <LeaderboardTable
                roasts={displayRoasts}
                onSelectRoast={handleSelectRoast}
                onAddBounty={handleAddBounty}
              />
            )}
          </div>

          {/* Live status sidepiece */}
          <div className="md:col-span-4 border-border-width-heavy border-primary bg-primary p-6 flex flex-col justify-center text-background">
            <div className="font-code-sm text-code-sm uppercase mb-2">LIVE_STATUS</div>
            <div className="font-display-xl text-[40px] leading-tight tracking-tighter mb-4">
              TOTAL ROASTS: {displayRoasts?.length ?? 0}
            </div>
            <div className="h-2 w-full bg-background mb-6 relative">
              <div
                className="absolute left-0 top-0 h-full bg-secondary-container"
                style={{ width: `${Math.min(100, (displayRoasts?.length ?? 0) * 10)}%` }}
              />
            </div>
            <p className="font-label-bold text-label-bold uppercase">GLOBAL_CLEANSE_INDEX: 22%</p>

            {/* Live analysis stream */}
            <div className="mt-8 border border-background/20 p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-background rounded-full animate-pulse" />
                <span className="font-code-sm text-code-sm uppercase">
                  LIVE_ANALYSIS_STREAM
                </span>
              </div>
              <div className="font-code-sm text-code-sm text-background/70 space-y-1 h-32 overflow-hidden">
                <LiveTerminalFeed
                  seed={[
                    "> ANALYZING ENTRY... PATTERN MATCHED: GPT-4O_DEFAULT_ADJECTIVE_OVERUSE",
                    "> SCORING @LLM_WHISPERER... SLOP PROBABILITY: 99.4%",
                    "> ALERT: ZERO CREATIVE SOUL DETECTED",
                    "> CALCULATING FU_SCORE... FINALIZING RESULT...",
                    "> [SYSTEM] ROAST ENGINE ENGAGED. PREPARING INSULTS.",
                  ]}
                  pool={[
                    "> ANALYZING SYNTAX... PATTERN MATCHED: GPT-4",
                    "> DETECTED REPETITIVE STRUCTURE",
                    "> FLAGGED FOR EXCESSIVE ADJECTIVES",
                    "> PURGING LOW-VALUE DATA FROM BUFFER...",
                    "> SYSTEM_ALERT: SLOP THRESHOLD EXCEEDED",
                    "> INITIATING BRUTAL ROAST PROTOCOL...",
                  ]}
                  max={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
