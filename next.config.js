/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath: isDev ? '' : '/resume',
  assetPrefix: isDev ? '' : '/resume'
};

module.exports = nextConfig;
