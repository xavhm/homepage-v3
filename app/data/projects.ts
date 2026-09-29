export interface PortfolioProject {
  slug: string
  key: string
  category: string
  dates: string
  title: string
  description: string
  cover: string
  detailImages: [string, string]
  conceptTitle: string
  conceptText: string
  executionTitle: string
  executionText: string
}

export const projects: PortfolioProject[] = [
  {
    slug: 'orbit-saas-brand-experience',
    key: 'orbit',
    category: 'Branding',
    dates: 'Feb 1st – Mar 10th',
    title: 'Orbit - SaaS Brand Experience',
    description:
      'Orbit was created as a brand identity project focused on crafting bold and cohesive visual assets across digital and physical touchpoints.',
    cover: '/portfolio/orbit-cover.avif',
    detailImages: ['/portfolio/orbit-detail-1.avif', '/portfolio/orbit-detail-2.avif'],
    conceptTitle:
      'Petronex was imagined as a visual system that brings consistency and impact to modern brand communication.',
    conceptText:
      'The goal was to design a strong and flexible identity that works across multiple mediums, from logos to large-scale billboards. The concept focused on clarity, bold typography, and a balanced visual language to ensure strong brand recognition.',
    executionTitle:
      'The design approach for Astra combined bold visuals with a structured and scalable system.',
    executionText:
      'A cohesive set of brand assets was developed, including logo variations, color systems, and layout guidelines. Each element was designed to maintain consistency across print and digital formats, ensuring adaptability for campaigns and real-world applications.',
  },
  {
    slug: 'nova-brand-identity',
    key: 'nova',
    category: 'Food & Beverage',
    dates: 'Jan 20th – Feb 25th',
    title: 'Nova™ Brand Identity',
    description:
      'Nova™ was crafted as a modern logo and visual identity system designed to strengthen brand recognition while creating a memorable and consistent presence across digital and print applications.',
    cover: '/portfolio/nova-cover.avif',
    detailImages: ['/portfolio/nova-detail-1.avif', '/portfolio/nova-detail-2.avif'],
    conceptTitle:
      'The identity was envisioned to create a distinctive and recognizable brand presence across every customer touchpoint.',
    conceptText:
      "The identity was developed to communicate clarity, innovation, and trust through a simple yet distinctive visual language. The goal was to create a timeless logo that scales effortlessly across different touchpoints while reflecting the brand's personality and values.",
    executionTitle:
      'The design approach combined strategic thinking with a refined visual identity system.',
    executionText:
      'The design process combined strategic thinking with refined visual exploration. Multiple logo concepts, typography systems, and color palettes were evaluated before developing a cohesive identity. The final brand system includes logo variations, spacing guidelines, iconography, and supporting visual elements to ensure consistency across all brand materials.',
  },
  {
    slug: 'finova-finance-app',
    key: 'finova',
    category: 'FinTech / Personal Finance',
    dates: 'Jan 10th – Mar 2nd',
    title: 'Finova Finance App',
    description:
      'Finova Finance App was designed as a modern financial platform that simplifies money management through a clean and structured interface.',
    cover: '/portfolio/finova-cover.avif',
    detailImages: ['/portfolio/finova-detail-1.avif', '/portfolio/finova-detail-2.avif'],
    conceptTitle:
      'Velto was imagined as a finance product focused on simplifying how users interact with financial data.',
    conceptText:
      'The vision was to design a platform that feels intuitive and reliable, helping users track spending and manage finances without friction. Inspired by minimal design principles, the system focuses on clarity, balance, and usability while turning complex data into simple insights.',
    executionTitle:
      'The design approach for Velto combined minimalism with structured data presentation.',
    executionText:
      'A clean and consistent UI system was developed with modular components and flexible layouts. A neutral color palette with subtle highlights was used to guide attention, while dashboards and charts were designed to present financial data in a clear and accessible way.',
  },
  {
    slug: 'lunex-website-redesign',
    key: 'lunex',
    category: 'Technology',
    dates: 'Mar 1st – Apr 12th',
    title: 'Lunex Website Redesign',
    description:
      'Lunex Website Redesign focused on improving usability and visual clarity through a modern and structured web experience.',
    cover: '/portfolio/lunex-cover.avif',
    detailImages: ['/portfolio/lunex-detail-1.avif', '/portfolio/lunex-detail-2.avif'],
    conceptTitle:
      'Fasonex was reimagined as a cleaner and more intuitive platform built around user-focused navigation.',
    conceptText:
      'The goal was to simplify the browsing experience while enhancing visual hierarchy and content structure. The concept focused on clear layouts, improved content flow, and a modern interface to help users find information faster and interact with ease.',
    executionTitle:
      'The redesign approach focused on structure, consistency, and improved interaction design.',
    executionText:
      'A refreshed UI system was developed with scalable components and responsive layouts. Typography, spacing, and visual hierarchy were refined to improve readability, while interactions were optimized to create a smoother and more engaging user experience across devices.',
  },
  {
    slug: 'lumina-brand-design',
    key: 'lumina',
    category: 'Technology / SaaS',
    dates: 'Feb 12th – Mar 22nd',
    title: 'Lumina - Brand Design',
    description:
      'CloudZero is a brand design project focused on creating a modern and scalable identity for a cloud-based platform.',
    cover: '/portfolio/lumina-cover.avif',
    detailImages: ['/portfolio/lumina-detail-1.avif', '/portfolio/lumina-detail-2.avif'],
    conceptTitle:
      'CloudZero was envisioned as a clean and future-ready brand built around clarity and digital reliability.',
    conceptText:
      'The goal was to create a visual identity that reflects simplicity and innovation. The concept focused on minimal forms, soft color tones, and a balanced system to communicate trust, scalability, and modern technology.',
    executionTitle:
      'The design approach focused on building a flexible and consistent visual system.',
    executionText:
      'A complete brand identity was developed, including logo, typography, color system, and layout guidelines. Each element was designed to work seamlessly across digital products, marketing assets, and brand communications.',
  },
  {
    slug: 'ohio-branding',
    key: 'ohio',
    category: 'Branding',
    dates: 'Mar 5th – Apr 18th',
    title: 'Ohio™ Branding',
    description:
      'Ohio™ was designed as a modern and versatile brand identity, crafted to create a bold, memorable presence across both digital and physical touchpoints.',
    cover: '/portfolio/ohio-cover.avif',
    detailImages: ['/portfolio/ohio-detail-1.avif', '/portfolio/ohio-detail-2.avif'],
    conceptTitle:
      'Ohio™ was envisioned as a bold and modern brand identity, designed to create a seamless visual presence across digital and physical experiences.',
    conceptText:
      'The goal was to craft a brand identity that feels modern, consistent, and instantly recognizable across every touchpoint. The concept focused on simplicity, clarity, and versatility—creating a visual system that communicates confidence while remaining adaptable across digital and print applications.',
    executionTitle:
      'The design approach for Ohio™ focused on consistency, flexibility, and a strong visual identity across every brand touchpoint.',
    executionText:
      'A scalable brand identity system was created to support both digital and print applications. Visual elements were designed for flexibility, while the overall style was structured to maintain consistency across different formats and brand touchpoints.',
  },
]
