import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData, allPostsData }) {
  return (
    <Layout post>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className={`${utilStyles.lightText} ${utilStyles.categories}`}>
          {Object.keys(postData.tags).map((key) => (
            <Link href='#' key={key}>
              <a className={utilStyles.tags}>{'#' + postData.tags[key] + ' '}</a>
            </Link>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
  const allPostsData = getSortedPostsData();
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}
