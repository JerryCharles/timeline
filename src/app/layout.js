import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientProvider from "../components/ClientProvider";
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
  title: "Timeline Unravel the insights.",
  description: "Easy understand and analyze the insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ClientProvider>
          <LanguageProvider>
            {/* <Navbar /> */}
            <main className="flex-grow">{children}</main>
            <Footer />
          </LanguageProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
