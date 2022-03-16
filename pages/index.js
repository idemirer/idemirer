import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';
import LatestPosts from '../components/latestposts';
import { getSortedPostsData } from '../lib/posts';
import Script from 'next/script';

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TRACKING_ID}`} />
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_TRACKING_ID}', {page_path: window.location.pathname,});`,
          }}
        />
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <LatestPosts data={allPostsData} />
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
