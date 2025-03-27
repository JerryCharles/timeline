'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function DirectLanguageLinks() {
  const { language, isClient } = useLanguage();
  const pathname = usePathname();
  
  if (!isClient || !pathname) {
    return null;
  }
  
  // Get the path segments
  const segments = pathname.split('/').filter(Boolean);
  
  // Determine current language and create the alternative path
  const currentLang = segments[0] === 'en' || segments[0] === 'zh-TW' ? segments[0] : 'en';
  const targetLang = currentLang === 'en' ? 'zh-TW' : 'en';
  
  // Create the target path
  const targetPath = `/${targetLang}${segments.length > 1 ? '/' + segments.slice(1).join('/') : ''}`;
  
  return (
    <div className="flex items-center space-x-4">
      <Link 
        href={`/en${segments.length > 1 && segments[0] !== 'en' ? '/' + segments.slice(1).join('/') : ''}`}
        className={`text-sm ${language === 'en' ? 'font-bold text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}
      >
        English
      </Link>
      <span className="text-gray-300">|</span>
      <Link 
        href={`/zh-TW${segments.length > 1 && segments[0] !== 'zh-TW' ? '/' + segments.slice(1).join('/') : ''}`}
        className={`text-sm ${language === 'zh-TW' ? 'font-bold text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}
      >
        繁體中文
      </Link>
    </div>
  );
} 