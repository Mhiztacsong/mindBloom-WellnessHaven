// js/api.mjs
const zenQuotesURL = "https://zenquotes.io/api/random";

// Fetch random inspirational quote
export async function getQuote() {
  try {
    const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(zenQuotesURL)}`);
    const data = await res.json();
    const quoteData = JSON.parse(data.contents)[0];
    return { text: quoteData.q, author: quoteData.a };
  } catch (err) {
    console.error("Quote API error:", err);
    return { text: "Stay strong, keep going. Better days are ahead.", author: "Unknown" };
  }
}

// Fetch YouTube video from your Vercel serverless function
export async function getMindfulnessVideo() {
  try {
    const res = await fetch("/api/youtube"); // call Vercel function
    if (!res.ok) throw new Error(`Server error: ${res.status}`);
    const data = await res.json();
    if (data.items && data.items.length > 0) {
      const randomVideo = data.items[Math.floor(Math.random() * data.items.length)];
      const videoId = randomVideo.id.videoId;
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      console.warn("No videos found.");
      return null;
    }
  } catch (err) {
    console.error("Error fetching video:", err);
    return null;
  }
}
