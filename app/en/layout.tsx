import { Metadata } from 'next';

// Define the base URL for your site
const baseUrl = 'https://tl.3ja.com';

// Export metadata as a server component
export const metadata: Metadata = {
  title: 'Timeline',
  description: 'Browse topics and events in a timeline format',
  keywords: ['timeline', 'events', 'history', 'topics'],
  openGraph: {
    title: 'Timeline',
    description: 'Browse topics and events in a timeline format',
    url: `${baseUrl}/en`,
    siteName: 'Timeline',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image-en.jpg`,
        width: 1200,
        height: 630,
        alt: 'Timeline - Browse events in a timeline format',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timeline',
    description: 'Browse topics and events in a timeline format',
    images: [`${baseUrl}/twitter-image-en.jpg`],
  },
  alternates: {
    canonical: '/en',
    languages: {
      'en': '/en',
      'zh-TW': '/zh-TW',
    },
  },
};

import EnglishClient from './LanguageClient';

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EnglishClient>
      {children}
    </EnglishClient>
  );
} 