import Link from 'next/link';

export function TagList({ tag }) {
  return (
    <div
      key={tag.tag}
      className='tags text-nowrap p-1 mr-1 rounded-lg bg-gray-600 text-white dark:text-black dark:bg-neutral-200 md:mr-auto'
    >
      <Link href={`/blog/tags/${tag.tag}/1`}>
        #{tag.tag} ({tag.count})
      </Link>
    </div>
  );
}
