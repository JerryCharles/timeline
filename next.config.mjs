/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'berry.b-cdn.net',
      },
      {
        protocol: 'https',
        hostname: 'timeline-833534357674.us-central1.run.app',
      },
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  output: 'standalone',
  distDir: '.next',
  experimental: {
    // Reduce build size
    optimizeCss: false,
    optimizePackageImports: ['@heroicons/react'],
  },
};

export default nextConfig;
