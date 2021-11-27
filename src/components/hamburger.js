import hamburgerStyle from './hamburger.module.css';
import Link from 'next/link';

export default function Hamburger() {
  return (
    <div>
      <div className={hamburgerStyle.hamburgerMenu}>
        <Link href='#'>
          <a>
            <i className='fas fa-bars'></i>
          </a>
        </Link>
      </div>
      <div className={hamburgerStyle.hamburger}>
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
