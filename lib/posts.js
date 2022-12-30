import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeImgSize from 'rehype-img-size';
import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';
import remarkUnwrapImages from 'remark-unwrap-images';
import { getPageNumbers } from './getPageNumbers';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => path.extname(fileName) == '.md')
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
      };
    });

  // Filter draft posts and posts that are prepared ahead. Sort based on date.
  const today = +new Date();
  const finalPosts = allPostsData.filter(({ draft, date }) => {
    const timeZoneOffset = new Date(Date.parse(date)).getTimezoneOffset() * 60 * 1001;
    const postDate = Date.parse(date) + timeZoneOffset;
    return (draft !== true) & (today >= postDate);
  }); // Dates are 2022-12-01 format. They are considered UTC time.

  return finalPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getAllPages() {
  const totalPages = await getPageNumbers(1);
  let paths = [];
  for (let i = 1; i <= totalPages.pageCount; i++) {
    paths.push({ params: { pages: i.toString() } });
  }
  return paths;
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkUnwrapImages)
    .use(remarkRehype)
    .use(rehypeImgSize, { dir: 'public' })
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getAllPostTags(allPostsData) {
  let tagArr = [];
  allPostsData.map((p) =>
    p.tags.map((t) => {
      tagArr.push(t);
    })
  );
  tagArr = [...new Set(tagArr)];
  return tagArr.map((t) => {
    return {
      params: {
        tag: t,
      },
    };
  });
}

export async function searchTags(tag, allPostsData) {
  const posts = await allPostsData.filter((post) => post.tags.indexOf(tag) !== -1);
  return {
    posts,
  };
}
