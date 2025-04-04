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
  console.log(params);
  return params;
}

export default async function TagsPage({ params }) {
  const tagParams = await params;
  let allPostsData = getBlogPosts('blog/posts');
  const filteredPosts = allPostsData.filter((post) => post.metadata.tags.indexOf(tagParams.tag) !== -1);
  let allTags = countedTags(filteredPosts);

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1>Blog Posts with Tag: {tagParams.tag}</h1>
      <section className='flex flex-col md:flex-row'>
        <Tags allTags={allTags} />
        <BlogPosts posts={filteredPosts} page={tagParams.page} path={`/blog/tags/${tagParams.tag}`} />
      </section>
    </div>
  );
}
