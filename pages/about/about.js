import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Ilhan Demirer, PhD</h2>
      <div>
        <p>
          Associate Professor <br />
          Department of Management, Information Systems and Analytics
          <br />
          School of Business and Economics
          <br />
          State University of New York College at Plattsburgh
          <br />
        </p>
        <p>
          <Link href='/resume/Ilhan-Demirer-CV.pdf'>
            <a className={utilStyles.textBold}>
              <i className={`${utilStyles.redText} far fa-file-pdf`}></i>&nbsp;Full Resume
            </a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
