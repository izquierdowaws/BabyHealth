"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the shape of our translation object
interface Translations {
  [key: string]: any;
}

// Default locale
const DEFAULT_LOCALE = 'es';

// Context type
interface I18nContextType {
  t: (key: string) => any;
  locale: string;
  setLocale: (locale: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Create context
const I18nContext = createContext<I18nContextType>({
  t: () => null,
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Load translations dynamically
const loadTranslations = async (locale: string): Promise<Translations> => {
  try {
    const messages = await import(`@/locales/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    // Fallback to default locale
    if (locale !== DEFAULT_LOCALE) {
      return loadTranslations(DEFAULT_LOCALE);
    }
    return {} as Translations;
  }
};

// Provider component
export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [translations, setTranslations] = useState<Translations>({});
  const [locale, setLocale] = useState<string>(DEFAULT_LOCALE); // Default to Spanish
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Default to light mode

  // Initialize locale from localStorage or navigator on client only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('locale');
      if (stored) {
        setLocale(stored);
      } else {
        setLocale(navigator.language.startsWith('en') ? 'en' : 'es');
      }
    }
  }, []); // Run once on mount

  // Initialize theme from localStorage or prefers-color-scheme on client only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        setIsDarkMode(stored === 'dark');
      } else {
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    }
  }, []); // Run once on mount

  // Load translations when locale changes
  useEffect(() => {
    let mounted = true;
    loadTranslations(locale).then((msg) => {
      if (mounted) {
        setTranslations(msg);
        // Save to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('locale', locale);
        }
      }
    });
    return () => {
      mounted = false;
    };
  }, [locale]);

  // Update HTML attributes when locale or dark mode changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Set language attribute
      document.documentElement.lang = locale === 'en' ? 'en-US' : 'es-ES';
      // Set dark mode class
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      // Save theme preference
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      }
    }
  }, [locale, isDarkMode]);

  // Translation function
  const t = (key: string): any => {
    return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : null), translations) || key;
  };

  const value = {
    t,
    locale,
    setLocale: (newLocale: string) => setLocale(newLocale),
    isDarkMode,
    toggleDarkMode: () => setIsDarkMode(prev => !prev),
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

// Custom hook to use translations
export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export default I18nContext;