import { getBlogPosts } from '@/app/utils/utils';

export const baseUrl = 'https://www.ilhandemirer.com';

export default async function sitemap() {
  const blogs = await getBlogPosts('blog/posts');
  const blogPosts = blogs
    .sort((a, b) => {
      if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
        return -1;
      }
      return 1;
    })
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.metadata.date,
    }));

  const routes = [
    { path: '/', lastmod: '2025-04-11', changefreq: 'weekly', priority: '0.9' },
    {
      path: '/dashboard',
      lastmod: '2025-04-11',
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      path: '/blog',
      lastmod: '2025-04-11',
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      path: '/about',
      lastmod: '2025-04-04',
      changefreq: 'yearly',
      priority: '0.8',
    },
    {
      path: '/contact',
      lastmod: '2025-04-04',
      changefreq: 'yearly',
      priority: '0.6',
    },
  ];
  const routeMap = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastmod,
    changeFrequency: route.changefreq,
  }));

  return [...routeMap, ...blogPosts];
}
