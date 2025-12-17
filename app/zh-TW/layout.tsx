import { Metadata } from 'next';

// Define the base URL for your site
const baseUrl = 'https://tl.3ja.com';

// Export metadata as a server component
export const metadata: Metadata = {
  title: 'Timeline',
  description: '以時間軸格式瀏覽主題和事件',
  keywords: ['時間軸', '事件', '歷史', '主題'],
  openGraph: {
    title: 'Timeline',
    description: '以時間軸格式瀏覽主題和事件',
    url: `${baseUrl}/zh-TW`,
    siteName: 'Timeline',
    locale: 'zh_TW',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image-zh-TW.jpg`,
        width: 1200,
        height: 630,
        alt: 'Timeline - 以時間軸格式瀏覽事件',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timeline',
    description: '以時間軸格式瀏覽主題和事件',
    images: [`${baseUrl}/twitter-image-zh-TW.jpg`],
  },
  alternates: {
    canonical: '/zh-TW',
    languages: {
      'en': '/en',
      'zh-TW': '/zh-TW',
    },
  },
};

import ChineseClient from './LanguageClient';

export default function ChineseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChineseClient>
      {children}
    </ChineseClient>
  );
} 