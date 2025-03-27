'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, isClient } = useLanguage();
  const isEnglish = language === 'en';

  // Only use this when client-side rendering is active
  if (!isClient) {
    return (
      <footer className="mt-auto py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">Loading...</div>
      </footer>
    );
  }

  // Get the correct link paths based on language
  const privacyLink = isEnglish ? '/en/privacy' : '/zh-TW/privacy';
  const termsLink = isEnglish ? '/en/terms' : '/zh-TW/terms';
  const cookiesLink = isEnglish ? '/en/cookies' : '/zh-TW/cookies';

  return (
    <footer className="mt-auto py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center md:justify-start">
            <Link href={privacyLink} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              {isEnglish ? 'Privacy Policy' : '隱私政策'}
            </Link>
            <Link href={termsLink} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              {isEnglish ? 'Terms of Service' : '服務條款'}
            </Link>
            <Link href={cookiesLink} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              {isEnglish ? 'Cookie Policy' : 'Cookie 政策'}
            </Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-5">
            <a 
              href="https://twitter.com/timeline" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-blue-500 transition-colors" 
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a 
              href="https://t.me/timeline" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-blue-500 transition-colors" 
              aria-label="Telegram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2l-19 9 5.7 2.9L18 8l-6.8 8 2.9 4.9 7.4-20z"></path>
              </svg>
            </a>
            <a 
              href="https://instagram.com/timeline" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-blue-500 transition-colors" 
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://tiktok.com/@timeline" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-blue-500 transition-colors" 
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                <path d="M15 8v8a4 4 0 0 1-4 4"></path>
                <line x1="15" y1="8" x2="20" y2="8"></line>
              </svg>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {isEnglish ? 'Timeline' : '時間軸'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 