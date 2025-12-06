// i18n utility functions
import { ru } from '@/locales/ru';
import { en } from '@/locales/en';

export type Locale = 'ru' | 'en';

const translations = { ru, en };

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.ru;
}

export const locales: Locale[] = ['ru', 'en'];
export const defaultLocale: Locale = 'ru';