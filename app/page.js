import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/app/utils/utils';
import { BlogPosts } from '@/components/posts';

export default async function Home() {
  const allPostsData = await getBlogPosts('blog/posts');
  return (
    <div className='py-6'>
      {/* Profile hero */}
      <div className='flex flex-col md:flex-row md:items-start gap-6 md:gap-8 pb-8 border-b border-[var(--border)]'>
        <Image
          src='/images/IlhanDemirer.jpg'
          priority
          width={130}
          height={130}
          alt='Ilhan Demirer'
          className='rounded-full mx-auto md:mx-0 shrink-0 ring-2 ring-[var(--border)]'
        />
        <div>
          <h1 className='mt-0 mb-2'>Ilhan Demirer, Ph.D.</h1>
          <p className='mt-0 mb-3 text-sm font-medium' style={{ color: 'var(--lightText)' }}>
            Associate Professor &amp; Chair · Management, Information Systems, and Analytics ·{' '}
            <a href='https://www.plattsburgh.edu/' target='_blank'>SUNY Plattsburgh</a>
          </p>
          <p className='my-2'>
            My teaching and research interests are in hospitality managerial accounting, finance, management,
            and the use of data analytics in the hospitality industry. On this site I share weekly{' '}
            <Link href='/blog/page/1'>news</Link> and <Link href='/dashboard'>data</Link> related to the U.S. hotel industry.
          </p>
          <p className='my-2'>
            <Link href='/contact'>Contact me</Link> if you have any questions or comments.
          </p>
        </div>
      </div>

      {/* Latest post */}
      <section className='pt-8'>
        <p className='text-xs font-semibold uppercase tracking-widest mb-4' style={{ color: 'var(--lightText)' }}>
          Latest Post
        </p>
        <BlogPosts posts={allPostsData} page={1} slice={1} addMargin={false} path='/' />
      </section>
    </div>
  );
}
