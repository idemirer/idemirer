import navbarStyle from './navbar.module.css';

export default function TwitchStatus() {
  return (
    <>
      <a href='http://twitch.tv/impostorengineer' className={`${navbarStyle.streaming} notLink`}>
        Streaming <i aria-hidden className={`fas fa-video`}></i>
      </a>
    </>
  );
}
