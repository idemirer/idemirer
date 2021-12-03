import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';
import PostListing from '../../components/listposts';
import Link from 'next/link';
import Date from '../../components/date';

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Blog Posts</h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          <PostListing postData={allPostsData} />
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
