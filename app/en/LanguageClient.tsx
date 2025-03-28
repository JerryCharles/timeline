'use client';

import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function EnglishClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setLanguage, isClient } = useLanguage();

  // Only update the cookie, don't redirect
  useEffect(() => {
    if (isClient) {
      setLanguage('en');
    }
  }, [isClient, setLanguage]);

  return children;
} 