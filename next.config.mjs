/** @type {import('next').NextConfig} */
import { generateRSSFeed } from './app/utils/rss.js';
const nextConfig = {};

export default {
  async redirects() {
    return [];
  },
  async headers() {
    return [];
  },
  webpack(config, options) {
    if (options.isServer) {
      generateRSSFeed();
    }
    return config;
  },
};
