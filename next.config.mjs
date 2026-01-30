/** @type {import('next').NextConfig} */
import { generateRSSFeed } from './app/utils/rss.js';
import { PHASE_PRODUCTION_BUILD } from 'next/constants.js';

const nextConfig = {
  async redirects() {
    return [];
  },
  async headers() {
    return [];
  },
  turbopack: {},
};

export default async (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    await generateRSSFeed();
  }
  return nextConfig;
};
