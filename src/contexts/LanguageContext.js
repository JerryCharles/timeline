"use client";

import { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
export const LANGUAGES = {
  EN: 'en',
  CN: 'cn'
};

// Create the context
const LanguageContext = createContext();

// Create a provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(LANGUAGES.EN);
  const [hasUserChangedLanguage, setHasUserChangedLanguage] = useState(false);

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
      if (browserLang && (browserLang.toLowerCase().startsWith('zh') || browserLang.toLowerCase() === 'cn')) {
        console.log('Setting language to Chinese based on browser language');
        setLanguage(LANGUAGES.CN);
      } else {
        // Default to English for all other languages
        console.log('Setting language to English based on browser language');
        setLanguage(LANGUAGES.EN);
      }
    } catch (error) {
      console.error('Error detecting browser language:', error);
      // Default to English if there's an error
      setLanguage(LANGUAGES.EN);
    }
  };

  // Toggle between languages
  const toggleLanguage = () => {
    const newLanguage = language === LANGUAGES.EN ? LANGUAGES.CN : LANGUAGES.EN;
    setLanguage(newLanguage);
    setHasUserChangedLanguage(true);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
      console.log('Saved language preference to localStorage:', newLanguage);
    }
  };

  // Get language label
  const getLanguageLabel = () => {
    return language === LANGUAGES.EN ? 'English' : '中文';
  };

  // Get language icon
  const getLanguageIcon = () => {
    return language === LANGUAGES.EN ? '🇺🇸' : '🇨🇳';
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, getLanguageLabel, getLanguageIcon }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 