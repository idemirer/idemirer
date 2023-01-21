import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';
import LatestPosts from '../components/latestposts';
import { getSortedPostsData } from '../lib/posts';
import { filterPosts } from '../lib/filterPosts';

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
  const filteredPosts = filterPosts(allPostsData);
  return {
    props: {
      filteredPosts,
    },
  };
}

export default Home;
