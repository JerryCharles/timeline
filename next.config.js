/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['berry.b-cdn.net'],
  },
}

module.exports = nextConfig 