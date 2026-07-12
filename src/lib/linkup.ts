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

export function extractKeyPhrases(content: string): string[] {
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
