import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';
import LatestPosts from '../components/latestposts';
import { getSortedPostsData } from '../lib/posts';

const Home = ({ filteredPosts }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <LatestPosts data={filteredPosts} />
    </Layout>
  );
};

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

export default Home;
