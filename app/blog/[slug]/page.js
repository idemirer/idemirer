import Link from 'next/link';
import { CustomMDX } from '@/app/utils/md.js';
import { formatDate, getBlogPosts, readContent } from '@/app/utils/utils.js';
import { notFound } from 'next/navigation';
import { baseUrl } from '@/app/sitemap';

export async function generateStaticParams() {
  const posts = await getBlogPosts('blog/posts');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const posts = await getBlogPosts('blog/posts');
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  const { title, date, author, description, banner: image } = post.metadata;
  const ogImage = image ? `${baseUrl}/images/blogimages/${image}` : `${baseUrl}/images/wide-card.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: new Date(date).toISOString(),
      authors: [author],
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const posts = await getBlogPosts('blog/posts');
  const post = posts.find((post) => post.slug === slug);

  if (post === undefined) {
    notFound();
  }
  const contentHTML = await readContent(post.content);

  return (
    <section>
      <h1>{post.metadata.title}</h1>
      <div className='flex justify-between items-center my-2 text-sm'>
        <p className='text-sm'>{formatDate(post.metadata.date)}</p>
      </div>
      <small className='flex gap-2'>
        {post.metadata.tags.map((tag) => (
          <div key={tag} className='rounded-lg bg-gray-700 text-white px-1 py-1 dark:text-black dark:bg-neutral-300'>
            <Link href={`/blog/tags/${tag}/1`}>#{tag}</Link>
          </div>
        ))}
      </small>
      <article className='post'>
        <CustomMDX source={contentHTML} />
      </article>
    </section>
  );
}
