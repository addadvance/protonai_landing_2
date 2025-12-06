'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  slug: string;
  icon: string;
  color: string;
  ctaText: string;
}

export function ProductCard({ title, description, slug, icon, color, ctaText }: ProductCardProps) {
  const IconComponent = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.Box;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 217, 255, 0.15)' }}
      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
      >
        <IconComponent size={28} style={{ color }} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 line-clamp-3">{description}</p>

      {/* CTA Button */}
      <Link
        href={`/products/${slug}`}
        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors group/link"
      >
        <span>{ctaText}</span>
        <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
      </Link>
    </motion.div>
  );
}