import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import PostBody from '../../components/postBody';
import 'react-medium-image-zoom/dist/styles.css';

export default function Post({ postData }) {
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
          <Date dateString={postData.date} />
        </div>
        <div className={utilStyles.postBody}>
          <PostBody content={postData.contentHtml} />
        </div>
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
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
