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
        {navbarData.map((item, key) => (
          <div key={key}>
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
