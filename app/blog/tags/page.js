import { getBlogPosts, countedTags } from '@/app/utils/utils';
import { TagList } from '@/components/taglist';

export default async function TagsPage() {
  const allPostsData = await getBlogPosts('blog/posts');
  const allTags = await countedTags(allPostsData);

  return (
    <section>
      <h1>Tags</h1>
      <section className=''>
        <small className='flex flex-row flex-wrap items-center justify-center w-[600px] mx-auto pb-8 gap-1'>
          {allTags.map((tag) => (
            <TagList tag={tag} key={tag.tag} />
          ))}
        </small>
      </section>
    </section>
  );
}
