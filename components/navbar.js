import React, { useEffect, useState } from 'react';
import navbarStyle from './navbar.module.css';
import Link from 'next/link';
import ChangeTheme from './changeTheme';
import { navbarData } from './navbarData';
import TwitchStatus from './twitchComponent';
import { useLive } from '../lib/useLive';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const isLive = useLive();

  return (
    <>
      <div className={navbarStyle.hamburgerMenu}>
        <Link href='#'>
          <a onClick={() => setActive(!active)}>
            <i className='fas fa-bars'></i>
          </a>
        </Link>
      </div>
      <div className={`${navbarStyle.navbar} ${active ? navbarStyle.showNavBar : ''}`}>
        {navbarData.map((item, key) => (
          <div key={key}>
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </div>
        ))}

        <div className={navbarStyle.themeSwitch}>
          {isLive.amILive && <TwitchStatus />}
          <ChangeTheme />
        </div>
      </div>
    </>
  );
}
