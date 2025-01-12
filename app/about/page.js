import { getBlogPosts, readContent } from '@/app/utils/utils.js';
import { CustomMDX } from '@/app/utils/md.js';

export default async function Page() {
  const mdContent = getBlogPosts('/about/content/');
  let contentHTML = await readContent(mdContent[0].content);

  return (
    <section className='about'>
      <CustomMDX source={contentHTML} />
    </section>
  );
}
