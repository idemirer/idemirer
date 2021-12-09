import axios from 'axios';

// async function getTwitchOAuth() {
//   const url = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`;
//   const twitchOAuth = await axios.post(url);
//   return twitchOAuth.data.access_token;
// }

export async function getTwitchStatus() {
  const searchURL = 'https://api.twitch.tv/helix/search/channels?query=impostorengineer';
  const searchData = await axios
    .get(searchURL, {
      headers: {
        Authorization: `Bearer ${process.env.TWITCH_AUTHORIZATION}`,
        'Client-Id': process.env.TWITCH_CLIENT_ID,
      },
    })
    .then((response) => response.data);

  const channelFound = searchData.data.filter((c) => c.id == '158504554');
  const channelStatus = channelFound[0].is_live;
  console.log('twitch', channelStatus);
  return { channelStatus };
}
