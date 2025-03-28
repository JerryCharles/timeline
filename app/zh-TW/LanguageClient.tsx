'use client';

import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ChineseClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setLanguage, isClient } = useLanguage();

  // Only update the cookie, don't redirect
  useEffect(() => {
    if (isClient) {
      setLanguage('zh-TW');
    }
  }, [isClient, setLanguage]);

  return children;
} 