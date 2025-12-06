'use client';

import Link from 'next/link';
import { useLocale } from '@/hooks/use-locale';
import { getTranslations } from '@/lib/i18n';

export function Footer() {
  const { locale } = useLocale();
  const t = getTranslations(locale);
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/services', label: t?.nav?.services },
    { href: '/products/ai-talent-orchestrator', label: t?.nav?.products },
    { href: '/contact', label: t?.nav?.contact }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ProtonAI
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm">
              {t?.footer?.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t?.footer?.quickLinks}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t?.contact?.info?.email}</h3>
            <a
              href="mailto:info@protonai.online"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              info@protonai.online
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} ProtonAI. {t?.footer?.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}