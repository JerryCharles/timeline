import './globals.css';
import type { Metadata } from 'next';

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
      <body className="bg-gray-50">
        <header className="bg-white border-b shadow-sm">
          <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-xl font-bold">Timeline App</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
} 