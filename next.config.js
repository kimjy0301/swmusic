/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["gsap"]);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["146.56.147.155", "kimjiyong.co.kr"],
    deviceSizes: [1200, 1920, 2048, 3840],
    imageSizes: [128, 128, 256, 384],
    staticPageGenerationTimeout: 240,
  },
};
module.exports = withTM(nextConfig);
