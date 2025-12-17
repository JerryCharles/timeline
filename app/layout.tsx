import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import LanguageSwitchTip from './components/LanguageSwitchTip';
import GoogleAnalytics from './components/GoogleAnalytics';
import JsonLd from './components/JsonLd';

export const metadata: Metadata = {
  title: 'Timeline',
  description: 'Browse topics and events in a timeline format',
  keywords: ['timeline', 'events', 'history', 'topics'],
  authors: [{ name: 'Timeline Team' }],
  creator: 'Timeline Team',
  publisher: 'Timeline',
  metadataBase: new URL('https://tl.3ja.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'zh-TW': '/zh-TW',
    },
  },
  openGraph: {
    title: 'Timeline',
    description: 'Browse topics and events in a timeline format',
    url: 'https://tl.3ja.com',
    siteName: 'Timeline',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tl.3ja.com/og-image.jpg',
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
    images: ['https://tl.3ja.com/twitter-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3676658916099310" crossOrigin="anonymous" />
        {/* Google Analytics */}
        <GoogleAnalytics GA_MEASUREMENT_ID="ERF3V1L6GE" />
        {/* Structured Data */}
        <JsonLd />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Footer />
            <LanguageSwitchTip />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
