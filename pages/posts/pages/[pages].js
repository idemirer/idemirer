import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/layout';
import utilStyles from '../../../styles/utils.module.css';
import { getAllPages, getSortedPostsData } from '../../../lib/posts';
import { getPageNumbers } from '../../../lib/getPageNumbers';
import PostListing from '../../../components/listposts';

export default function Blog({ allPostsData, previousPage, nextPage }) {
  return (
    <Layout>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Blog Posts</h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.posts}>
          <PostListing postData={allPostsData} />
        </div>
      </section>
      <section>
        <Link href={`/posts/pages/${previousPage}`}>
          <a className={utilStyles.previousPage}>Previous Page</a>
        </Link>
        <Link href={`/posts/pages/${nextPage}`}>
          <a className={utilStyles.nextPage}>Next Page</a>
        </Link>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPages();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pages = params.pages || 1;
  const postData = getSortedPostsData();
  const response = await getPageNumbers(pages);
  const start = response.start;
  const currentPage = response.currentPage;
  let previousPage = +currentPage - 1;
  if (previousPage == 0) {
    previousPage = 1;
  }
  let nextPage = +currentPage + 1;
  const lastPage = response.pageCount;
  if (nextPage == lastPage) {
    nextPage = lastPage;
  }
  const end = response.end;
  const allPostsData = postData.slice(start, end);
  return {
    props: {
      allPostsData,
      currentPage,
      lastPage,
      previousPage,
      nextPage,
    },
  };
}