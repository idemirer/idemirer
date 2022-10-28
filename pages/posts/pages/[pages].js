import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/layout';
import utilStyles from '../../../styles/utils.module.css';
import { getAllPages, getSortedPostsData } from '../../../lib/posts';
import { getPageNumbers } from '../../../lib/getPageNumbers';
import PostListing from '../../../components/listposts';
import { parseISO } from 'date-fns';

export default function Blog({ allPostsData, previousPage, nextPage, currentPage }) {
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
      <section className={utilStyles.pagination}>
        <Link href={`/posts/pages/${previousPage}`}>
          <a className={`${utilStyles.previousPage} ${previousPage == currentPage ? utilStyles.deactive : ''}`}>
            &#xab; NEWER POSTS
          </a>
        </Link>
        <Link href={`/posts/pages/${nextPage}`}>
          <a className={`${utilStyles.nextPage} ${nextPage == currentPage ? utilStyles.deactive : ''}`}>
            OLDER POSTS &#xbb;
          </a>
        </Link>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postData = getSortedPostsData();
  const todaysDate = new Date();
  const filteredPosts = postData.filter(({ id, date, title, tags, banner }) => todaysDate >= parseISO(date));
  const paths = await getAllPages(filteredPosts);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pages = params.pages || 1;
  const postData = getSortedPostsData();
  const todaysDate = new Date();
  const filteredPosts = postData.filter(({ id, date, title, tags, banner }) => todaysDate >= parseISO(date));
  const response = await getPageNumbers(pages);
  const start = response.start;
  const currentPage = pages;
  let previousPage = +currentPage - 1;
  if (previousPage == 0) {
    previousPage = 1;
  }
  let nextPage = +currentPage + 1;
  const lastPage = response.pageCount;
  console.log(lastPage);
  if (nextPage > lastPage) {
    nextPage = lastPage;
  }

  const end = response.end;

  const allPostsData = filteredPosts.slice(start, end);
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
