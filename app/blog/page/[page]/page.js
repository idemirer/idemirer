import { BlogPosts } from '@/components/posts';
import { getBlogPosts, countedTags } from '@/app/utils/utils';
import { notFound } from 'next/navigation';
import { Tags } from '@/components/tags';

export const metadata = {
  title: 'Blog Posts',
  description: 'Hospitality news, updated weekly.',
};

export async function generateStaticParams() {
  const posts = await getBlogPosts('blog/posts');
  const maxPage = Math.ceil(posts.length / 5);
  const pageObj = [];
  for (let i = 1; i <= maxPage; i++) {
    pageObj.push({ page: i.toString() });
  }
  return pageObj;
}

export default async function Blog({ params }) {
  const { page } = await params;
  const allPostsData = await getBlogPosts('blog/posts');
  const allTags = await countedTags(allPostsData);
  const maxPage = Math.ceil(allPostsData.length / 5);
  const currentPage = parseInt(page, 10);

  if (allPostsData.length === 0 || currentPage > maxPage || currentPage < 1) {
    notFound();
  }

  return (
    <section>
      <h1>Blog Posts</h1>
      <section className='flex flex-col md:flex-row'>
        <Tags allTags={allTags} />
        <BlogPosts posts={allPostsData} page={page} path='/blog/page' />
      </section>
    </section>
  );
}
