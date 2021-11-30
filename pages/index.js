import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
      <section className={`${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingMd}>Latest blog posts:</h2>
        <ul className={utilStyles.list}>
          {allPostsData.slice(0, 2).map(({ id, date, title, tags }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {tags.map((item, key) => (
                <small key={key}>
                  <Link href='#'>
                    <a className={`${utilStyles.tags} ${utilStyles.lightText}`}>{`#${item}`}</a>
                  </Link>
                </small>
              ))}
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
