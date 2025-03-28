'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

export default function Footer() {
  const { language, isClient } = useLanguage();
  const { theme, setTheme, isClient: isThemeClient } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isEnglish = language === 'en';

  // Ensure hydration mismatch is avoided
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only use this when client-side rendering is active
  if (!isClient || !isThemeClient || !mounted) {
    return (
      <footer className="mt-auto py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">Loading...</div>
      </footer>
    );
  }

  // Get the correct link paths based on language
  const privacyLink = isEnglish ? '/en/privacy' : '/zh-TW/privacy';
  const termsLink = isEnglish ? '/en/terms' : '/zh-TW/terms';

  return (
    <footer className="mt-auto py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center md:justify-start">
            <Link href={privacyLink} className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {isEnglish ? 'Privacy Policy' : '隱私政策'}
            </Link>
            <Link href={termsLink} className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {isEnglish ? 'Terms of Service' : '服務條款'}
            </Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-5">
            <a 
              href="https://twitter.com/timeline" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" 
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
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" 
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
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" 
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
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" 
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
          
          {/* Theme Switcher */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            {/* Theme Switcher */}
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
              {/* Light Mode */}
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-lg ${
                  theme === 'light' 
                    ? 'bg-white dark:bg-gray-600 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}
                aria-label={isEnglish ? 'Light Mode' : '亮色模式'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </button>
              
              {/* Dark Mode */}
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-lg ${
                  theme === 'dark' 
                    ? 'bg-white dark:bg-gray-600 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}
                aria-label={isEnglish ? 'Dark Mode' : '暗色模式'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </button>
              
              {/* Auto Mode */}
              <button
                onClick={() => setTheme('auto')}
                className={`p-2 rounded-lg ${
                  theme === 'auto' 
                    ? 'bg-white dark:bg-gray-600 shadow-sm' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}
                aria-label={isEnglish ? 'Auto Mode' : '自動模式'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 3v18"></path>
                  <path d="M3 12h18"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright - Moved to its own row and centered */}
        <div className="mt-2 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {isEnglish ? 'Timeline' : '時間軸'}
          </p>
        </div>
      </div>
    </footer>
  );
} 