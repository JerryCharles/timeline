'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCookie, setCookie } from 'cookies-next';

export type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isClient: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [isClient, setIsClient] = useState(false);
  
  // Apply theme to document
  useEffect(() => {
    if (!isClient) return;
    
    const applyTheme = (themeValue: Theme) => {
      const isDark = 
        themeValue === 'dark' || 
        (themeValue === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    applyTheme(theme);
    
    // Listen for system preference changes when in auto mode
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('auto');
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, isClient]);
  
  // Initialize theme from cookie or default on client side
  useEffect(() => {
    setIsClient(true);
    const savedTheme = getCookie('theme') as Theme;
    
    if (savedTheme) {
      setThemeState(savedTheme);
    } else {
      // Default to auto
      setThemeState('auto');
      setCookie('theme', 'auto', { maxAge: 60 * 60 * 24 * 365 });
    }
  }, []);
  
  // Function to set theme and update cookie
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setCookie('theme', newTheme, { maxAge: 60 * 60 * 24 * 365 });
  };
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme, isClient }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 