import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import PostListing from './listposts';

const LatestPosts = ({ data }) => {
  return (
    <section className={`${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingMd}>Latest blog posts:</h2>
      <ul className={utilStyles.list}>
        <PostListing postData={data.slice(0, 2)} />
      </ul>
    </section>
  );
};

export default LatestPosts;
