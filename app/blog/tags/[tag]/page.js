import { BlogPosts } from '@/components/posts';
import { getBlogPosts, countedTags } from '@/app/utils/utils';
import { notFound } from 'next/navigation';
import { Tags } from '@/components/tags';

export async function generateStaticParams() {
  let posts = getBlogPosts('blog/posts');

  let allTags = [];
  posts.map((p) =>
    p.metadata.tags.map((t) => {
      allTags.push(t);
    })
  );
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map((t) => ({ tag: t }));
}

export default async function TagsPage({ params }) {
  const tagParams = await params;
  let allPostsData = getBlogPosts('blog/posts');
  const filteredPosts = allPostsData.filter((post) => post.metadata.tags.indexOf(tagParams.tag) !== -1);
  let allTags = countedTags(filteredPosts);
  const slicer = filteredPosts.length;

  if (!filteredPosts) {
    notFound();
  }

  return (
    <div>
      <h2>Blog Posts with Tag: {tagParams.tag}</h2>
      <section className='flex flex-col md:flex-row'>
        <Tags allTags={allTags} />
        <BlogPosts posts={filteredPosts} page={1} slice={slicer} />
      </section>
    </div>
  );
}
