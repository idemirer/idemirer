import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

const LatestPosts = ({ data }) => {
  return (
    <section className={`${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingMd}>Latest blog posts:</h2>
      <ul className={utilStyles.list}>
        {data.slice(0, 2).map(({ id, date, title, tags }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            {tags.map((item, key) => (
              <small key={key}>
                <Link href='#'>
                  <a className={`${utilStyles.tags} ${utilStyles.lightText}`}>{`#${item}`}</a>
                </Link>
              </small>
            ))}
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestPosts;
