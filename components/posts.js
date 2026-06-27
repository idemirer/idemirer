import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/app/utils/utils';

export function BlogPosts({ posts, path, page, addMargin = true, slice = 5 }) {
  const today = +new Date();
  const endPage = page * slice;
  const beginPage = page * slice - slice;
  const maxPage = Math.ceil(posts.length / slice);
  const nextPage = +page + 1;
  const prevPage = +page - 1 == 0 ? 1 : +page - 1;

  return (
    <div className={`w-full justify-items-start ${addMargin ? 'md:ml-2' : ''}`}>
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
            className='max-w-full rounded-xl card overflow-hidden pb-2 mb-5 md:h-[240px] md:flex md:w-[790px]'
          >
            <Link href={`/blog/${post.slug}`} className='md:order-last shrink-0'>
              <Image
                src={`/images/blogimages/${post.metadata.banner}`}
                width={450}
                height={240}
                alt='banner'
                title={post.title}
                className='object-cover object-left-top rounded-t-xl h-[200px] w-full md:rounded-t-none md:rounded-tr-xl md:rounded-br-xl md:h-[240px] md:w-[340px] hover:opacity-90 transition-opacity'
              />
            </Link>
            <div className='flex flex-col justify-between md:pt-5 md:pb-4 px-4 py-3 flex-1 min-w-0'>
              <div>
                <Link href={`/blog/${post.slug}`}>
                  <div className='font-bold text-(--text) mb-3 leading-snug hover:text-(--hover) transition-colors'>
                    {post.metadata.title}
                  </div>
                </Link>
                <div className='tags flex flex-wrap gap-1.5'>
                  {post.metadata.tags.map((tag) => (
                    <Link key={tag} href={`/blog/tags/${tag}/1`} className='tag-pill'>
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              <small className='text-(--lightText) mt-3 block'>{formatDate(post.metadata.date)}</small>
            </div>
          </div>
        ))}
      <div className={slice == 1 ? 'hidden' : 'tags flex w-full mt-2'}>
        <Link
          href={`${path}/${prevPage}`}
          className={
            page - 1 == 0
              ? 'text-sm font-medium rounded-lg px-4 py-2 ml-0 card text-(--text) pointer-events-none opacity-30'
              : 'text-sm font-medium rounded-lg px-4 py-2 ml-0 card text-(--text) hover:text-(--hover) transition-colors'
          }
        >
          &#xab; Newer Posts
        </Link>
        <Link
          href={`${path}/${nextPage}`}
          className={
            nextPage === maxPage + 1
              ? 'pointer-events-none opacity-30 text-sm font-medium rounded-lg px-4 py-2 ml-auto mr-0 card text-(--text)'
              : 'text-sm font-medium rounded-lg px-4 py-2 ml-auto mr-0 card text-(--text) hover:text-(--hover) transition-colors'
          }
        >
          Older Posts &#xbb;
        </Link>
      </div>
    </div>
  );
}
