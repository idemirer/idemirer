import { getBlogPosts } from './utils.js';
import path from 'path';
import fs from 'fs/promises';
import { createRequire } from 'module';
import { formatDate } from './utils.js';

const require = createRequire(import.meta.url);
const RSS = require('rss');

export async function generateRSSFeed() {
  const siteUrl = 'https://ilhandemirer.com';
  const posts = await getBlogPosts('blog/posts');

  const feed = new RSS({
    title: "Ilhan Demirer's Blog",
    description: 'Weekly insights on hospitality, business, and tech.',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.metadata.title,
      guid: `${siteUrl}/blog/${post.slug}`,
      url: `${siteUrl}/blog/${post.slug}`,
      description: post.metadata.description || '',
      date: formatDate(post.metadata.date),
    });
  });

  const rss = feed.xml({ indent: true });
  const rssPath = path.join(process.cwd(), 'public', 'rss.xml');
  await fs.writeFile(rssPath, rss);
}
