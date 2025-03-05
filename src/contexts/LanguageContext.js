"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

// Define available languages
export const LANGUAGES = {
  EN: 'en',
  ZH_TW: 'zh-TW'  // Changed from CN to ZH_TW with proper locale code
};

// Create the context
const LanguageContext = createContext();

// Hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Create a provider component
export function LanguageProvider({ children, initialLanguage }) {
  const [language, setLanguage] = useState(initialLanguage || LANGUAGES.EN);
  const router = useRouter();

  useEffect(() => {
    // Check for language mismatch header
    const checkLanguageMismatch = async () => {
      try {
        const response = await fetch(window.location.href);
        const mismatch = response.headers.get('x-language-mismatch');
        const preferredLanguage = response.headers.get('x-preferred-language');
        
        if (mismatch === 'true' && preferredLanguage) {
          const currentPath = window.location.pathname;
          const newPath = currentPath.replace(/^\/[^/]+/, `/${preferredLanguage}`);
          
          // Show language switch tip
          const shouldSwitch = window.confirm(
            `Would you like to switch to your preferred language (${
              preferredLanguage === LANGUAGES.EN ? 'English' : '繁體中文'
            })?`
          );
          
          if (shouldSwitch) {
            router.push(newPath);
          }
        }
      } catch (error) {
        console.error('Error checking language mismatch:', error);
      }
    };

    checkLanguageMismatch();
  }, [router]);

  // Toggle between languages
  const toggleLanguage = () => {
    const newLanguage = language === LANGUAGES.EN ? LANGUAGES.ZH_TW : LANGUAGES.EN;
    
    // Save to cookie
    Cookies.set('NEXT_LOCALE', newLanguage, { expires: 365 });
    
    // Update URL to reflect language change
    const currentPath = window.location.pathname;
    
    // Handle root path case
    if (currentPath === '/') {
      router.push(`/${newLanguage}`);
      return;
    }
    
    // Handle normal language switch
    const newPath = currentPath.replace(/^\/[^/]+/, `/${newLanguage}`);
    if (newPath === currentPath) {
      // If no language prefix found, add it
      router.push(`/${newLanguage}${currentPath}`);
    } else {
      router.push(newPath);
    }
  };

  // Get language label
  const getLanguageLabel = () => {
    return language === LANGUAGES.EN ? 'English' : '繁體中文';
  };

  // Get language icon
  const getLanguageIcon = () => {
    return language === LANGUAGES.EN 
      ? '🇺🇸' // US flag for English
      : '🇹🇼'; // Taiwan flag for Traditional Chinese
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage,
      toggleLanguage, 
      getLanguageLabel,
      getLanguageIcon
    }}>
      {children}
    </LanguageContext.Provider>
  );
} 