import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from './date';

const PostListing = ({ postData }) => {
  return (
    <>
      {postData.map(({ id, date, title, tags }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          {tags.map((item, key) => (
            <small key={key}>
              <Link href={`/posts/tags/${item}`}>
                <a className={`${utilStyles.tags} ${utilStyles.lightText}`}>{`#${item}`}</a>
              </Link>
            </small>
          ))}
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </>
  );
};

export default PostListing;
