# Website content — Xavier Hernandez-Martinez

Proposed English copy for the portfolio, organized by where it appears. Editing this file does **not** update the website. Component paths identify the current template; new or renamed sections require implementation. Career facts come from `career_direction_summary.md`, `english_linkedin.md`, and `english_resume.md`.

## Shared header

Source: `app/components/SiteHeader.vue`. Appears on all pages.

- Local time: live clock in the `Europe/Paris` time zone
- Location: `La Rochelle, France`
- Navigation: `Home`, `About`, `Projects`, `Work`, `Contact`
- Navigation accessibility label: `Main navigation`
- Social group accessibility label: `Social links`
- Social links: `LinkedIn` → `https://www.linkedin.com/in/xavhm/`; `Email` → `mailto:xhernan.martinez@gmail.com`
- Remove placeholder X, Dribbble, and Behance links.

## Homepage `/`

SEO source: `app/pages/index.vue`.

- Page title: `Xavier Hernandez-Martinez — Frontend & Product Engineer`
- Meta description: `Frontend engineer and technical owner building TypeScript and Vue.js products, with a decade of product operations experience. Based in La Rochelle, France.`

### Hero

Source: `app/components/HeroSection.vue`.

- Availability badge: `Open to senior frontend and product engineering roles`
- Profile name: `Xavier Hernandez-Martinez`
- Rotating roles: `Frontend Engineer`, `Product Engineer`, `Frontend Technical Owner`
- Headline: `I build web products with engineering depth and product judgment.`
- Supporting paragraph: `I lead frontend architecture and delivery for production applications. Before engineering, I spent ten years in product operations, so I connect technical decisions to user needs and business constraints.`
- Primary button: `Get in touch` → `#contact`
- Secondary button: `Explore my work` → `#projects`
- Profile image alt text: `Portrait of Xavier Hernandez-Martinez` (only if the image is actually Xavier)
- Remove the `Trusted by 30+ Brands` line and placeholder logos; those endorsements are unsupported.

### About

Source: `app/components/AboutSection.vue`.

- Section label: `About`
- Introduction: `I’m Xavier, a frontend engineer and technical owner based in La Rochelle. At Raccourci Agency, I shape frontend architecture and build TypeScript and Vue.js applications for tourism teams. I work across reusable components, accessibility, performance, testing, API contracts, and product decisions.`
- Follow-up: `My earlier decade at Winamax taught me to weigh user behavior, operational constraints, and commercial outcomes alongside the code. I’m interested in roles where I can help shape both the product and its technical direction, including AI-powered experiences. My applied AI work includes interfaces for classification features; I’m continuing to develop my expertise in agentic systems and UX.`
- Email: `xhernan.martinez@gmail.com` → `mailto:xhernan.martinez@gmail.com`
- Phone: `+33 6 26 09 19 66` → `tel:+33626091966`
- CV link text: `Download CV` (connect to a published, current resume file)
- If the layout needs a statistics strip, replace the template figures with:
  - `Nearly 5 years` — `Building production web applications`
  - `10 years` — `In product operations at Winamax`
  - `10+ destinations` — `Use the Youbook product`
- The destination count describes product adoption, not an outcome attributable solely to Xavier.

### Featured projects

Source: `app/components/ProjectsSection.vue`, with cards from `app/data/projects.ts`.

