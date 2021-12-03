import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from './date';
import Image from 'next/image';

const PostListing = ({ postData }) => {
  return (
    <>
      {postData.map(({ id, date, title, tags }) => (
        <div className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>
              <Image
                className={utilStyles.banner}
                src='/images/blogimages/news-post-banner.png'
                alt='banner'
                height={110}
                width={380}
              />{' '}
              <br />
              {title}
            </a>
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
        </div>
      ))}
    </>
  );
};

export default PostListing;
