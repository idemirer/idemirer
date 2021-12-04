import fetch from '@vercel/fetch';

export default async function getAllYouTubeVideos() {
  const channelID = 'UCnSPPzvERgrm63NI8mJnLag';
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=50&type=video&key=${process.env.YOUTUBE_API_KEY}`;

  const data = await fetch(url).then((response) => response.json());
  console.log(data);
}
