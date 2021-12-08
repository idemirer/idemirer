import axios from 'axios';

// async function getTwitchOAuth() {
//   const url = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`;
//   const twitchOAuth = await axios.post(url);
//   return twitchOAuth.data.access_token;
// }

async function getTwitchStatus() {
  const searcURL = 'https://api.twitch.tv/helix/search/channels?query=impostorengineer';

  const twitchStatus = await axios.get(searcURL, {
    headers: {
      Authorization: `Bearer ${process.env.TWITCH_AUTHORIZATION}`,
      'Client-Id': process.env.TWITCH_CLIENT_ID,
    },
  });
  const searchData = await twitchStatus.data.data;
  const channelFound = searchData.filter((c) => c.id == '158504554');
  return channelFound[0].is_live;
}

export default async (req, res) => {
  const twitchStatus = await getTwitchStatus();
  res.status(200).json({ status: twitchStatus });
};
