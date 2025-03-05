'use client';

import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function LanguageLayoutClient({ children, lang }) {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage(lang);
  }, [lang, setLanguage]);
  
  return children;
} 