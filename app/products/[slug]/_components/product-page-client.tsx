'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useLocale } from '@/hooks/use-locale';
import { getTranslations } from '@/lib/i18n';

interface ProductPageClientProps {
  product: Product;
}

export function ProductPageClient({ product }: ProductPageClientProps) {
  const { locale } = useLocale();
  const t = getTranslations(locale);
  const IconComponent = (Icons[product.icon as keyof typeof Icons] as LucideIcon) || Icons.Box;

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
            className="max-w-4xl space-y-8"
          >
            {/* Icon */}
            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${product.color}20`, border: `3px solid ${product.color}` }}
            >
              <IconComponent size={40} style={{ color: product.color }} />
            </div>

            {/* Title & Description */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-white">
                {locale === 'ru' ? product.titleRu : product.titleEn}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                {locale === 'ru' ? product.descriptionRu : product.descriptionEn}
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              <span>{t?.products?.getStarted}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Features List */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t?.products?.features}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(locale === 'ru' ? product.featuresRu : product.featuresEn).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${product.color}30` }}
                      >
                        <Check size={16} style={{ color: product.color }} />
                      </div>
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{t?.products?.targetAudience}</h2>
              <p className="text-xl text-gray-400">
                {locale === 'ru' ? product.targetAudienceRu : product.targetAudienceEn}
              </p>
            </div>
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
              {locale === 'ru' ? 'Готовы начать?' : 'Ready to get started?'}
            </h2>
            <p className="text-lg text-gray-400">
              {locale === 'ru'
                ? 'Свяжитесь с нами, чтобы узнать больше о продукте и начать использование'
                : 'Contact us to learn more about the product and get started'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
            >
              <span>{t?.hero?.cta}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.titleEn,
            "description": product.descriptionEn,
            "brand": {
              "@type": "Organization",
              "name": "ProtonAI"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/PreOrder",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </div>
  );
}