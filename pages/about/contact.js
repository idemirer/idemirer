import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Contact</h2>
      <div>Contact Information</div>
    </Layout>
  );
}
