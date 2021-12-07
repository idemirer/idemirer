import React from 'react';
import Image from 'next/image';
import { unified } from 'unified';
import reactRehyped from 'rehype-react';
import rehypeParse from 'rehype-parse';

const components = {
  img: (image) => {
    if (image.src.startsWith('http')) {
      return <img {...image} />;
    }
    return (
      <Image
        src={image.src}
        placeholder='blur'
        blurDataURL={'data:image/svg+xml;base64,R0lGODlhAQABAPAAyH5BAAAAAAALAAAAAABAAEAAAICRAEAO'}
        alt={image.alt}
        heigth={image.heigth}
        width={image.width}
      />
    );
  },
};

export default function PostBody({ content }) {
  const contentMD = unified()
    .use(rehypeParse)
    .use(reactRehyped, { createElement: React.createElement, components: components })
    .processSync(content).result;
  return <div>{contentMD}</div>;
}
