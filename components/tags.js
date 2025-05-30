import Link from 'next/link';
import { TagList } from './tagList';

export async function Tags({ allTags }) {
  const sortedTags = await allTags;
  return (
    <small className='w-full py-1 max-h-25 mb-4 flex flex-wrap gap-1 overflow-auto md:flex-col md:flex-nowrap md:h-[1320px] md:max-h-full'>
      {sortedTags.map((tag) => (
        <TagList tag={tag} key={tag.tag} />
      ))}
    </small>
  );
}
