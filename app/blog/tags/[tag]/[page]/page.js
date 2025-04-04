import { BlogPosts } from '@/components/posts';
import { getBlogPosts, countedTags } from '@/app/utils/utils';
import { notFound } from 'next/navigation';
import { Tags } from '@/components/tags';

export async function generateStaticParams() {
  let posts = getBlogPosts('blog/posts');
  let countTags = countedTags(posts);

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
  const tagParams = await params;
  let allPostsData = getBlogPosts('blog/posts');
  const filteredPosts = allPostsData.filter((post) => post.metadata.tags.indexOf(tagParams.tag) !== -1);
  let allTags = countedTags(filteredPosts);
  const maxPage = Math.ceil(filteredPosts.length / 5);
  const currentPage = parseInt(tagParams.page, 10);

  if (filteredPosts.length === 0 || currentPage > maxPage || currentPage < 1) {
    notFound();
  }

  return (
    <div>
      <h1 className='mb-5'>
        Blog Posts with Tag:{' '}
        <span className='text-nowrap p-1 px-4 rounded-lg bg-gray-600 text-white dark:text-black dark:bg-neutral-200'>
          {tagParams.tag}
        </span>
      </h1>
      <section className='flex flex-col md:flex-row'>
        <Tags allTags={allTags} />
        <BlogPosts posts={filteredPosts} page={tagParams.page} path={`/blog/tags/${tagParams.tag}`} />
      </section>
    </div>
  );
}
