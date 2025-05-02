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
      <section className='main-page'>
        <p className='py-1'>
          I am an Associate Professor and Chair of the{' '}
          <a href='https://www.plattsburgh.edu/academics/schools/business-economics/misa/index.html' target='_blank'>
            Department of Management, Information Systems, and Analytics
          </a>{' '}
          at{' '}
          <a href='https://www.plattsburgh.edu/' target='_blank'>
            State University of New York at Plattsburgh
          </a>
          . My teaching and research interest are in the areas of hospitality managerial accounting, hospitality
          finance, hospitality management, and hospitality technology. I am also interested in the use of data analytics
          in the hospitality industry.
        </p>
        <p className='py-1'>
          On this site, I share news and <Link href='/dashboard'>data</Link> related to hospitality industry. I plan to
          add my research and teaching materials in the future.
        </p>
        <p className='py-1'>
          Feel free to <Link href='/contact'>contact me</Link> if you have any questions or comments.
        </p>
      </section>
      <section className='py-4'>
        <h2>Latest Blog Post:</h2>
        <BlogPosts posts={allPostsData} page={1} slice={1} addMargin={false} path='/' />
      </section>
    </div>
  );
}
