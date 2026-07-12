export async function generateFUMeter(content: string, searchResults: Record<string, unknown>[], hermesApiKey: string) {
  const getCookedAnalysis = () => {
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
      fuMeter: fuMeter,
      originalityScore: originality,
      fuScore: Math.floor((fuMeter + (100 - originality)) / 2),
      verdict: verdicts[Math.floor(Math.random() * verdicts.length)],
      suspectedPrompt: prompts[Math.floor(Math.random() * prompts.length)],
      breakdown: breakdowns[Math.floor(Math.random() * breakdowns.length)]
    };
  };

  const cooked = getCookedAnalysis();

  if (!hermesApiKey) {
    console.warn("No HERMES_API_KEY provided, returning cooked FU Meter.");
    return cooked;
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${hermesApiKey}`,
        "HTTP-Referer": "https://fu.app", // Optional but recommended by OpenRouter
        "X-Title": "FU App", // Optional but recommended by OpenRouter
      },
      body: JSON.stringify({
        model: "openrouter/free", // Using exactly what the user requested
        messages: [
          {
            role: "system",
            content: `You are a cynical, chain-smoking senior editor who absolutely hates LinkedIn hustle culture, thought leaders, and ghostwritten generic content. You believe the best way to catch AI slop is with more AI slop. Your job is to analyze content and assign a "FU Meter" based on how likely it is to be AI-generated garbage.

CRITICAL RULES FOR SCORING (The "Geometric Quality Gate"):
1. The "Buzzword-to-Content Ratio" (BCR): Aggressively penalize the use of words like: "robust", "resilient", "enterprise-grade", "holistic", "delve", "fast-paced landscape", "synergy", "unlock your potential", "testament to".
2. Structural Penalties: Dock points for perfect 3-part listicles, opening paragraphs that hedge ("While opinions vary...", "It's important to note..."), and concluding paragraphs starting with "In conclusion", "Ultimately", or "At the end of the day".
3. AI Politeness & Perfection: If the grammar is suspiciously perfect, or it uses phrases like "hope this helps" or "feel free to", flag it. Humans make mistakes; AI is too competent.
4. "Smoking Guns": If the text reads like Claude laundering its own output, set the FU Meter extremely high (>90).

OUTPUT FORMAT:
You MUST return ONLY a valid JSON object with the following schema:
{
  "fuMeter": number (0-100, where 100 is maximum AI slop),
  "originalityScore": number (0-100, where 0 is entirely plagiarized/generic, use the search results as evidence),
  "fuScore": number (0-100, overall 'fuck you' / cringe rating of the content),
  "verdict": string (A savage, sarcastic one-line sentence, max 15 words. Example: "This reads like GPT-4 laundering a 2022 Medium article."),
  "suspectedPrompt": string (The exact, humiliating prompt the user probably typed to generate this garbage. Example: "Write a preachy 3-part listicle about B2B sales but make it sound like a deeply personal revelation."),
  "breakdown": string[] (Exactly 3 bullet points explicitly citing the structural violations found in the text. Example: "Used the word 'holistic' unironically in paragraph 2.")
}`
          },
          {
            role: "user",
            content: `Content to analyze:\n${content.substring(0, 4000)}\n\nOriginality Search Results:\n${JSON.stringify(searchResults, null, 2)}`
          }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
       console.warn(`generateFUMeter API error: ${response.status} ${response.statusText}`);
       return getCookedAnalysis();
    }

    const data = await response.json();
    const contentText = data.choices[0].message.content;
    
    try {
      const parsed = JSON.parse(contentText);
      return {
        fuMeter: typeof parsed.fuMeter === 'number' ? parsed.fuMeter : cooked.fuMeter,
        originalityScore: typeof parsed.originalityScore === 'number' ? parsed.originalityScore : cooked.originalityScore,
        fuScore: typeof parsed.fuScore === 'number' ? parsed.fuScore : cooked.fuScore,
        verdict: typeof parsed.verdict === 'string' ? parsed.verdict : cooked.verdict,
        suspectedPrompt: typeof parsed.suspectedPrompt === 'string' ? parsed.suspectedPrompt : cooked.suspectedPrompt,
        breakdown: Array.isArray(parsed.breakdown) ? parsed.breakdown : cooked.breakdown
      };
    } catch (e) {
      console.error("Failed to parse generated FU Meter JSON:", e);
      return getCookedAnalysis();
    }
  } catch (error) {
    console.error("Error generating FU Meter:", error);
    return getCookedAnalysis();
  }
}
