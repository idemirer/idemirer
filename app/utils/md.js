import React from 'react';
import Image from 'next/image';
import { createElement } from 'react';
import * as prod from 'react/jsx-runtime';
import { unified } from 'unified';
import reactRehyped from 'rehype-react';
import rehypeParse from 'rehype-parse';
import Zoom from 'react-medium-image-zoom';

const components = {
  html: ({ children }) => <>{children}</>,
  body: ({ children }) => <>{children}</>,
  head: ({ children }) => <>{children}</>,
  img: (imgProps) => {
    const { src, ...restOfImgProps } = imgProps;
    if (src.startsWith('http')) {
      return (
        <Zoom>
          <Image
            src={src}
            className='rounded-xl shadow-[3px_3px_10px_rgba(51,51,51,1)] dark:shadow-[3px_3px_10px_rgba(0,0,0,.6)]'
            {...restOfImgProps}
          />
        </Zoom>
      );
    }
    return (
      <Zoom>
        <Image
          className='rounded-xl shadow-[3px_3px_10px_rgba(51,51,51,1)] dark:shadow-[3px_3px_10px_rgba(0,0,0,.6)]'
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
