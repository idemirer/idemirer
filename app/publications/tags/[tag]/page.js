import { BlogPosts } from '@/components/posts';
import { getBlogPosts, countedTags } from '@/app/utils/utils';
import { notFound } from 'next/navigation';
import { Tags } from '@/components/tags';

export const metadata = {
  title: 'Publications',
  description: 'Hospitality news, updated weekly.',
};

export async function generateStaticParams() {
  const posts = await getBlogPosts('publications/posts');

  const allTags = [];
  posts.map((p) =>
    p.metadata.tags.map((t) => {
      allTags.push(t);
    }),
  );
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map((t) => ({ tag: t }));
}

export default async function TagsPage({ params }) {
  const { tag } = await params;
  const allPostsData = await getBlogPosts('publications/posts');
  const filteredPosts = allPostsData.filter((post) => post.metadata.tags.indexOf(tag) !== -1);
  const allTags = await countedTags(filteredPosts);

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1>Publications with Tag: {tag}</h1>
      <section className='flex flex-col md:flex-row'>
        <Tags allTags={allTags} />
        <BlogPosts posts={filteredPosts} page={1} slice={5} path={`/publications/tags/${tag}`} />
      </section>
    </div>
  );
}
