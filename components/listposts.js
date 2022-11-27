import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import PostDate from './formattedDate';
import Image from 'next/image';

const PostListing = ({ postData }) => {
  return (
    <>
      {postData.map(({ id, date, title, tags, banner }) => (
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
              <div className={utilStyles.listItemText}>{title}</div>
            </a>
          </Link>
          <div className={utilStyles.listItemText}>
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
        </div>
      ))}
    </>
  );
};

export default PostListing;
