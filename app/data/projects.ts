export interface PortfolioProject {
  slug: string
  key: string
  category: string
  title: string
  cardLabel: string
  description: string
  cover: string
  detailImages: [string, string]
  contextTitle: string
  contextText: string
  contributionTitle: string
  contributionText: string
}

export const projects: PortfolioProject[] = [
  {
    slug: 'youbook-tourism-commerce',
    key: 'youbook',
    category: 'E-commerce · Frontend architecture',
    title: 'Youbook — e-commerce for tourism destinations',
    cardLabel: 'Youbook: e-commerce frontend and embeddable Web Components',
    description:
      'A TypeScript and Vue 3 e-commerce product used by more than ten tourism destinations, with interfaces that can also be embedded in third-party sites.',
    contextTitle:
      'Booking activites and journeys across destination websites, with back-office workflows.',
    contextText:
      'Youbook serves tourism destinations with a web application and web components that can be integrated into WordPress and other sites. Marseille Tourism was its principal launch client.',
    contributionTitle: 'I have owned the frontend direction since the product’s inception.',
    contributionText:
      'I built the Vue 3 and TypeScript frontend and native Web Components, shaped component and technology choices, and worked with backend engineers on API contracts. My responsibilities also include accessibility, performance, tests, and documentation.',
    cover: '/portfolio/youbook1.jpg',
    detailImages: ['/portfolio/youbook2.jpg', '/portfolio/youbook3.jpg'],
  },
  {
    slug: 'internal-erp-workflows',
    key: 'internal-erp',
    category: 'Internal tools · Product engineering',
    title: 'Internal ERP — catalogue and invoicing workflows',
    cardLabel: 'Internal ERP: catalogue and invoicing workflows',
    description:
      'An internal product that brings Raccourci’s catalogue of products and services together with invoice-generation workflows for commercial teams.',
    contextTitle: 'Commercial teams needed a clearer path from product catalogue to invoice.',
    contextText:
      'The project brought business information and invoicing tasks into one internal system.',
    contributionTitle: 'I designed and delivered the product independently.',
    contributionText:
      'I translated the commercial workflow into an application, built the interfaces, and made the technical decisions needed for delivery.',
    cover: '/portfolio/erp_1.jpg',
    detailImages: ['/portfolio/erp_2.jpg', '/portfolio/erp_3.jpg'],
  },
  {
    slug: 'roadbook-tourism-platform',
    key: 'roadbook',
    category: 'Tourism · Frontend development',
    title: 'RoadBOOK — evolving an established tourism platform',
    cardLabel: 'RoadBOOK: frontend development for a tourism platform',
    description:
      'Frontend feature work and modernization for a production application used by more than 100 tourism destinations.',
    contextTitle:
      'An established product has to keep serving destinations as its frontend evolves.',
    contextText:
      'RoadBOOK is a production application used by more than 100 tourism destinations. Its existing interface needed ongoing feature development and a move toward a more maintainable frontend.',
    contributionTitle: 'I contributed features and helped modernize the frontend.',
    contributionText:
      'I built frontend features, worked on the transition from Vue 2 to Vue 3 and TypeScript, and helped improve interface consistency through reusable, accessible components.',
    cover: '/portfolio/roadbook_1.jpg',
    detailImages: ['/portfolio/roadbook_2.jpg', '/portfolio/roadbook_3.jpg'],
  },
  {
    slug: 'fairguest-review-platform',
    key: 'fairguest',
    category: 'Tourism · Online reputation',
    title: 'Fairguest — bringing tourism reviews together',
    cardLabel: 'Fairguest: frontend development for a tourism review platform',
    description:
      'Frontend work on a tourism product used by more than 50 destinations and aggregating reviews from more than 20 platforms.',
    contextTitle: 'Reviewing data from many sources needs a clear interface.',
    contextText:
      'Fairguest brings together information from more than 20 review platforms for tourism destinations. The product serves more than 50 destinations and has continued to evolve as a production application.',
    contributionTitle: 'I developed features and improved the frontend foundation.',
    contributionText:
      'I contributed frontend features, interface refactoring, and reusable, accessible components as part of the move from Vue 2 toward Vue 3 and TypeScript.',
    cover: '/portfolio/fairguest_1.jpg',
    detailImages: ['/portfolio/fairguest_2.jpg', '/portfolio/fairguest_3.jpg'],
  },
]
