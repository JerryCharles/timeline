'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect, useCallback } from 'react';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isChinesePath = pathname?.startsWith('/zh');

  useEffect(() => {
    // Update cookie to match current path
    const language = isChinesePath ? 'zh' : 'en';
    Cookies.set('language', language, { expires: 365, path: '/' });
  }, [isChinesePath]);

  const switchLanguage = useCallback(() => {
    const newPath = isChinesePath
      ? pathname.replace('/zh', '') || '/'
      : `/zh${pathname}`;

    // Set cookie first
    const newLanguage = isChinesePath ? 'en' : 'zh';
    Cookies.set('language', newLanguage, { expires: 365, path: '/' });

    // Force a hard navigation
    window.location.pathname = newPath;
  }, [pathname, isChinesePath]);

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-0 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={isChinesePath ? '/zh' : '/'} prefetch>
            <Image
              src="/images/logo.png"
              alt="Timeline Logo"
              width={180}
              height={90}
              priority
              className="object-contain"
            />
          </Link>
        </div>
        
        <button
          onClick={switchLanguage}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          {isChinesePath ? 'English' : '中文'}
        </button>
      </div>
    </header>
  );
} 