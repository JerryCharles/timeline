"use client";

// Remove the LanguageProvider import since it's already provided in layout.js
// import { LanguageProvider } from '../contexts/LanguageContext';

export default function ClientProvider({ children }) {
  return (
    // Just return the children directly
    <>{children}</>
  );
} 