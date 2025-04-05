import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeImgSize from 'rehype-img-size';
import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';
import rehypekUnwrapImages from 'rehype-unwrap-images';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

function parseFrontmatter(fileContent) {
  const matterResult = matter(fileContent);
  return {
    metadata: matterResult.data,
    content: matterResult.content,
  };
}

async function getMDXFiles(dir) {
  const files = await fs.readdir(dir);
  return files.filter((file) => path.extname(file) === '.md');
}

async function readMDXFile(filePath) {
  const rawContent = await fs.readFile(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

export async function readContent(content) {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeImgSize, { dir: 'public' })
    .use(rehypekUnwrapImages)
    .use(rehypeHighlight)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(content);

  return processedContent.toString();
}

async function getMDXData(dir) {
  const mdxFiles = await getMDXFiles(dir);

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const { metadata, content } = await readMDXFile(path.join(dir, file));
      return {
        metadata,
        slug: metadata.slug,
        content,
      };
    })
  );

  return posts;
}

export async function getBlogPosts(secondPath) {
  return await getMDXData(path.join(process.cwd(), 'app', secondPath));
}

export function formatDate(date, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return includeRelative ? `${fullDate} (${formattedDate})` : fullDate;
}

export function countedTags(allPostsData) {
  const allTags = allPostsData.flatMap((p) => p.metadata.tags);
  const uniqueTags = [...new Set(allTags)];

  return uniqueTags
    .map((tag) => ({
      tag,
      count: allTags.filter((t) => t === tag).length,
    }))
    .sort((a, b) => b.count - a.count);
}
