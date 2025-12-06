'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import { getTranslations } from '@/lib/i18n';

export default function BlogPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  // EDIT: Здесь добавьте реальные статьи
  const articles = [
    {
      slug: 'ai-transformation-guide',
      titleRu: 'Полное руководство по AI-трансформации бизнеса',
      titleEn: 'Complete Guide to AI Business Transformation',
      excerptRu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      excerptEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2025-12-01',
      readTime: '10 min'
    },
    {
      slug: 'hr-automation-trends',
      titleRu: 'Тренды автоматизации HR-процессов с AI',
      titleEn: 'Trends in HR Process Automation with AI',
      excerptRu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      excerptEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2025-11-28',
      readTime: '8 min'
    },
    {
      slug: 'ai-search-optimization',
      titleRu: 'Оптимизация сайта под AI-поиск: практическое руководство',
      titleEn: 'Website Optimization for AI Search: Practical Guide',
      excerptRu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      excerptEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2025-11-25',
      readTime: '12 min'
    }
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-gray-950 to-purple-500/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              {t?.blog?.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t?.blog?.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="p-6 space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white line-clamp-2">
                    {locale === 'ru' ? article.titleRu : article.titleEn}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 line-clamp-3">
                    {locale === 'ru' ? article.excerptRu : article.excerptEn}
                  </p>

                  {/* Read More - Coming Soon */}
                  <div className="inline-flex items-center space-x-2 text-gray-500 font-medium text-sm">
                    <span>{t?.blog?.readMore} (\u0421\u043a\u043e\u0440\u043e)</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}