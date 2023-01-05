/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath: '/resume',
  assetPrefix: '/resume'
};

module.exports = nextConfig;
