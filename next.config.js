/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["146.56.147.155"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
module.exports = nextConfig;
