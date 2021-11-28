import React, { useState } from 'react';
import navbarStyle from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className={navbarStyle.hamburgerMenu}>
        <Link href='#'>
          <a onClick={() => setActive(!active)}>
            <i className='fas fa-bars'></i>
          </a>
        </Link>
      </div>
      <div className={`${navbarStyle.navbar} ${active ? navbarStyle.showNavBar : navbarStyle.dontShow}`}>
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href='/posts'>
            <a>Blog</a>
          </Link>
        </div>
        <div>
          <Link href='/dashboard/dashboard'>
            <a>Hospitality Data</a>
          </Link>
        </div>
        <div>
          <Link href='/about/about'>
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link href='/contact/contact'>
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
