import { YOUTUBE_API_KEY } from "./config.mjs";
const proxy = "https://api.allorigins.win/get?url=";
const zenQuotesURL = "https://zenquotes.io/api/random";

export async function getQuote() {
  try {
    const response = await fetch(`${proxy}${encodeURIComponent(zenQuotesURL)}`);
    const data = await response.json();
    const quoteData = JSON.parse(data.contents)[0];

    // Return quote text and author
    return {
      text: quoteData.q,
      author: quoteData.a
    };

  } catch (error) {
    console.error("ZenQuotes API Error:", error);
    return {
      text: "Stay strong, keep going. Better days are ahead.",
      author: "Unknown"
    };
  }
}


// =====================
// YouTube Data API
// =====================
const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

export async function getMindfulnessVideo() {
  const query = "guided meditation mindfulness";
  const url = `${YOUTUBE_SEARCH_URL}?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(
    query
  )}&key=${YOUTUBE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      // Pick a random video
      const randomVideo = data.items[Math.floor(Math.random() * data.items.length)];
      const videoId = randomVideo.id.videoId;
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      console.warn("No videos found.");
      return null;
    }
  } catch (error) {
    console.error("YouTube API error:", error);
    return null;
  }
}