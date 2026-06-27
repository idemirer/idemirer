import Link from 'next/link';
import { CustomMDX } from '@/app/utils/md.js';
import { formatDate, getBlogPosts, readContent } from '@/app/utils/utils.js';
import { notFound } from 'next/navigation';
import { baseUrl } from '@/app/sitemap';
import 'react-medium-image-zoom/dist/styles.css';

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

  const { title, date, author, description, banner: image, tags } = post.metadata;
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
      tags: [...tags],
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
    <section className='mb-8'>
      <h1>{post.metadata.title}</h1>
      <p className='text-sm mt-1 mb-0' style={{ color: 'var(--lightText)' }}>{formatDate(post.metadata.date)}</p>
      <div className='tags flex flex-wrap gap-1.5 my-3'>
        {post.metadata.tags.map((tag) => (
          <Link key={tag} href={`/blog/tags/${tag}/1`} className='tag-pill'>
            #{tag}
          </Link>
        ))}
      </div>
      <article className='post'>
        <CustomMDX source={contentHTML} />
      </article>
    </section>
  );
}
