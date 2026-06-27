import Link from 'next/link';

export function TagList({ tag }) {
  return (
    <div key={tag.tag} className='tags md:mr-auto'>
      <Link href={`/blog/tags/${tag.tag}/1`} className='tag-pill'>
        #{tag.tag} ({tag.count})
      </Link>
    </div>
  );
}
