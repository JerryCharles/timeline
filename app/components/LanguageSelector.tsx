'use client';

import { useLanguage } from '../context/LanguageContext';
import { usePathname } from 'next/navigation';

export default function LanguageSelector() {
  const { language, toggleLanguage, isClient } = useLanguage();
  const pathname = usePathname();
  
  // For easier debugging
  const handleToggle = () => {
    console.log('Current language:', language);
    console.log('Current path:', pathname);
    toggleLanguage();
  };
  
  // Only render the actual option if we're on the client side
  if (!isClient) {
    return (
      <div className="relative">
        <button
          className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
        >
          Loading...
        </button>
      </div>
    );
  }
  
  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
      >
        {language === 'en' ? '繁體中文' : 'English'}
      </button>
    </div>
  );
} 