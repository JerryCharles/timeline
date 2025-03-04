import { Inter } from 'next/font/google';
import Providers from '@/components/Providers';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Timeline - Track Important Events',
    template: '%s | Timeline',
  },
  description: 'Track and explore important events and topics in an interactive timeline format.',
  keywords: ['timeline', 'events', 'history', 'news', 'topics'],
  openGraph: {
    title: 'Timeline - Track Important Events',
    description: 'Track and explore important events and topics in an interactive timeline format.',
    url: 'https://your-domain.com',
    siteName: 'Timeline',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Timeline - Track Important Events',
    card: 'summary_large_image',
    description: 'Track and explore important events and topics in an interactive timeline format.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://your-domain.com',
    languages: {
      'en-US': 'https://your-domain.com',
      'zh-TW': 'https://your-domain.com/zh',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
} 