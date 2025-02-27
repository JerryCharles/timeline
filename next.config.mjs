/** @type {import('next').NextConfig} */
const nextConfig = {
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
  }
};

export default nextConfig;
