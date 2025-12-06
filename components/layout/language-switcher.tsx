'use client';

import { useLocale } from '@/hooks/use-locale';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-md">
      <Globe size={16} className="text-gray-400" />
      <button
        onClick={() => setLocale('ru')}
        className={`text-sm font-medium transition-colors ${
          locale === 'ru' ? 'text-cyan-400' : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        RU
      </button>
      <span className="text-gray-600">|</span>
      <button
        onClick={() => setLocale('en')}
        className={`text-sm font-medium transition-colors ${
          locale === 'en' ? 'text-cyan-400' : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        EN
      </button>
    </div>
  );
}