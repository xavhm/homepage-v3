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
]
