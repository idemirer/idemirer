import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className={utilStyles.hero}>
        <div className={utilStyles.profileImg}>
          <Image
            priority
            src='/images/IlhanDemirer.jpg'
            className={utilStyles.borderCircle}
            height={170}
            width={170}
            alt='Ilhan Demirer'
          />
        </div>
        <h1 className={utilStyles.headingXl}>Ilhan Demirer</h1>
      </div>
      <section>
        <p className={utilStyles.headingMd}>
          Hello, I’m <strong>Ilhan</strong>.
        </p>
        <p>I’m a Management faculty at State University of New York at Plattsburgh.</p>
        <p>My research interest are in Hopsitality Finance and Information Technology.</p>
        <p>
          On this page I plan to post weekly updates on news, research, and{' '}
          <Link href='/dashboard/dashboard'>
            <a>hospitality data</a>
          </Link>
          .
        </p>
      </section>
    </>
  );
};
export default Hero;
