import Head from 'next/head';
import Layout from '../../../components/layout';
import utilStyles from '../../../styles/utils.module.css';
import { getAllPostTags, getSortedPostsData, searchTags } from '../../../lib/posts';
import PostListing from '../../../components/listposts';

export default function Blog({ foundPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Blog Posts</h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.posts}>
          <PostListing postData={foundPostsData.posts} />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allPostsData = getSortedPostsData();
  const today = +new Date();
  const filteredPosts = allPostsData.filter(({ draft, date }) => {
    const timeZoneOffset = new Date(Date.parse(date)).getTimezoneOffset() * 60 * 1001;
    const postDate = Date.parse(date) + timeZoneOffset;
    return (draft != true) & (today >= postDate);
  });
  const paths = await getAllPostTags(filteredPosts);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData();
  const today = +new Date();
  const filteredPosts = allPostsData.filter(({ draft, date }) => {
    const timeZoneOffset = new Date(Date.parse(date)).getTimezoneOffset() * 60 * 1001;
    const postDate = Date.parse(date) + timeZoneOffset;
    return (draft != true) & (today >= postDate);
  });
  const tag = params.tag;
  let foundPostsData = await searchTags(tag, filteredPosts);
  return {
    props: {
      filteredPosts,
      foundPostsData,
    },
  };
}
