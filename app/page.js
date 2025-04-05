import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/app/utils/utils';
import { BlogPosts } from '@/components/posts';

export default async function Home() {
  const allPostsData = await getBlogPosts('blog/posts');
  return (
    <div className='w-screen-lg md:w-full'>
      <div className='flex justify-center'>
        <Image
          src='/images/IlhanDemirer.jpg'
          priority
          width={178}
          height={178}
          alt='Ilhan Demirer'
          className='align-center rounded-full drop-shadow-[3px_3px_10px_rgba(51,51,51,1)] dark:shadow-[3px_3px_10px_rgba(0,0,0,.6)]'
        />
      </div>
      <h1>Ilhan Demirer, Ph.D.</h1>
      <section>
        <p className='py-1'>
          Hello, I am <strong>Ilhan</strong>.
        </p>
        <p className='py-1'>
          I am a Management faculty at{' '}
          <a href='https://www.plattsburgh.edu/' target='_blank'>
            State University of New York at Plattsburgh
          </a>
          .
        </p>
        <p>My research interest are in Hospitality Finance and Information Technology.</p>
        <p className='py-1'>
          On this page I post weekly updates on <Link href='/blog/page/1'>news, research,</Link> and{' '}
          <Link href='/dashboard'>hospitality data</Link>.
        </p>
      </section>
      <section className='py-4'>
        <h2>Latest Blog Post:</h2>
        <BlogPosts posts={allPostsData} page={1} slice={1} path='/' />
      </section>
    </div>
  );
}
