'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next';

export type Language = 'en' | 'zh-TW';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isClient: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Initialize language from cookie or browser preference on client side
  useEffect(() => {
    setIsClient(true);
    const savedLanguage = getCookie('language') as Language;
    
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    } else {
      // Check browser language preferences
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        setLanguageState('zh-TW');
        setCookie('language', 'zh-TW', { maxAge: 60 * 60 * 24 * 30 });
      } else {
        setLanguageState('en');
        setCookie('language', 'en', { maxAge: 60 * 60 * 24 * 30 });
      }
    }
  }, []);

  // Also detect language from URL path
  useEffect(() => {
    if (pathname) {
      const segments = pathname.split('/').filter(Boolean);
      const currentLang = segments[0];
      
      if (currentLang === 'en' || currentLang === 'zh-TW') {
        setLanguageState(currentLang as Language);
      }
    }
  }, [pathname]);

  // Function to set language and update cookie
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setCookie('language', lang, { maxAge: 60 * 60 * 24 * 30 });
  };

  // Toggle between languages and navigate to the appropriate URL
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'zh-TW' : 'en';
    setLanguageState(newLang);
    setCookie('language', newLang, { maxAge: 60 * 60 * 24 * 30 });
    
    if (pathname) {
      const segments = pathname.split('/').filter(Boolean);
      const currentLang = segments[0];
      
      if ((currentLang === 'en' || currentLang === 'zh-TW') && segments.length > 0) {
        // Replace the language segment
        const newPath = `/${newLang}/${segments.slice(1).join('/')}`;
        router.push(newPath);
      } else {
        router.push(`/${newLang}`);
      }
    } else {
      router.push(`/${newLang}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isClient }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 