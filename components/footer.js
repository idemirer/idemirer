import utilStyles from '../styles/utils.module.css';

export default function Footer() {
  return (
    <div className={utilStyles.footer}>
      <div>
        <a className={`${utilStyles.email} notLink`} href='mailto:idemirer@gmail.com' alt='email' target='_blank'>
          <i aria-hidden className='fa-solid fa-envelope'></i>
        </a>
      </div>
      <div>
        <a
          className={`${utilStyles.googleScholar} notLink`}
          href='https://scholar.google.com/citations?user=CzJ07gwAAAAJ'
          alt='Google Scholar'
          target='_blank'
        >
          <i aria-hidden className='fa-solid fa-graduation-cap'></i>
        </a>
      </div>
      <div>
        <a
          className={`${utilStyles.researchGate} notLink`}
          href='https://www.researchgate.net/profile/Ilhan-Demirer-2'
          alt='ResearchGate'
          target='_blank'
        >
          <i aria-hidden className='fa-brands fa-researchgate'></i>
        </a>
      </div>
      <div>
        <a
          className={`${utilStyles.linkedin} notLink`}
          href='https://www.linkedin.com/in/ilhan-demirer-3230642a/'
          alt='LinkedIn'
          target='_blank'
        >
          <i aria-hidden className='fab fa-linkedin'></i>
        </a>
      </div>
      <div>
        <a
          className={`${utilStyles.email} notLink`}
          href='https://www.youtube.com/@IlhanDemirer'
          alt='YouTube'
          target='_blank'
        >
          <i aria-hidden className='fa-solid fa-video'></i>
        </a>
      </div>
      <div>
        <a
          className={`${utilStyles.twitter} notLink`}
          href='https://twitter.com/idemirer'
          alt='twitter'
          target='_blank'
        >
          <i aria-hidden className='fab fa-twitter'></i>
        </a>
      </div>
      <div>
        <a className={`${utilStyles.github} notLink`} href='https://github.com/idemirer' alt='github' target='_blank'>
          <i aria-hidden className='fab fa-github'></i>
        </a>
      </div>
      <div className={utilStyles.lightText}>Copyright &copy; Ilhan Demirer 2022</div>
    </div>
  );
}
