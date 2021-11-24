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
        <Link href='mailto:idemirer@gmail.com'>
          <a target='_blank'>
            <i class='far fa-envelope'></i>
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/ilhan-demirer-3230642a/'>
          <a target='_blank'>
            <i class='fab fa-linkedin-in'></i>
          </a>
        </Link>
        <Link href='https://twitter.com/idemirer'>
          <a target='_blank'>
            <i class='fab fa-twitter'></i>
          </a>
        </Link>
        <Link href='https://github.com/idemirer'>
          <a target='_blank'>
            <i class='fab fa-github'></i>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
