import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import PostDate from './date';
import Image from 'next/image';
import { parseISO } from 'date-fns';

const todaysDate = new Date();
const PostListing = ({ postData }) => {
  return (
    <>
      {postData
        .filter(({ id, date, title, tags, banner }) => todaysDate >= parseISO(date))
        .map(({ id, date, title, tags, banner }) => (
          <div className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>
                <Image
                  className={utilStyles.banner}
                  src={`/images/blogimages/${banner}`}
                  alt='banner'
                  height={150}
                  width={380}
                  objectFit='cover'
                  objectPosition='left top'
                />{' '}
                <br />
                {title}
              </a>
            </Link>
            <br />
            {tags.map((item, key) => (
              <small className={utilStyles.tagsWrapper} key={key}>
                <Link href={`/posts/tags/${item}`}>
                  <a className={`${utilStyles.tags} ${utilStyles.lightText}`}>{`#${item}`}</a>
                </Link>
              </small>
            ))}
            <br />
            <small className={utilStyles.lightText}>
              <PostDate dateString={date} />
            </small>
          </div>
        ))}
    </>
  );
};

export default PostListing;
