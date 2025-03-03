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
  },
  // The i18n config is removed as it's not compatible with App Router
  // Instead, we'll use the built-in internationalization features of App Router
};

export default nextConfig;
