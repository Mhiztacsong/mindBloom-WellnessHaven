// Fetch a random inspirational quote
export async function getQuote() {
  const url = "https://api.quotable.io/random";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return { text: data.content, author: data.author };
  } catch (error) {
    console.error("Quote API error:", error);
    return { text: "Stay positive and keep going.", author: "MindBloom" };
  }
}

// Fetch YouTube meditation video via your Vercel function
export async function getMindfulnessVideo() {
  try {
    const res = await fetch("/api/youtube");
    if (!res.ok) throw new Error(`Server error: ${res.status}`);

    const data = await res.json();

    if (data && data.videoId) {
      return { videoId: data.videoId, title: data.title };
    } else {
      console.warn("No videos returned from API, using fallback video.");
      return getFallbackVideo();
    }
  } catch (err) {
    console.error("Error fetching video:", err);
    return getFallbackVideo();
  }
}

// ✅ Fallback videos — if API fails
function getFallbackVideo() {
  const fallbackVideos = [
    {
      videoId: "ZToicYcHIOU",
      title: "Daily Calm | 10 Minute Mindfulness Meditation | Be Present"
    },
    {
      videoId: "uTN29kj7e-w",
      title: "10 MIN Guided Meditation To Clear Your Mind & Start New Positive Habits"
    },
    {
      videoId: "vj0JDwQLof4",
      title: "10-Minute Guided Meditation: Self-Love | SELF"
    }
  ];

  return fallbackVideos[Math.floor(Math.random() * fallbackVideos.length)];
}
