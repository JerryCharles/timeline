import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';

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
        {children}
        <Footer />
      </body>
    </html>
  );
} 