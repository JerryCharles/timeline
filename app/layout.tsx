import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
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
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <LanguageProvider>
          {children}
          <Footer />
          <LanguageSwitchTip />
        </LanguageProvider>
      </body>
    </html>
  );
} 