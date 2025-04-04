import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/app/utils/utils';

export function BlogPosts({ posts, path, page, slice = 5 }) {
  const today = +new Date();
  const endPage = page * slice;
  const beginPage = page * slice - slice;
  const maxPage = Math.ceil(posts.length / slice);
  const nextPage = +page + 1;
  const prevPage = +page - 1 == 0 ? 1 : +page - 1;

  return (
    <div className='w-full justify-items-start md:ml-2'>
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
            className='max-w-full rounded-lg bg-gray-900 text-white pb-2 mb-4 md:h-[240px] md:flex md:w-[790px] shadow-[3px_3px_10px_rgba(51,51,51,1)] dark:shadow-[3px_3px_10px_rgba(0,0,0,.6)]'
          >
            <Link href={`/blog/${post.slug}`} className='md:order-last'>
              <Image
                src={`/images/blogimages/${post.metadata.banner}`}
                width={450}
                height={240}
                alt='banner'
                title={post.title}
                className='object-cover object-left-top	rounded-t-lg pb-4 h-[240px] w-[790px] md:rounded-t-none md:rounded-tr-lg md:rounded-br-lg md:h-[240px] md:w-[450px] md:pb-0 hover:grayscale'
              />
            </Link>
            <div className='md:pt-4 md:w-[340px] md:min-w-[340px]'>
              <Link href={`/blog/${post.slug}`} className=''>
                <div className='font-bold px-4 pb-2 text-white inline-block hover:text-[var(--hover)]'>
                  {post.metadata.title}
                </div>
              </Link>
              <small className='flex flex-wrap px-4 gap-1 overflow-hidden max-h-[130px]'>
                {post.metadata.tags.map((tag) => (
                  <div key={tag} className='rounded-lg bg-gray-600 text-white p-1 dark:text-black dark:bg-neutral-200'>
                    <Link href={`/blog/tags/${tag}/1`}>#{tag}</Link>
                  </div>
                ))}
              </small>
              <small className='px-4'>{formatDate(post.metadata.date)}</small>
            </div>
          </div>
        ))}
      <div className={slice == 1 ? 'hidden' : 'flex w-full'}>
        <Link
          href={`${path}/${prevPage}`}
          className={
            page - 1 == 0
              ? 'text-sm font-bold rounded-lg p-2 bg-gray-800 text-white mx-auto ml-0 pointer-events-none opacity-30 shadow-[3px_3px_10px_rgba(51,51,51,1)] dark:shadow-[3px_3px_10px_rgba(0,0,0,.6)]'
              : 'text-sm font-bold rounded-lg p-2 bg-gray-800 text-white mx-auto ml-0 shadow-[3px_3px_10px_rgba(51,51,51,1)] dark:shadow-[3px_3px_10px_rgba(0,0,0,.6)]'
          }
        >
          &#xab; NEWER POSTS
        </Link>
        <Link
          href={`${path}/${nextPage}`}
          className={
            nextPage === maxPage + 1
              ? 'pointer-events-none opacity-30 text-sm font-bold rounded-lg p-2 bg-gray-800 text-white ml-auto mr-0 shadow-[3px_3px_10px_rgba(51,51,51,1)] dark:shadow-[3px_3px_10px_rgba(0,0,0,.6)]'
              : 'text-sm font-bold rounded-lg p-2 bg-gray-800 text-white ml-auto mr-0 shadow-[3px_3px_10px_rgba(51,51,51,1)] dark:shadow-[3px_3px_10px_rgba(0,0,0,.6)]'
          }
        >
          OLDER POSTS &#xbb;
        </Link>
      </div>
    </div>
  );
}
