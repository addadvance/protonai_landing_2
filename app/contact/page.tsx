'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/ui/contact-form';
import { useLocale } from '@/hooks/use-locale';
import { getTranslations } from '@/lib/i18n';

export default function ContactPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

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
            className="text-center space-y-6 mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              {t?.contact?.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t?.contact?.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
            >
              <ContactForm translations={t?.contact?.form ?? {}} locale={locale} />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 border-2 border-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t?.contact?.info?.email}</h3>
                    <a
                      href="mailto:info@protonai.online"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      info@protonai.online
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 border-2 border-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t?.contact?.info?.address}</h3>
                    <p className="text-gray-400">{t?.contact?.info?.addressValue}</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-8">
                <p className="text-gray-300 leading-relaxed">
                  {locale === 'ru'
                    ? 'Мы работаем с клиентами по всему миру и готовы обсудить ваш проект в любое удобное для вас время. Отвечаем на все запросы в течение 24 часов.'
                    : 'We work with clients all over the world and are ready to discuss your project at any time convenient for you. We respond to all inquiries within 24 hours.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}