/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    swcPlugins: [],
  },
};

module.exports = nextConfig;
