import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Ilhan Demirer, PhD</h2>
      <div>
        Associate Professor <br />
        Department of Management, Information Systems and Analytics
        <br />
        School of Business and Economics
        <br />
        State University of New York College at Plattsburgh
        <br />
      </div>
    </Layout>
  );
}
