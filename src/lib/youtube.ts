import { YoutubeTranscript } from 'youtube-transcript';

export async function extractYouTubeTranscript(url: string): Promise<string> {
  try {
    // Extract video ID from various YouTube URL formats
    const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    if (!videoId) {
      throw new Error("Invalid YouTube URL");
    }

    // 1. Try the home IP proxy first (Primary, bypasses Cloudflare blocks)
    try {
      const proxyUrl = process.env.YOUTUBE_PROXY_URL;
      if (proxyUrl) {
        // We assume the proxy expects the videoId or the full url. Let's pass the videoId.
        const response = await fetch(`${proxyUrl}?videoId=${videoId}`, {
          // Add a timeout so it doesn't hang forever if the home IP is down
          signal: AbortSignal.timeout(5000) 
        });
        if (response.ok) {
          const data = await response.json();
          if (data.transcriptText) {
            return data.transcriptText.substring(0, 3000);
          }
        }
      }
    } catch (proxyError) {
      console.warn("Home IP proxy failed or timed out. Falling back to npm package...", proxyError);
    }

    // 2. Fallback to the local npm package (Will work locally, might fail on Vercel/Cloudflare)
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    
    // Concatenate the text
    let fullText = transcript.map(t => t.text).join(' ');
    
    // Trim to 3000 chars
    if (fullText.length > 3000) {
      fullText = fullText.substring(0, 3000);
    }
    
    return fullText;
  } catch (error) {
    console.error("Error extracting YouTube transcript:", error);
    throw error;
  }
}