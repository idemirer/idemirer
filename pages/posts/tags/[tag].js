import Head from 'next/head';
import Layout from '../../../components/layout';
import utilStyles from '../../../styles/utils.module.css';
import { getAllPostTags, getSortedPostsData, searchTags } from '../../../lib/posts';
import PostListing from '../../../components/listposts';
import { filterPosts } from '../../../lib/filterPosts';

export default function Blog({ foundPostsData }) {
  const filteredPosts = filterPosts(foundPostsData.posts);

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

export async function getStaticPaths() {
  const allPostsData = getSortedPostsData();
  const filteredPosts = filterPosts(allPostsData);
  const paths = await getAllPostTags(filteredPosts);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData();
  const tag = params.tag;
  let foundPostsData = await searchTags(tag, allPostsData);
  return {
    props: {
      allPostsData,
      foundPostsData,
    },
  };
}
