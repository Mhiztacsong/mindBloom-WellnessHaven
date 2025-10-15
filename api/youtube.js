// /api/youtube.js
export default async function handler(req, res) {
  const apiKey = process.env.YOUTUBE_API_KEY; // stored in Vercel environment variables
  const query = "guided meditation";

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(query)}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`YouTube API error: ${response.status}`);

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("YouTube API error:", error);
    res.status(500).json({ error: "Failed to fetch YouTube videos" });
  }
}
