// import fs from 'fs';
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
  try {
    const files = await fs.readdir(dir, { withFileTypes: false });
    return files.filter((file) => path.extname(file) === '.md');
  } catch (err) {
    console.error(`Error reading directory "${dir}":`, err);
    return [];
  }
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
  try {
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
  } catch (err) {
    console.error(`Error loading MDX data from "${dir}":`, err);
    return [];
  }
}

export async function getBlogPosts(secondPath) {
  const dir = path.join(process.cwd(), 'app', secondPath);
  return await getMDXData(dir);
}

export function formatDate(date, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

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

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

export async function countedTags(allPostsData) {
  const allPostsAwaitedData = await allPostsData;
  function countOccurrences(arr, item) {
    return arr.filter((currentItem) => currentItem === item).length;
  }

  let allTags = [];
  allPostsAwaitedData.map((p) =>
    p.metadata.tags.map((t) => {
      allTags.push(t);
    })
  );

  const uniqueTags = [...new Set(allTags)];

  const countedTags = uniqueTags.map((tag) => {
    return { tag: tag, count: countOccurrences(allTags, tag) };
  });

  const sortedTags = countedTags.sort((a, b) => b.count - a.count);
  return sortedTags;
}
