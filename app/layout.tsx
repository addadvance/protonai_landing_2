import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'ProtonAI - AI-Архитектура для роста бизнеса',
  description: 'Готовые AI-продукты и оркестрация решений. Сокращаем издержки через AI-first подход.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  },
  openGraph: {
    title: 'ProtonAI - AI-Архитектура для роста бизнеса',
    description: 'Готовые AI-продукты и оркестрация решений. Сокращаем издержки через AI-first подход.',
    images: ['/og-image.png'],
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ProtonAI",
              "url": "https://protonai.online",
              "logo": "https://www.supplyht.com/ext/resources/2025/07/09/Proton.ai-launches-Pronto-AI-assistant-tackling-sales-admin-for-distributors.jpg?height=635&t=1752077919&width=1200",
              "description": "AI-архитектура для роста бизнеса. Готовые AI-продукты и оркестрация решений.",
              "email": "info@protonai.online",
              "foundingDate": "2024",
              "sameAs": [
                "https://github.com/addadvance/protonai_landing_2"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}