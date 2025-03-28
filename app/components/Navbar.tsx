'use client';

import Link from 'next/link';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';
import DirectLanguageLinks from './DirectLanguageLinks';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function Navbar() {
  const { language, isClient } = useLanguage();
  const isEnglish = language === 'en';
  
  // Get the correct link paths based on language
  const homeLink = isEnglish ? '/en' : '/zh-TW';
  const explorePath = isEnglish ? '/en/explore' : '/zh-TW/explore';
  const aboutPath = isEnglish ? '/en/about' : '/zh-TW/about';
  const privacyPath = isEnglish ? '/en/privacy' : '/zh-TW/privacy';
  const termsPath = isEnglish ? '/en/terms' : '/zh-TW/terms';

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href={homeLink} className="flex items-center gap-2">
          <div className="text-pink-500 dark:text-pink-400">
            <Image src="/logo.png" alt="Timeline Logo" width={60} height={60} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-pink-500 dark:text-pink-400">{isEnglish ? 'Timeline' : '時間軸'}</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{isEnglish ? 'Unravel the Insights' : '揭秘真諦'}</p>
          </div>
        </Link>
        
        <div className="flex items-center gap-6">
          {/* Use both approaches for now */}
          <div className="hidden md:block">
            <DirectLanguageLinks />
          </div>
          <div className="md:hidden">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
} 