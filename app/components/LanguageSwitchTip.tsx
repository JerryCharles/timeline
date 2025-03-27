'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitchTip() {
  const { language, isClient } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [shouldShow, setShouldShow] = useState(false);
  const [targetPath, setTargetPath] = useState('');

  useEffect(() => {
    if (!isClient || !pathname) return;

    const segments = pathname.split('/').filter(Boolean);
    const currentLang = segments[0];

    // If URL language doesn't match preferred language
    if ((currentLang === 'en' && language === 'zh-TW') || 
        (currentLang === 'zh-TW' && language === 'en')) {
      
      // Construct the correct path for the preferred language
      const newPath = `/${language}/${segments.slice(1).join('/')}`;
      setTargetPath(newPath);
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }
  }, [pathname, language, isClient]);

  if (!shouldShow || !isClient) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 z-50 w-11/12 max-w-md border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-700">
          {language === 'en' 
            ? 'This page is available in English' 
            : '此頁面提供繁體中文版本'}
        </p>
        <div className="flex space-x-2">
          <button 
            onClick={() => router.push(targetPath)}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
          >
            {language === 'en' ? 'Switch to English' : '切換到繁體中文'}
          </button>
          <button 
            onClick={() => setShouldShow(false)}
            className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors"
          >
            {language === 'en' ? 'Dismiss' : '關閉'}
          </button>
        </div>
      </div>
    </div>
  );
} 