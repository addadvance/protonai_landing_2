'use client';

import { motion } from 'framer-motion';
import { Brain, Workflow, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from '@/hooks/use-locale';
import { getTranslations } from '@/lib/i18n';

export default function ServicesPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const services = [
    {
      icon: Brain,
      title: t?.services?.consulting?.title,
      description: t?.services?.consulting?.description,
      color: '#3B82F6'
    },
    {
      icon: Workflow,
      title: t?.services?.orchestration?.title,
      description: t?.services?.orchestration?.description,
      color: '#10B981'
    },
    {
      icon: Zap,
      title: t?.services?.construction?.title,
      description: t?.services?.construction?.description,
      color: '#8B5CF6'
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
            className="text-center space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              {t?.services?.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t?.services?.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ y: -10, boxShadow: `0 20px 40px ${service.color}20` }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}20`, border: `2px solid ${service.color}` }}
                  >
                    <Icon size={32} style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Integrate Products */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {locale === 'ru'
                ? 'Как мы встраиваем продукты в процессы клиента'
                : 'How we integrate products into client processes'}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              {locale === 'ru'
                ? 'Мы не просто продаем продукты — мы анализируем ваши бизнес-процессы, находим точки роста и внедряем AI-решения так, чтобы они работали как естественная часть вашей экосистемы. AI Talent Orchestrator становится частью HR-процесса, AI Sales Hunter — частью отдела продаж, а AI Visibility Scanner помогает маркетингу оптимизировать видимость в AI-поиске.'
                : "We don't just sell products — we analyze your business processes, find growth points and implement AI solutions so that they work as a natural part of your ecosystem. AI Talent Orchestrator becomes part of the HR process, AI Sales Hunter — part of the sales department, and AI Visibility Scanner helps marketing optimize visibility in AI search."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-12 text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {locale === 'ru' ? 'Обсудите ваш проект с нами' : 'Discuss your project with us'}
            </h2>
            <p className="text-lg text-gray-400">
              {locale === 'ru'
                ? 'Расскажите о ваших задачах, и мы предложим оптимальное решение'
                : 'Tell us about your challenges and we will offer the best solution'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
            >
              <span>{t?.services?.cta}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}