/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '1.3ja.com',
        pathname: '/images/**'
      },
      {
        protocol: 'https',
        hostname: 'berry.b-cdn.net',
        pathname: '/images/**'
      }
    ]
  },
}

module.exports = nextConfig 