import { TagList } from './tagList';

export async function Tags({ allTags }) {
  const sortedTags = await allTags;
  return (
    <small className='shrink-0 py-1 mb-4 flex flex-wrap gap-1.5 max-h-28 overflow-y-auto overflow-x-hidden md:flex-col md:flex-nowrap md:max-h-[520px] md:overflow-y-auto md:overflow-x-hidden md:w-44 md:mr-3'>
      {sortedTags.map((tag) => (
        <TagList tag={tag} key={tag.tag} />
      ))}
    </small>
  );
}
