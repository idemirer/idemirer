import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/app/utils/utils';
import { BlogPosts } from '@/components/posts';

export default function Home() {
  let allPostsData = getBlogPosts('blog/posts');
  return (
    <div>
      <div className='flex justify-center'>
        <Image
          src='/images/IlhanDemirer.jpg'
          priority
          width={178}
          height={178}
          alt='Ilhan Demirer'
          className='align-center rounded-full shadow-md bg-neutral-300'
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
        <p className='py-1'>
          On this page I post weekly updates on <Link href='/blog/page/1'>news, research,</Link> and{' '}
          <Link href='/dashboard'>hospitality data</Link>.
        </p>
      </section>
      <section className='py-4'>
        <h2>Latest Blog Post:</h2>
        <BlogPosts posts={allPostsData} page={1} slice={1} />
      </section>
    </div>
  );
}
