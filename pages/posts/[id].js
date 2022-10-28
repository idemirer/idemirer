import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import FormattedDate from '../../components/formattedDate';
import utilStyles from '../../styles/utils.module.css';
import PostBody from '../../components/postBody';
import 'react-medium-image-zoom/dist/styles.css';
import { parseISO } from 'date-fns';

export default function Post({ postData, currentPostID, newerPostID, olderPostID, maxPostID }) {
  return (
    <Layout post>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.post}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={`${utilStyles.lightText} ${utilStyles.categories}`}>
          {postData.tags.map((item, key) => (
            <Link href={`/posts/tags/${item}`} key={key}>
              <a className={utilStyles.tags}>{'#' + item + ' '}</a>
            </Link>
          ))}
        </div>
        <div className={utilStyles.lightText}>
          <FormattedDate dateString={postData.date} />
        </div>
        <div className={utilStyles.postBody}>
          <PostBody content={postData.contentHtml} />
        </div>
      </article>
      <div className={utilStyles.pagination}>
        <Link href={`/posts/${newerPostID}`}>
          <a className={`${utilStyles.previousPage} ${newerPostID == currentPostID ? utilStyles.deactive : ''}`}>
            &#xab; NEWER POST
          </a>
        </Link>
        <Link href={`/posts/${olderPostID}`}>
          <a className={`${utilStyles.previousPage} ${currentPostID == maxPostID ? utilStyles.deactive : ''}`}>
            OLDER POST &#xbb;
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const currentPostID = params.id;
  const todaysDate = new Date();
  const allPosts = getSortedPostsData();
  const filteredPosts = allPosts.filter(({ id, date, title, tags, banner }) => todaysDate >= parseISO(date));
  const postData = await getPostData(currentPostID);
  const currentPost = filteredPosts.map((p) => p.id).indexOf(currentPostID);
  const maxPost = filteredPosts.length - 1;
  let newerPost = currentPost - 1;
  if (currentPost == 0 || currentPost == -1) {
    newerPost = 0;
  }
  let olderPost = currentPost + 1;
  if (currentPost == maxPost) {
    olderPost = currentPost;
  }
  const newerPostID = filteredPosts[newerPost].id;
  const olderPostID = filteredPosts[olderPost].id;
  const maxPostID = filteredPosts[maxPost].id;
  return {
    props: {
      currentPostID,
      maxPostID,
      newerPostID,
      olderPostID,
      postData,
    },
  };
}
