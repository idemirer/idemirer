import { BlogPosts } from '@/components/posts';
import { getBlogPosts, countedTags } from '@/app/utils/utils';
import { notFound } from 'next/navigation';
import { Tags } from '@/components/tags';

export async function generateStaticParams() {
  let posts = getBlogPosts('blog/posts');
  const maxPage = Math.ceil(posts.length / 5);
  let pageObj = [];
  for (let i = 0; i <= maxPage; i++) {
    pageObj.push({ page: i.toString() });
  }
  return pageObj;
}

export default async function Blog({ params }) {
  let allPostsData = getBlogPosts('blog/posts');
  let allTags = countedTags(allPostsData);
  const pageParams = await params;
  const maxPage = Math.ceil(allPostsData.length / 5);
  const currentPage = parseInt(pageParams.page, 10);
  console.log(currentPage, maxPage);

  if (allPostsData.length === 0 || currentPage > maxPage || currentPage < 1) {
    notFound();
  }

  return (
    <section>
      <h1>Blog Posts</h1>
      <section className='flex flex-col md:flex-row'>
        <Tags allTags={allTags} />
        <BlogPosts posts={allPostsData} page={pageParams.page} path='/blog/page' />
      </section>
    </section>
  );
}
