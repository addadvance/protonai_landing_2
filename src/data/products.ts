// Конфигурация продуктов ProtonAI
// EDIT: Здесь описания всех продуктов. Править тут, чтобы изменить контент на сайте

export interface Product {
  slug: string;
  titleRu: string;
  titleEn: string;
  shortDescRu: string;
  shortDescEn: string;
  descriptionRu: string;
  descriptionEn: string;
  featuresRu: string[];
  featuresEn: string[];
  targetAudienceRu: string;
  targetAudienceEn: string;
  icon: string;
  color: string;
}

export const products: Product[] = [
  {
    slug: 'ai-talent-orchestrator',
    titleRu: 'AI Talent Orchestrator',
    titleEn: 'AI Talent Orchestrator',
    shortDescRu: 'HR-ассистент для выстраивания работы по поиску и найму сотрудников',
    shortDescEn: 'HR assistant for building recruitment and hiring workflows',
    descriptionRu: 'Приложение для выстраивания работы по поиску и найму сотрудников с быстрым онбордингом и встроенным агентом по обработке входящих резюме для мэтчинга. Это не поиск персонала, а подготовка вакансий, внутренняя документация по должности (описания, инструкции для быстрого онбординга) и аналитика по входящим резюме от разных сервисов на базе LLM.',
    descriptionEn: 'An application for building recruitment and hiring workflows with fast onboarding and a built-in agent for processing incoming resumes for matching. This is not personnel search, but vacancy preparation, internal job documentation (descriptions, instructions for quick onboarding) and analytics on incoming resumes from various services based on LLM.',
    featuresRu: [
      'Быстрый онбординг новых вакансий',
      'Встроенный AI-агент для мэтчинга резюме',
      'Подготовка вакансий и должностных инструкций',
      'Внутренняя документация по должностям',
      'LLM-аналитика входящих резюме от разных платформ',
      'Автоматизация рутинных HR-процессов'
    ],
    featuresEn: [
      'Fast onboarding of new vacancies',
      'Built-in AI agent for resume matching',
      'Vacancy and job description preparation',
      'Internal job documentation',
      'LLM analytics of incoming resumes from different platforms',
      'Automation of routine HR processes'
    ],
    targetAudienceRu: 'HR-отделы средних и крупных компаний, рекрутинговые агентства',
    targetAudienceEn: 'HR departments of medium and large companies, recruitment agencies',
    icon: 'users',
    color: '#3B82F6'
  },
  {
    slug: 'ai-sales-hunter',
    titleRu: 'AI Sales Hunter',
    titleEn: 'AI Sales Hunter',
    shortDescRu: 'AI-виджет для увеличения конверсии посетителей сайтов в лиды',
    shortDescEn: 'AI widget to increase website visitor to lead conversion',
    descriptionRu: 'AI-виджет для увеличения конверсии посетителей сайтов в лиды с SDR-функционалом 24/7. В дальнейшем развитие в продажи с развитием продукта как агента. Встраивается на любой сайт и автоматически квалифицирует лиды, отвечает на вопросы и передает горячие лиды в отдел продаж.',
    descriptionEn: 'AI widget to increase website visitor to lead conversion with 24/7 SDR functionality. Further development into sales with product evolution as an agent. Integrates into any website and automatically qualifies leads, answers questions and passes hot leads to the sales department.',
    featuresRu: [
      'SDR-функционал 24/7 без перерывов',
      'Автоматическая квалификация лидов',
      'Интеллектуальные ответы на вопросы посетителей',
      'Передача горячих лидов в CRM',
      'Мультиязычная поддержка',
      'Аналитика эффективности конверсий'
    ],
    featuresEn: [
      '24/7 SDR functionality without breaks',
      'Automatic lead qualification',
      'Intelligent answers to visitor questions',
      'Hot lead transfer to CRM',
      'Multilingual support',
      'Conversion performance analytics'
    ],
    targetAudienceRu: 'B2B и B2C компании с активными продажами через сайт',
    targetAudienceEn: 'B2B and B2C companies with active sales through website',
    icon: 'target',
    color: '#10B981'
  },
  {
    slug: 'ai-visibility-scanner',
    titleRu: 'AI Visibility Scanner',
    titleEn: 'AI Visibility Scanner',
    shortDescRu: 'Сервис по оптимизации сайтов под AI-поиск (лид-магнит продукт)',
    shortDescEn: 'Website optimization service for AI search (lead magnet product)',
    descriptionRu: 'Лид-магнит продукт для оптимизации сайтов под AI-поиск с freemium моделью. Бесплатно: оценка 1-2 страниц сайта на видимость, онлайн отчет. Платно: PDF отчет, генерация файлов (schema.org разметка и т.п.), подписка на регулярный аудит и обновление файлов. Целевая аудитория: e-commerce, B2C сервисы. Эти файлы станут основой для агентов продаж клиентов.',
    descriptionEn: 'Lead magnet product for website optimization for AI search with freemium model. Free: assessment of 1-2 site pages for visibility, online report. Paid: PDF report, file generation (schema.org markup, etc.), subscription to regular audit and file updates. Target audience: e-commerce, B2C services. These files will become the basis for customer sales agents.',
    featuresRu: [
      'Бесплатная оценка 1-2 страниц сайта',
      'Онлайн отчет по видимости в AI-поиске',
      'Генерация schema.org разметки',
      'PDF отчеты с детальным анализом',
      'Регулярный аудит и обновление файлов',
      'Оптимизация для ChatGPT, Claude, Perplexity'
    ],
    featuresEn: [
      'Free assessment of 1-2 site pages',
      'Online AI search visibility report',
      'Schema.org markup generation',
      'PDF reports with detailed analysis',
      'Regular audit and file updates',
      'Optimization for ChatGPT, Claude, Perplexity'
    ],
    targetAudienceRu: 'E-commerce компании, B2C сервисы, digital-агентства',
    targetAudienceEn: 'E-commerce companies, B2C services, digital agencies',
    icon: 'search',
    color: '#8B5CF6'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map(p => p.slug);
}