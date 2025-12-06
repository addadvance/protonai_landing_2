'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';
import { useLocale } from '@/hooks/use-locale';
import { getTranslations } from '@/lib/i18n';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const navLinks = [
    { href: '/', label: t?.nav?.home },
    { href: '/services', label: t?.nav?.services },
    { href: '/products/ai-talent-orchestrator', label: t?.nav?.products },
    { href: '/blog', label: t?.nav?.blog },
    { href: '/cases', label: t?.nav?.cases },
    { href: '/contact', label: t?.nav?.contact }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="ProtonAI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white">ProtonAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}