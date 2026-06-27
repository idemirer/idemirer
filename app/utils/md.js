import React from 'react';
import Image from 'next/image';
import { createElement } from 'react';
import * as prod from 'react/jsx-runtime';
import { unified } from 'unified';
import reactRehyped from 'rehype-react';
import rehypeParse from 'rehype-parse';
import Zoom from 'react-medium-image-zoom';
import BlogChart from '@/components/blogChart';

const components = {
  div: ({ 'data-blogchart': chartType, 'data-height': chartHeight, children, ...rest }) => {
    if (chartType) return <BlogChart type={chartType} height={chartHeight} />;
    return <div {...rest}>{children}</div>;
  },
  html: ({ children }) => <>{children}</>,
  body: ({ children }) => <>{children}</>,
  head: ({ children }) => <>{children}</>,
  a: ({ children, href, ...rest }) => {
    if (href.startsWith('http')) {
      return (
        <a href={href} {...rest} target='_blank'>
          {children}
        </a>
      );
    } else {
      return (
        <a href={href} {...rest}>
          {children}
        </a>
      );
    }
  },
  img: (imgProps) => {
    const { src, ...restOfImgProps } = imgProps;
    if (src.startsWith('http')) {
      return (
        <Zoom>
          <Image
            src={src}
            className='rounded-xl shadow-[0_2px_12px_var(--shadow)]'
            {...restOfImgProps}
          />
        </Zoom>
      );
    }
    return (
      <Zoom>
        <Image
          className='rounded-xl shadow-[0_2px_12px_var(--shadow)]'
          src={src}
          {...restOfImgProps}
        />
      </Zoom>
    );
  },
};

const production = {
  Fragment: prod.Fragment,
  jsx: prod.jsx,
  jsxs: prod.jsxs,
  components: components,
  createElement: createElement,
};

export function CustomMDX({ source }) {
  return unified().use(rehypeParse).use(reactRehyped, production).processSync(source).result;
}
