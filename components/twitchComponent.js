import navbarStyle from './navbar.module.css';

export default function TwitchStatus() {
  console.log('live');
  return (
    <>
      <a href='http://twitch.tv/impostorengineer' className={navbarStyle.streaming}>
        Streaming <i aria-hidden className={`fas fa-video`}></i>
      </a>
    </>
  );
}
