import React, { useEffect, useState } from 'react';
import navbarStyle from './navbar.module.css';
import Link from 'next/link';
import ChangeTheme from './changeTheme';
import { navbarData } from './navbarData';
import TwitchStatus from './twitchComponent';

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={navbarStyle.hamburgerMenu}>
        <Link href='#'>
          <a onClick={() => setActive(!active)}>
            <i className='fas fa-bars'></i>
          </a>
        </Link>
      </div>
      <div className={`${navbarStyle.navbar} ${active ? navbarStyle.showNavBar : navbarStyle.testing}`}>
        {navbarData.map((item, key) => (
          <div key={key}>
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </div>
        ))}

        <div className={navbarStyle.themeSwitch}>
          {/* <TwitchStatus /> */}
          <ChangeTheme />
        </div>
      </div>
    </>
  );
}
