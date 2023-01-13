import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';
import PostListing from '../../components/listposts';

export default function Blog({ filteredPosts }) {
  return (
    <Layout>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Blog Posts</h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.posts}>
          <PostListing postData={filteredPosts} />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const today = +new Date();
  const filteredPosts = allPostsData.filter(({ draft, date }) => {
    const timeZoneOffset = new Date(Date.parse(date)).getTimezoneOffset() * 60 * 1001;
    const postDate = Date.parse(date) + timeZoneOffset;
    return (draft != true) & (today >= postDate);
  }); // Dates are 2022-12-01 format. They are considered UTC time.
  return {
    props: {
      filteredPosts,
    },
  };
}
