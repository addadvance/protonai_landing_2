'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Target } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';
import { getTranslations } from '@/lib/i18n';

export default function CasesPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  // EDIT: Здесь добавьте реальные кейсы
  const cases = [
    {
      slug: 'tech-company-hr',
      titleRu: 'IT-компания: сокращение времени найма на 40%',
      titleEn: 'Tech Company: 40% Reduction in Hiring Time',
      descriptionRu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      descriptionEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      metrics: [
        { labelRu: 'Сокращение времени найма', labelEn: 'Hiring time reduction', value: '40%', icon: TrendingUp },
        { labelRu: 'Вакансий обработано', labelEn: 'Vacancies processed', value: '150+', icon: Users },
        { labelRu: 'Удовлетворенность HR', labelEn: 'HR satisfaction', value: '95%', icon: Target }
      ]
    },
    {
      slug: 'ecommerce-sales',
      titleRu: 'E-commerce: увеличение конверсии на 65%',
      titleEn: 'E-commerce: 65% Conversion Increase',
      descriptionRu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      descriptionEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      metrics: [
        { labelRu: 'Рост конверсии', labelEn: 'Conversion growth', value: '65%', icon: TrendingUp },
        { labelRu: 'Лидов сгенерировано', labelEn: 'Leads generated', value: '3,500+', icon: Users },
        { labelRu: 'ROI', labelEn: 'ROI', value: '320%', icon: Target }
      ]
    },
    {
      slug: 'b2c-visibility',
      titleRu: 'B2C сервис: увеличение AI-видимости на 80%',
      titleEn: 'B2C Service: 80% AI Visibility Increase',
      descriptionRu: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      descriptionEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      metrics: [
        { labelRu: 'Рост AI-видимости', labelEn: 'AI visibility growth', value: '80%', icon: TrendingUp },
        { labelRu: 'Трафик из AI-поиска', labelEn: 'AI search traffic', value: '45%', icon: Users },
        { labelRu: 'Органический трафик', labelEn: 'Organic traffic', value: '+120%', icon: Target }
      ]
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
              {t?.cases?.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t?.cases?.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((caseStudy, index) => (
              <motion.article
                key={caseStudy.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="p-8 space-y-6">
                  {/* Title & Description */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">
                      {locale === 'ru' ? caseStudy.titleRu : caseStudy.titleEn}
                    </h2>
                    <p className="text-gray-400 text-lg">
                      {locale === 'ru' ? caseStudy.descriptionRu : caseStudy.descriptionEn}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudy.metrics.map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center space-y-3"
                        >
                          <Icon size={32} className="text-cyan-400 mx-auto" />
                          <p className="text-3xl font-bold text-white">{metric.value}</p>
                          <p className="text-sm text-gray-400">
                            {locale === 'ru' ? metric.labelRu : metric.labelEn}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* View Case - Coming Soon */}
                  <div className="inline-flex items-center space-x-2 text-gray-500 font-medium">
                    <span>{t?.cases?.viewCase} (\u0421\u043a\u043e\u0440\u043e)</span>
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