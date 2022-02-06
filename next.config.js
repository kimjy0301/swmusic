/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["146.56.147.155"],
    deviceSizes: [828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [96, 96, 96, 128, 256, 384],
  },
};
module.exports = nextConfig;
