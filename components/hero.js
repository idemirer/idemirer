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
        <h1 className={utilStyles.headingXl}>Ilhan Demirer, PhD</h1>
      </div>
      <section>
        <p className={utilStyles.headingMd}>
          Hello, I’m <strong>Ilhan</strong>.
        </p>
        <p>
          I’m a Management faculty at{' '}
          <Link href='https://www.plattsburgh.edu/'>State University of New York College at Plattsburgh.</Link>
        </p>
        <p>My research interest are in Hospitality Finance and Information Technology.</p>
        <p>
          On this page I post weekly updates on news, research, and{' '}
          <Link href='/dashboard/dashboard'>hospitality data</Link>.
        </p>
      </section>
    </>
  );
};
export default Hero;
