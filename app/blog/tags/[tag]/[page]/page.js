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
  const countTags = await countedTags(posts);

  const params = [];

  countTags.forEach((tag) => {
    const totalPages = Math.ceil(tag.count / 5);
    for (let page = 1; page <= totalPages; page++) {
      params.push({
        tag: tag.tag,
        page: page.toString(),
      });
    }
  });
  return params;
}

export default async function TagsPage({ params }) {
  const { tag, page } = await params;
  const allPostsData = await getBlogPosts('blog/posts');
  const filteredPosts = allPostsData.filter((post) => post.metadata.tags.indexOf(tag) !== -1);
  const allTags = await countedTags(filteredPosts);
  const maxPage = Math.ceil(filteredPosts.length / 5);
  const currentPage = parseInt(page, 10);

  if (filteredPosts.length === 0 || currentPage > maxPage || currentPage < 1) {
    notFound();
  }

  return (
    <div>
      <h1 className='mb-5 leading-12 md:leading-none'>
        Blog Posts with Tag:{' '}
        <span className='text-nowrap p-1 px-4 rounded-lg bg-gray-600 text-white dark:text-black dark:bg-neutral-200'>
          {tag}
        </span>
      </h1>
      <section className='flex flex-col md:flex-row'>
        <Tags allTags={allTags} />
        <BlogPosts posts={filteredPosts} page={page} path={`/blog/tags/${tag}`} />
      </section>
    </div>
  );
}
