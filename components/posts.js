import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/app/utils/utils';

export function BlogPosts({ posts, page }) {
  const today = +new Date();

  const endPage = page * 6;
  const beginPage = page * 6 - 6;
  const maxPage = Math.ceil(posts.length / 6);
  const nextPage = +page + 1;
  const prevPage = +page - 1 == 0 ? 1 : +page - 1;

  return (
    <div className='md:px-4 w-full'>
      {posts
        .sort((a, b) => {
          if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
            return -1;
          }
          return 1;
        })
        .filter((post) => {
          const timeZoneOffset = new Date(Date.parse(post.metadata.date)).getTimezoneOffset() * 60 * 1001;
          const postDate = Date.parse(post.metadata.date) + timeZoneOffset;
          return (post.metadata.draft !== true) & (today >= postDate);
        })
        .slice(beginPage, endPage)
        .map((post) => (
          <div
            key={post.slug}
            className='w-[400px] rounded-lg bg-gray-900 text-white pb-4 mb-4 md:w-[400px] shadow-[3px_3px_10px_rgba(51,51,51,1)]dark:shadow-[3px_3px_10px_rgba(0,0,0,.6)]'
          >
            <Link href={`/blog/${post.slug}`} className=''>
              <Image
                src={`/images/blogimages/${post.metadata.banner}`}
                width={400}
                height={120}
                alt='banner'
                title={post.title}
                className='object-cover object-left-top rounded-t-lg pb-4 h-[120px] hover:grayscale'
              />
              <div className='font-bold px-4 pb-2 text-white inline-block hover:text-[var(--hover)]'>
                {post.metadata.title}
              </div>
            </Link>
            <br />
            <small className='flex px-4 gap-2'>
              {post.metadata.tags.map((tag) => (
                <div
                  key={tag}
                  className='rounded-lg bg-gray-600 text-white px-1 py-1 dark:text-black dark:bg-neutral-200'
                >
                  <Link href={`/blog/tags/${tag}`}>#{tag}</Link>
                </div>
              ))}
            </small>
            <small className='px-4'>{formatDate(post.metadata.date)}</small>
          </div>
        ))}
      <div className='flex'>
        <Link
          href={`/blog/page/${prevPage}`}
          className={
            page - 1 == 0
              ? 'text-sm font-bold rounded-lg p-2 bg-gray-800 text-white mx-auto ml-0 pointer-events-none opacity-30'
              : 'text-sm font-bold rounded-lg p-2 bg-gray-800 text-white mx-auto ml-0'
          }
        >
          &#xab; NEWER POSTS
        </Link>
        <Link
          href={`/blog/page/${nextPage}`}
          className={
            nextPage === maxPage + 1
              ? 'pointer-events-none opacity-30 text-sm font-bold rounded-lg p-2 bg-gray-800 text-white ml-auto mr-0'
              : 'text-sm font-bold rounded-lg p-2 bg-gray-800 text-white ml-auto mr-0'
          }
        >
          OLDER POSTS &#xbb;
        </Link>
      </div>
    </div>
  );
}
