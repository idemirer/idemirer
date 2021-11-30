import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Contact Information:</h2>
      <div className={utilStyles.contact}>
        <div className={`${utilStyles.row} ${utilStyles.icon}`}>
          <i className='far fa-envelope'></i>
        </div>
        <div className={utilStyles.rowname}>
          <Link href='mailto:idemirer@gmail.com'>
            <a target='_blank'>idemirer@gmail.com</a>
          </Link>
        </div>
        <div className={`${utilStyles.row} ${utilStyles.icon}`}>
          <i className='fab fa-linkedin-in'></i>
        </div>
        <div className={utilStyles.rowname}>
          <Link href='https://www.linkedin.com/in/ilhan-demirer-3230642a/'>
            <a target='_blank'>Ilhan Demirer</a>
          </Link>
        </div>
        <div className={`${utilStyles.row} ${utilStyles.icon}`}>
          <i className='fab fa-twitter'></i>
        </div>
        <div className={utilStyles.rowname}>
          <Link href='https://twitter.com/idemirer'>
            <a target='_blank'>@idemirer</a>
          </Link>
        </div>
        <div className={`${utilStyles.row} ${utilStyles.icon}`}>
          <i className='fab fa-github'></i>
        </div>
        <div className={utilStyles.rowname}>
          <Link href='https://github.com/idemirer'>
            <a target='_blank'>Ilhan Demirer</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
