import { BlogPosts } from '@/components/posts';
import { Tags } from '@/components/tags';
import { getBlogPosts, countedTags } from '@/app/utils/utils';

export const metadata = {
  title: 'Publications',
  description: 'Hospitality news, updated weekly.',
};

export default async function Blog() {
  let allPostsData = await getBlogPosts('publications/posts');
  let allTags = await countedTags(allPostsData);

  return (
    <section>
      <h1>Publications</h1>
      <section className='flex flex-col md:flex-row'>
        <Tags allTags={allTags} />
        <BlogPosts posts={allPostsData} page={1} slice={5} path='/publications/page' />
      </section>
    </section>
  );
}
