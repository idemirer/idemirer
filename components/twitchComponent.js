import { getTwitchStatus } from '../lib/twitch';
import { useEffect, useState } from 'react';
import navbarStyle from './navbar.module.css';

async function useLive() {
  const [live, setLive] = useState(false);
  const isLive = await getTwitchStatus();
  console.log('useLive', isLive.channelStatus);
  setLive(isLive.channelStatus);
  return live;
}

export default function TwitchStatus() {
  return (
    <>
      <i className={`${navbarStyle.streaming} fas fa-video`}></i>{' '}
    </>
  );
}
