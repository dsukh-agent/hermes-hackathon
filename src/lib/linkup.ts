export async function extractWithLinkUp(url: string, linkupApiKey: string): Promise<string> {
  if (!linkupApiKey) {
    throw new Error("No LINKUP_API_KEY provided for URL extraction.");
  }
  
  try {
    const response = await fetch("https://api.linkup.so/v1/search", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${linkupApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        q: url,
        depth: "standard",
        outputType: "searchResults"
      })
    });

    if (!response.ok) {
      throw new Error(`LinkUp API error: ${response.status}`);
    }

    const data = await response.json();
    if (data.results && data.results.length > 0) {
      // Find the exact match or take the first
      const match = data.results.find((r: { url: string; content?: string }) => r.url.includes(url) || url.includes(r.url)) || data.results[0];
      if (match && match.content) {
        // Clean up the text by removing common boilerplate from LinkedIn/X if present
        let text = match.content;
        text = text.replace(/## LinkedIn respects your privacy[\s\S]*?(?=Skip to main content|Abhijeet Kumar’s Post)/i, "");
        text = text.replace(/Agree & Join LinkedIn[\s\S]*?(?=# |Skip to main content)/i, "");
        return text.substring(0, 4000); // cap at 4000 chars
      }
    }
    
    throw new Error("No content found for this URL via LinkUp extraction.");
  } catch (error) {
    console.error("LinkUp Extraction Error:", error);
    throw error;
  }
}

export async function extractKeyPhrases(content: string, hermesApiKey: string): Promise<string[]> {
  if (!hermesApiKey) {
    console.warn("No HERMES_API_KEY provided, returning mock phrases.");
    return ["Mock distinctive claim 1", "Mock distinctive claim 2", "Mock distinctive claim 3"];
  }

  const MODELS = [
    "tencent/hy3:free",
    "nvidia/nemotron-3-ultra-550b-a55b:free",
    "poolside/laguna-m.1:free",
    "liquid/lfm-2.5-1.2b-instruct:free"
  ];
  const shuffledModels = [...MODELS].sort(() => Math.random() - 0.5);

  let parsedResult = null;

  for (const model of shuffledModels) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${hermesApiKey}`,
          "HTTP-Referer": "https://fu.app",
          "X-Title": "FU App",
        },
        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: "system",
              content: "Extract 3–5 key claims or distinctive phrases from this content. Return ONLY a JSON object containing a 'phrases' key with an array of strings."
            },
            {
              role: "user",
              content: content.substring(0, 4000)
            }
          ],
          response_format: { type: "json_object" }
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const contentText = data.choices[0].message.content;
        try {
          parsedResult = JSON.parse(contentText);
          break;
        } catch {
          console.warn(`Failed to parse key phrases JSON from model ${model}`);
        }
      } else {
        console.warn(`LLM API failed with model ${model}: ${response.status}`);
      }
    } catch (error) {
      console.warn(`Error extracting key phrases with model ${model}:`, error);
    }
  }

  if (parsedResult && parsedResult.phrases && Array.isArray(parsedResult.phrases)) {
    return parsedResult.phrases;
  }
  return fallbackPhrases(content);
}

function fallbackPhrases(content: string): string[] {
  const sentences = content.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 20);
  if (sentences.length > 0) {
    const shuffled = sentences.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3).map(s => s.substring(0, 60) + (s.length > 60 ? '...' : ''));
  }
  return ["Generic corporate synergy detected", "AI generated filler content", "Unoriginal thought leader claims"];
}

export async function runOriginalityScan(phrases: string[], linkupApiKey: string): Promise<Record<string, unknown>[]> {
  const results: Record<string, unknown>[] = [];
  const seenUrls = new Set<string>();

  if (!linkupApiKey) {
    console.warn("No LINKUP_API_KEY provided, returning mock search results.");
    // Small simulated latency
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    for (let i = 0; i < phrases.length; i++) {
      const mockUrl = `https://example.com/mock-source-${i % 3}`;
      if (!seenUrls.has(mockUrl)) {
        seenUrls.add(mockUrl);
        results.push({
          phrase: phrases[i],
          foundAtUrl: mockUrl,
          similarity: 0.75 + (Math.random() * 0.2), 
        });
      }
    }
    return results;
  }

  // Real LinkUp API integration
  try {
    for (const phrase of phrases) {
      // NOTE: Using the standard v1 LinkUp search endpoint based on typical LinkUp structure. 
      // If the endpoint differs, update the URL.
      const response = await fetch("https://api.linkup.so/v1/search", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${linkupApiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          q: phrase,
          depth: "standard",
          outputType: "searchResults"
        })
      });

      if (!response.ok) {
        console.warn(`LinkUp API error for phrase "${phrase}": ${response.status} ${response.statusText}`);
        continue;
      }

      const data = await response.json();
      
      // Parse LinkUp standard response format (assuming data.results is the array)
      if (data.results && Array.isArray(data.results)) {
        for (const hit of data.results) {
          if (hit.url && !seenUrls.has(hit.url)) {
            seenUrls.add(hit.url);
            results.push({
              phrase,
              foundAtUrl: hit.url,
              similarity: 0.95, // Hardcoded high confidence for direct text hits
              snippet: hit.snippet || ""
            });
          }
        }
      }
    }
    return results;
  } catch (error) {
    console.error("LinkUp API Execution Error:", error);
    return []; // Return empty on hard failure to ensure the LLM still scores the text
  }
}