- Heading: `Selected work`
- Subtitle: `Products and technical challenges that show how I connect frontend engineering with operational needs.`
- Cards, in order: Youbook, Internal ERP, RoadBOOK, Fairguest. See [Project copy](#project-copy).
- The hero's `Explore my work` link jumps to this section.
- Show case-study and preview links only where a real, approved destination exists.

### Expertise

Replace the design-agency Services section (`app/components/ServicesSection.vue`) with areas of practice. These do not imply freelance availability.

- Heading: `What I bring to a product team`
- Subtitle: `Hands-on frontend ownership, grounded in product operations and delivery.`
- `01`: `Frontend architecture` — `TypeScript, Vue.js, React, reusable components, Web Components`
- `02`: `Product engineering` — `Business workflows, prioritization, API contracts, technical trade-offs`
- `03`: `Web quality` — `Accessibility, Core Web Vitals, Vitest, Playwright`
- `04`: `AI-powered interfaces` — `User interfaces and component systems for classification features`

### Work

New homepage section, preferably after Projects or About, with a `#work` anchor. Display professional experience and education in separate groups, each in reverse chronological order. Every entry has `startDate`, `endDate`, `location`, `position` (job title or qualification), `organization`, and `description`.

#### Professional experience

**Raccourci Agency**

- `startDate`: `2021-11`
- `endDate`: `Present`
- `location`: `La Rochelle, France`
- `position`: `Frontend Developer — Frontend Technical Owner`
- `organization`: `Raccourci Agency`
- `description`: `Own frontend technical direction for TypeScript and Vue.js applications, including architecture, technology selection, component strategy, accessibility, performance, testing, and documentation. Built Youbook's frontend and embeddable Web Components from inception, delivered an internal ERP for catalogue and invoicing workflows, and developed interfaces for AI-powered classification. Collaborate with backend engineers on API contracts and backlog priorities.`

**Winamax**

- `startDate`: `2010-07`
- `endDate`: `2019-09`
- `location`: `Paris, France`
- `position`: `Live Operations Manager`
- `organization`: `Winamax`
- `description`: `Managed planning and live operations for online poker games, promotions, and events, including prize pools and liquidity. Analyzed product performance, ran A/B tests, designed engagement mechanics, and coordinated product, engineering, analytics, marketing, creative, and support teams.`

**Winamax**

- `startDate`: `2009-08`
- `endDate`: `2010-07`
- `location`: `London, United Kingdom`
- `position`: `Marketing Coordinator`
- `organization`: `Winamax`
- `description`: `Supported localization and launch of online-gaming products for the French market. Created promotional content and coordinated offers and product launches with B2B partners and internal teams.`

#### Education and training

**OpenClassrooms**

- `startDate`: `2021`
- `endDate`: `2023`
- `location`: `To confirm`
- `position`: `Front-End / React Application Developer — RNCP Qualification`
- `organization`: `OpenClassrooms`
- `description`: `Training in React, state management, accessibility, and performance.`

**Le Wagon**

- `startDate`: `2021`
- `endDate`: `2021`
- `location`: `To confirm`
- `position`: `Full-Stack Web Development Bootcamp`
- `organization`: `Le Wagon`
- `description`: `Training in Ruby on Rails, MVC architecture, JavaScript, databases, and web application development.`

**Bordeaux Montaigne University**

- `startDate`: `2005`
- `endDate`: `2008`
- `location`: `Bordeaux, France`
- `position`: `Information and Communication Studies`
- `organization`: `Bordeaux Montaigne University`
- `description`: `Studies in information and communication, complementing later work across product, design, business, and engineering.`

- Optional credential below education: `Professional Scrum Product Owner Certification` — `Kagilum / Wensei`, `2020`. Its training location is not established in the sources.
- The official Raccourci title is `Frontend Developer`; `Frontend Technical Owner` clarifies the documented scope. For a compact card, display the official title and put technical ownership in the description.

### Testimonials

Remove `app/components/TestimonialsSection.vue` until genuine, attributable recommendations are available. All four template names and quotes are placeholders.

### Frequently asked questions

Replace the agency-services FAQ (`app/components/FaqSection.vue`) with career-relevant questions if the layout benefits from an FAQ; otherwise omit it.

- Heading: `A few useful details`
- Question: `What kinds of roles are you considering?`
  - Answer: `Senior Frontend Engineer and Product Engineer roles with meaningful input into technical and product decisions. I’m especially interested in teams building AI-powered products.`
- Question: `Where are you based?`
  - Answer: `I’m based in La Rochelle, France, and open to remote or hybrid opportunities in France and the EU, including English-speaking teams.`
- Question: `What is your main technical focus?`
  - Answer: `TypeScript and frontend architecture, with production experience in Vue.js, Nuxt, React, Web Components, accessibility, performance, and automated testing.`

### Contact

Source: `app/components/ContactSection.vue`.

- Heading: `Let’s talk about your product and team`
- Subtitle: `If you’re hiring for a senior frontend or product engineering role, or want to discuss an engineering challenge, I’d be glad to hear from you.`
- Name field: accessible label `Full name`; placeholder `Your name*`
- Email field: accessible label `Email address`; placeholder `Your email*`
- Message field: accessible label `Message`; placeholder `Tell me what you’re working on`
- Submit button: `Send message`
- Generated email subject: `Portfolio message from {name}`
- Generated email body labels: `Name:`, `Email:`, `Message:`
- Direct contact: `Email me` → `mailto:xhernan.martinez@gmail.com`

## Project detail pages `/projects/{slug}`

Source: `app/pages/projects/[slug].vue`, with data from `app/data/projects.ts`. These are proposed case studies. Replace the template's Orbit, Nova, Finova, and Lunex routes and content when implementing the site.

- Browser title: `{project title} — Xavier Hernandez-Martinez`
- Meta description: the project description below
- First content label: `Context & challenge`
- Second content label: `My contribution`
- Return link: `Back to projects` → homepage projects section
- Unknown project message: `Project not found`
- Write image alt text for the actual approved image; use empty alt text for decoration. Do not retain fake project visuals or generic `visual 2` labels.
- Omit project dates until verified. Employment dates do not establish individual project dates.
- Omit public previews and screenshots for confidential products unless Raccourci approves them.

### Project copy

#### Youbook — `/projects/youbook-tourism-commerce`

- Category: `E-commerce · Frontend architecture`
- Title: `Youbook — e-commerce for tourism destinations`
- Card accessible label: `Youbook: e-commerce frontend and embeddable Web Components`
- Description: `A TypeScript and Vue 3 e-commerce product used by more than ten tourism destinations, with interfaces that can also be embedded in third-party sites.`
- Context heading: `Booking journeys need to work across destination websites and back-office workflows.`
- Context body: `Youbook serves tourism destinations with a web application and components that can be integrated into WordPress and other sites. Marseille Tourism was its principal launch client.`
- Contribution heading: `I have owned the frontend direction since the product’s inception.`
- Contribution body: `I built the Vue 3 and TypeScript frontend and native Web Components, shaped component and technology choices, and worked with backend engineers on API contracts. My responsibilities also include accessibility, performance, tests, and documentation.`
- Editorial note: The 10+ destination figure describes product adoption as a whole.

#### Internal ERP — `/projects/internal-erp-workflows`

- Category: `Internal tools · Product engineering`
- Title: `Internal ERP — catalogue and invoicing workflows`
- Card accessible label: `Internal ERP: catalogue and invoicing workflows`
- Description: `An internal product that brings Raccourci’s catalogue of products and services together with invoice-generation workflows for commercial teams.`
- Context heading: `Commercial teams needed a clearer path from product catalogue to invoice.`
- Context body: `The project brought business information and invoicing tasks into one internal system.`
- Contribution heading: `I designed and delivered the product independently.`
- Contribution body: `I translated the commercial workflow into an application, built the interfaces, and made the technical decisions needed for delivery.`
- Editorial note: Keep this case study at the workflow and architecture level; use no internal screens or data without approval.

#### RoadBOOK — `/projects/roadbook-tourism-platform`

- Category: `Tourism · Frontend development`
- Title: `RoadBOOK — evolving an established tourism platform`
- Card accessible label: `RoadBOOK: frontend development for a tourism platform`
- Description: `Frontend feature work and modernization for a production application used by more than 100 tourism destinations.`
- Context heading: `An established product has to keep serving destinations as its frontend evolves.`
- Context body: `RoadBOOK is a production application used by more than 100 tourism destinations. Its existing interface needed ongoing feature development and a move toward a more maintainable frontend.`
- Contribution heading: `I contributed features and helped modernize the frontend.`
- Contribution body: `I built frontend features, worked on the transition from Vue 2 to Vue 3 and TypeScript, and helped improve interface consistency through reusable, accessible components.`
- Editorial note: The destination count describes RoadBOOK's reach, not growth caused by Xavier's work. Confirm product-specific migration details before publication.

#### Fairguest — `/projects/fairguest-review-platform`

- Category: `Tourism · Review aggregation`
- Title: `Fairguest — bringing tourism reviews together`
- Card accessible label: `Fairguest: frontend development for a tourism review platform`
- Description: `Frontend work on a tourism product used by more than 50 destinations and aggregating reviews from more than 20 platforms.`
- Context heading: `Review data from many sources needs a clear interface.`
- Context body: `Fairguest brings together information from more than 20 review platforms for tourism destinations. The product serves more than 50 destinations and has continued to evolve as a production application.`
- Contribution heading: `I developed features and improved the frontend foundation.`
- Contribution body: `I contributed frontend features, interface refactoring, and reusable, accessible components as part of the move from Vue 2 toward Vue 3 and TypeScript.`
- Editorial note: The destination and platform counts describe Fairguest's reach and integrations, not growth caused by Xavier's work. Confirm product-specific migration details before publication.

## Shared footer

Source: `app/components/SiteFooter.vue`. Appears on all pages.

- Copyright: `© 2026 Xavier Hernandez-Martinez.`
- Contact: `Email` → `mailto:xhernan.martinez@gmail.com`
- Social: `LinkedIn` → `https://www.linkedin.com/in/xavhm/`
- Keep `Privacy Policy` and `Terms of Service` links only if those pages exist and reflect the site's actual behavior.

## Publication checks

- Confirm locations for OpenClassrooms and Le Wagon before displaying them; the supplied sources do not state them.
- Confirm that project names, descriptions, client references, screenshots, and any recreated diagrams are approved for public use, especially for the internal ERP.
- Connect the CV button to a current downloadable file and check contact, social, and project links before launch.
- Replace every template portrait, logo, testimonial, project image, and route with real or approved assets and destinations.
