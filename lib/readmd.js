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
import rehypeHighlight from 'rehype-highlight';

export async function readMD(dir, filename) {
  const postsDirectory = path.join(process.cwd(), dir);
  const fullPath = path.join(postsDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkUnwrapImages)
    .use(remarkRehype)
    .use(rehypeImgSize, { dir: 'public' })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
  };
}
