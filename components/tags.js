import Link from 'next/link';
import { TagList } from './taglist';

export async function Tags({ allTags }) {
  const sortedTags = await allTags;
  return (
    <small className='w-full py-1 h-25 mb-4 flex flex-wrap gap-1 overflow-auto md:flex-col md:flex-nowrap md:h-[1320px]'>
      {sortedTags.map((tag) => (
        <TagList tag={tag} key={tag.tag} />
      ))}
    </small>
  );
}
