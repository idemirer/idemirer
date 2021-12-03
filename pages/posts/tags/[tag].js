import Head from 'next/head';
import Layout from '../../../components/layout';
import utilStyles from '../../../styles/utils.module.css';
import { getAllPostTags, getSortedPostsData, searchTags } from '../../../lib/posts';
import PostListing from '../../../components/listposts';

export default function Blog({ foundPostsData, params }) {
  return (
    <Layout>
      <Head>
        <title>Blog Posts with Tag: {params.tag}</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Blog Posts with Tag: {params.tag}</h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          <PostListing postData={foundPostsData.posts} />
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allPostsData = getSortedPostsData();
  const paths = await getAllPostTags(allPostsData);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData();
  const foundPostsData = await searchTags(params.tag, allPostsData);
  return {
    props: {
      allPostsData,
      foundPostsData,
    },
  };
}
