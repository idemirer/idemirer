import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import { readMD } from '../../lib/readmd';

export default function About({ readHTML }) {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={utilStyles.about}>
        <div dangerouslySetInnerHTML={{ __html: readHTML.contentHtml }} />
        <p className={utilStyles.cv}>
          <Link href='/resume/Ilhan-Demirer-CV.pdf'>
            <span className={utilStyles.textBold}>
              <i className={`${utilStyles.redText} fa fa-file-pdf`}></i>&nbsp;&nbsp;Full Resume
            </span>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const readHTML = await readMD('/pages/about/content', 'about');
  return {
    props: {
      readHTML,
    },
  };
}
