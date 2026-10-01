export interface ExperienceEntry {
  startDate: string
  endDate: string
  location: string
  position: string
  organization: string
  description: string
}

export const experienceGroups: { title: string; entries: ExperienceEntry[] }[] = [
  {
    title: 'Professional experience',
    entries: [
      {
        startDate: '2021-11',
        endDate: 'Present',
        location: 'La Rochelle, France',
        position: 'Frontend Developer — Frontend Technical Owner',
        organization: 'Raccourci Agency',
        description:
          "Own frontend technical direction for TypeScript and Vue.js applications, including architecture, technology selection, component strategy, accessibility, performance, testing, and documentation. Built Youbook's frontend and embeddable Web Components from inception, delivered an internal ERP for catalogue and invoicing workflows, and developed interfaces for AI-powered classification. Collaborate with backend engineers on API contracts and backlog priorities.",
      },
      {
        startDate: '2010-07',
        endDate: '2019-09',
        location: 'Paris, France',
        position: 'Live Operations Manager',
        organization: 'Winamax',
        description:
          'Managed planning and live operations for online poker games, promotions, and events, including prize pools and liquidity. Analyzed product performance, ran A/B tests, designed engagement mechanics, and coordinated product, engineering, analytics, marketing, creative, and support teams.',
      },
      {
        startDate: '2009-08',
        endDate: '2010-07',
        location: 'London, United Kingdom',
        position: 'Marketing Coordinator',
        organization: 'Winamax',
        description:
          'Supported localization and launch of online-gaming products for the French market. Created promotional content and coordinated offers and product launches with B2B partners and internal teams.',
      },
    ],
  },
]
