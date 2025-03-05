"use client";

import { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
export const LANGUAGES = {
  EN: 'en',
  ZH_TW: 'zh-TW'  // Changed from CN to ZH_TW with proper locale code
};

// Create the context
const LanguageContext = createContext();

// Create a provider component
export function LanguageProvider({ children, initialLanguage }) {
  const [language, setLanguage] = useState(initialLanguage || LANGUAGES.EN);
  const [hasUserChangedLanguage, setHasUserChangedLanguage] = useState(!!initialLanguage);

  // Initialize language from localStorage or detect browser language
  useEffect(() => {
    // Check if we're in a browser environment (to avoid SSR issues)
    if (typeof window !== 'undefined') {
      // First check if there's a saved preference in localStorage
      const savedLanguage = localStorage.getItem('language');
      
      if (savedLanguage) {
        console.log('Using saved language preference:', savedLanguage);
        setLanguage(savedLanguage);
        setHasUserChangedLanguage(true);
      } else if (!hasUserChangedLanguage) {
        // If no saved preference, detect browser language
        detectBrowserLanguage();
      }
    }
  }, [hasUserChangedLanguage]);

  // Function to detect browser language
  const detectBrowserLanguage = () => {
    try {
      // Get browser language
      const browserLang = navigator.language || navigator.userLanguage;
      console.log('Detected browser language:', browserLang);
      
      // Check if it's Chinese
      if (browserLang && (browserLang.toLowerCase().startsWith('zh'))) {
        console.log('Setting language to Traditional Chinese based on browser language');
        setLanguage(LANGUAGES.ZH_TW);
      } else {
        // Default to English for all other languages
        console.log('Setting language to English based on browser language');
        setLanguage(LANGUAGES.EN);
      }
    } catch (error) {
      console.error('Error detecting browser language:', error);
      // Default to English in case of error
      setLanguage(LANGUAGES.EN);
    }
  };

  // Toggle between languages
  const toggleLanguage = () => {
    const newLanguage = language === LANGUAGES.EN ? LANGUAGES.ZH_TW : LANGUAGES.EN;
    setLanguage(newLanguage);
    setHasUserChangedLanguage(true);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
      console.log('Saved language preference:', newLanguage);
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

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 