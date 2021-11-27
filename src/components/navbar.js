import navbarStyle from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  function clickHamburger {
    document.querySelectorAll('div').classList.toggle(navbarStyle.show);
  }
  return (
    <div>
      <div className={navbarStyle.hamburgerMenu}>
        <Link href='#'>
          <a oncClick={clickHamburger}>
            <i className='fas fa-bars'></i>
          </a>
        </Link>
      </div>
      <div className={navbarStyle.navbar}>
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
