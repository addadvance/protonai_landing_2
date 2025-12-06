'use client';

import { useState, useEffect } from 'react';
import { Locale } from '@/lib/i18n';

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>('ru');

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage?.getItem?.('locale') as Locale;
    if (saved && (saved === 'ru' || saved === 'en')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage?.setItem?.('locale', newLocale);
  };

  return { locale, setLocale };
}