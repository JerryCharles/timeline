import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Timeline - Unravel the insights",
    template: "%s | Timeline"
  },
  description: "Explore significant historical events and their impact on our world through interactive timelines.",
  keywords: ["timeline", "history", "events", "historical timeline", "interactive timeline"],
  authors: [{ name: "Timeline Team" }],
  creator: "Timeline Team",
  publisher: "Timeline",
  metadataBase: new URL("https://timeline-app.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "zh-TW": "/zh-TW",
    },
  },
  openGraph: {
    title: "Timeline - Unravel the insights",
    description: "Explore significant historical events and their impact on our world through interactive timelines.",
    url: "https://timeline-app.com", // Replace with your actual domain
    siteName: "Timeline",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Add an Open Graph image in the public folder
        width: 1200,
        height: 630,
        alt: "Timeline - Unravel the insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeline - Unravel the insights",
    description: "Explore significant historical events and their impact on our world through interactive timelines.",
    images: ["/og-image.jpg"], // Same as OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <LanguageProvider initialLanguage="en">
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
