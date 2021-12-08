import axios from 'axios';

async function getAllYouTubeVideos() {
  const channelID = 'UC-cAQFgdTrl4B00qz87zGVg';
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=50&type=video&key=${process.env.YOUTUBE_API_KEY}`;
  const data = await axios.get(url);
  return data.data;
}

export default async (req, res) => {
  const youtubeVideoList = await getAllYouTubeVideos();
  res.status(200).json(youtubeVideoList);
};
