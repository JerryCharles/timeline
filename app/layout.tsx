import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import LanguageSwitchTip from './components/LanguageSwitchTip';

export const metadata: Metadata = {
  title: 'Timeline',
  description: 'Browse topics and events in a timeline format',
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