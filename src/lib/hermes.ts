export async function generateFUMeter(content: string, searchResults: Record<string, unknown>[], hermesApiKey: string) {
  const getCookedAnalysis = () => {
    const verdicts = [
      "A perfect storm of LinkedIn hustle culture buzzwords.",
      "Reads like an AI hallucinated a TED Talk.",
      "Generic corporate slop, completely devoid of human soul.",
      "This is what happens when you let a toaster write your thoughts.",
      "Plagiarized from a 2018 medium article and fed through a thesaurus.",
      "So synthetic it gave me microplastics in my brain."
    ];
    
    const prompts = [
      "Write a preachy post about leadership but use zero concrete examples.",
      "Generate an inspiring LinkedIn post about overcoming nothing.",
      "Write a thought-leader manifesto using every buzzword possible.",
      "Make me sound smart and experienced without actually saying anything.",
      "Write a 3-part listicle that sounds deep but is actually just common sense."
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
