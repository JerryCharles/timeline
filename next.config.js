/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone', // Important for Cloudflare Workers
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'timeline-833534357674.us-central1.run.app'
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