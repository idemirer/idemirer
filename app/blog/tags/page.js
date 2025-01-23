import { getBlogPosts, countedTags } from '@/app/utils/utils';
import { Tags } from '@/components/tags';

export default function TagsPage() {
  let allPostsData = getBlogPosts('blog/posts');
  let allTags = countedTags(allPostsData);

  return (
    <section>
      <h1>Tags</h1>
      <section className='flex flex-col md:flex-row'>
        <Tags allTags={allTags} />
      </section>
    </section>
  );
}
