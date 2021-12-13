import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={utilStyles.footer}>
      <div>
        <a className={utilStyles.email} href='mailto:idemirer@gmail.com' target='_blank'>
          <i className='far fa-envelope'></i>
        </a>
      </div>
      <div>
        <a className={utilStyles.linkedin} href='https://www.linkedin.com/in/ilhan-demirer-3230642a/' target='_blank'>
          <i className='fab fa-linkedin-in'></i>
        </a>
      </div>
      <div>
        <a className={utilStyles.twitter} href='https://twitter.com/idemirer' target='_blank'>
          <i className='fab fa-twitter'></i>
        </a>
      </div>
      <div>
        <a className={utilStyles.github} href='https://github.com/idemirer' target='_blank'>
          <i className='fab fa-github'></i>
        </a>
      </div>
      <div className={utilStyles.lightText}>Copyright &copy; Ilhan Demirer 2021</div>
    </div>
  );
}
