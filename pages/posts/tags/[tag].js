import Head from 'next/head';
import Layout from '../../../components/layout';
import utilStyles from '../../../styles/utils.module.css';
import { getAllPostTags, getSortedPostsData, searchTags } from '../../../lib/posts';
import PostListing from '../../../components/listposts';
import { filterPosts } from '../../../lib/filterPosts';

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
  const filteredPosts = await filterPosts(allPostsData);
  const paths = await getAllPostTags(filteredPosts);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData();
  const filteredPosts = await filterPosts(allPostsData);
  const tag = params.tag;
  let foundPostsData = await searchTags(tag, filteredPosts);
  return {
    props: {
      filteredPosts,
      foundPostsData,
    },
  };
}
