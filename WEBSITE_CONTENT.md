# Website content inventory

This is the current website copy, organized by where it appears. It is a working inventory for rewriting; editing this file does **not** change the live website. Quoted copy below preserves the wording, capitalization, punctuation, and inconsistencies in the source. Routes and source files identify where to apply later edits.

## Shared header

Source: `app/components/SiteHeader.vue`. Appears on the homepage, project listing, and project detail pages.

- Local time: a live clock formatted in the `America/Los_Angeles` time zone; initial value `--:--:--`
- Location: `Los Angeles`
- Navigation links: `Home`, `About`, `Projects`, `Services`, `Contact`
- Navigation accessibility label: `Main navigation`
- Social group accessibility label: `Social links`
- Social link accessibility labels: `X`, `LinkedIn`, `Dribbble`, `Behance`

## Homepage `/`

SEO source: `app/pages/index.vue`.

- Page title: `Calib Harrison — Product Designer`
- Meta description: `I design premium, high-converting digital experiences that drive growth.`

### Hero

Source: `app/components/HeroSection.vue`.

- Availability badge: `Open for 2 new projects`
- Profile name: `Calib Harrison`
- Rotating role labels: `UI/UX Designer`, `Product Designer`, `Design Strategist`
- Main headline: `I design premium, high-converting digital experiences that drive growth.`
- Supporting paragraph: `Helping brands grow through thoughtful design and user experiences that drive engagement, build trust, and deliver results.`
- Primary button: `Book a Free Call`
- Secondary button: `See my Projects`
- Trust line: `Trusted by 30+ Brands including`
- Profile image alt text: `Calib Harrison`
- Brand logo group accessibility label: `Trusted brand logos`
- Brand logo alt text: `Logoipsum` on each of the five logos

### About

Source: `app/components/AboutSection.vue`.

- Section label: `About my self.`
- Introduction, emphasized portion: `Hey, I’m Caleb Harrison — a strategy-driven product designer`
- Introduction, continuation: `creating scalable experiences that improve retention, conversions, and business growth.`
- Email link text: `contact@calib.com`
- Phone link text: `+(123) 254 587 00`
- CV link text: `Download CV`
- Statistics:
  - `$60M+` — `Client Funding Raised`
  - `35+` — `Startups Supported`
  - `12+` — `Years of experience`
  - `95%` — `Client Satisfaction Rate`

### Featured projects

Source: `app/components/ProjectsSection.vue`, with cards from `app/data/projects.ts`.

- Heading: `Case Studies & Projects`
- Subtitle: `A selection of projects showcasing strategy, design thinking, and measurable impact.`
- Featured cards, in order: Orbit, Nova™, Finova, Lunex. Their exact category, title, image alt text, and accessible card labels appear in [Project copy](#project-copy).
- Each card links directly to its project detail page. The hero's `See my Projects` link jumps to this section.

### Services

Source: `app/components/ServicesSection.vue`.

- Heading: `Services I Provide`
- Subtitle: `Helping businesses build intuitive products that drive growth.`
- Service `01`: `Product & Interface Design Systems` — `UI Design, UX Design`
- Service `02`: `Creative Direction & Visual Strategy` — `Visual Strategy, Design Planning`
- Service `03`: `Branding Strategy for Growth and Scale` — `Positioning, Marketing Strategy`
- Service `04`: `Website Design & Development Solutions` — `Responsive Websites, Landing Pages`

### Testimonials

Source: `app/components/TestimonialsSection.vue`.

- Heading: `What Clients Are Saying`
- Subtitle: `Insights from clients who trusted me to bring their ideas to life through design.`
- Testimonial 1:
  - Name and avatar alt text: `Wilium jonson`
  - Handle: `@jonsonwil`
  - Quote: `Working with Calib was a fantastic experience. His ability to transform complex ideas into intuitive user experiences helped us launch faster and with greater confidence.`
- Testimonial 2:
  - Name and avatar alt text: `Michael Carter`
  - Handle: `@michaelcart`
  - Quote: `From strategy to execution, every detail was carefully considered. The final product exceeded our expectations and significantly improved our user engagement.`
- Testimonial 3:
  - Name and avatar alt text: `Sarah Bennett`
  - Handle: `@bennettsrh`
  - Quote: `Calib brought clarity and structure to our product. His design process was thoughtful, collaborative, and focused on delivering measurable business results.`
- Testimonial 4:
  - Name and avatar alt text: `Emma Rodriguez`
  - Handle: `@rodriguez`
  - Quote: `A highly skilled designer who understands both user needs and business goals. The designs were clean, scalable, and had a real impact on our growth.`

### Frequently asked questions

Source: `app/components/FaqSection.vue`.

- Heading: `Frequently Asked Questions`
- Subtitle: `Everything you need to know before we work together.`
- Question: `What services do you offer?`
  - Answer: `I provide product design, UI/UX design, website design, design systems, Framer development, and end-to-end digital product design services.`
- Question: `Do you design and develop websites?`
  - Answer: `Yes. I handle both the design and development process, creating high-converting websites using Framer and modern web technologies.`
- Question: `Can you redesign an existing product or website?`
  - Answer: `Absolutely. I can audit your current experience, identify opportunities, and redesign it to improve usability, conversions, and visual appeal.`
- Question: `Do you build websites in Framer?`
  - Answer: `Yes. I specialize in Framer development and create fast, responsive, and SEO-friendly websites that are easy to manage.`

### Contact

Source: `app/components/ContactSection.vue`.

- Heading: `Let's bring your idea to life`
- Subtitle: `I'm always open to new opportunities, collaborations, and creative conversations. Feel free to reach out to discuss your project.`
- Name field: accessible label `Full Name`; placeholder `Full Name*`
- Email field: accessible label `Email Address`; placeholder `Email Address*`
- Budget field: accessible label and default option `Budget`
- Budget options: `$500 - $1,000`, `$1000 - $5000`, `$5,000 - $10,000`, `$10,000 - $20,000`, `$20,000 - $50,000`
- Message field: accessible label `Project details`; placeholder `Tell me about your project`
- Submit button: `Send Message`
- Generated email subject: `Project inquiry from {name}`
- Generated email body labels: `Name:`, `Email:`, `Budget:`
- Generated email fallback when no budget is selected: `Not specified`

## Project detail pages `/projects/{slug}`

Source: `app/pages/projects/[slug].vue`, with content from `app/data/projects.ts`.

Shared copy and patterns on every project detail page:

- Browser title: `{project title} — Calib Harrison`
- Meta description: the project's description below
- Primary link: `Preview Project`
- First content label: `Ideation & Conceptual`
- Second content label: `Production & Execution`
- Return link: `Back`, to the homepage projects section
- Cover image alt text: the project's title
- First and second detail image alt text: `{project title} visual 2` and `{project title} visual 3`
- Unknown project error status message: `Project not found`

### Project copy

Each project entry gives its homepage card, detail page copy, and exact image alt text. The title is also the cover image alt text on the detail page.

#### Orbit — `/projects/orbit-saas-brand-experience`

- Category: `Branding`
- Dates: `Feb 1st – Mar 10th`
- Title and cover alt: `Orbit - SaaS Brand Experience`
- Card accessible label: `Branding: Orbit - SaaS Brand Experience`
- Description: `Orbit was created as a brand identity project focused on crafting bold and cohesive visual assets across digital and physical touchpoints.`
- Concept heading: `Petronex was imagined as a visual system that brings consistency and impact to modern brand communication.`
- Concept body: `The goal was to design a strong and flexible identity that works across multiple mediums, from logos to large-scale billboards. The concept focused on clarity, bold typography, and a balanced visual language to ensure strong brand recognition.`
- Execution heading: `The design approach for Astra combined bold visuals with a structured and scalable system.`
- Execution body: `A cohesive set of brand assets was developed, including logo variations, color systems, and layout guidelines. Each element was designed to maintain consistency across print and digital formats, ensuring adaptability for campaigns and real-world applications.`
- Detail image alt text: `Orbit - SaaS Brand Experience visual 2`; `Orbit - SaaS Brand Experience visual 3`

#### Nova™ — `/projects/nova-brand-identity`

- Category: `Food & Beverage`
- Dates: `Jan 20th – Feb 25th`
- Title and cover alt: `Nova™ Brand Identity`
- Card accessible label: `Food & Beverage: Nova™ Brand Identity`
- Description: `Nova™ was crafted as a modern logo and visual identity system designed to strengthen brand recognition while creating a memorable and consistent presence across digital and print applications.`
- Concept heading: `The identity was envisioned to create a distinctive and recognizable brand presence across every customer touchpoint.`
- Concept body: `The identity was developed to communicate clarity, innovation, and trust through a simple yet distinctive visual language. The goal was to create a timeless logo that scales effortlessly across different touchpoints while reflecting the brand's personality and values.`
- Execution heading: `The design approach combined strategic thinking with a refined visual identity system.`
- Execution body: `The design process combined strategic thinking with refined visual exploration. Multiple logo concepts, typography systems, and color palettes were evaluated before developing a cohesive identity. The final brand system includes logo variations, spacing guidelines, iconography, and supporting visual elements to ensure consistency across all brand materials.`
- Detail image alt text: `Nova™ Brand Identity visual 2`; `Nova™ Brand Identity visual 3`

#### Finova — `/projects/finova-finance-app`

- Category: `FinTech / Personal Finance`
- Dates: `Jan 10th – Mar 2nd`
- Title and cover alt: `Finova Finance App`
- Card accessible label: `FinTech / Personal Finance: Finova Finance App`
- Description: `Finova Finance App was designed as a modern financial platform that simplifies money management through a clean and structured interface.`
- Concept heading: `Velto was imagined as a finance product focused on simplifying how users interact with financial data.`
- Concept body: `The vision was to design a platform that feels intuitive and reliable, helping users track spending and manage finances without friction. Inspired by minimal design principles, the system focuses on clarity, balance, and usability while turning complex data into simple insights.`
- Execution heading: `The design approach for Velto combined minimalism with structured data presentation.`
- Execution body: `A clean and consistent UI system was developed with modular components and flexible layouts. A neutral color palette with subtle highlights was used to guide attention, while dashboards and charts were designed to present financial data in a clear and accessible way.`
- Detail image alt text: `Finova Finance App visual 2`; `Finova Finance App visual 3`

#### Lunex — `/projects/lunex-website-redesign`

- Category: `Technology`
- Dates: `Mar 1st – Apr 12th`
- Title and cover alt: `Lunex Website Redesign`
- Card accessible label: `Technology: Lunex Website Redesign`
- Description: `Lunex Website Redesign focused on improving usability and visual clarity through a modern and structured web experience.`
- Concept heading: `Fasonex was reimagined as a cleaner and more intuitive platform built around user-focused navigation.`
- Concept body: `The goal was to simplify the browsing experience while enhancing visual hierarchy and content structure. The concept focused on clear layouts, improved content flow, and a modern interface to help users find information faster and interact with ease.`
- Execution heading: `The redesign approach focused on structure, consistency, and improved interaction design.`
- Execution body: `A refreshed UI system was developed with scalable components and responsive layouts. Typography, spacing, and visual hierarchy were refined to improve readability, while interactions were optimized to create a smoother and more engaging user experience across devices.`
- Detail image alt text: `Lunex Website Redesign visual 2`; `Lunex Website Redesign visual 3`

## Shared footer

Source: `app/components/SiteFooter.vue`. Appears on all pages.

- Copyright: `Copyright © 2026 Calib Harrison.`
- Legal links: `Privacy Policy`, `Terms of Service`

## Copy review notes

These are observations about the current template copy, not edits to it.

- The hero, SEO, and footer use **Calib Harrison**, while About says **Caleb Harrison**.
- Orbit's detail text names **Petronex** and **Astra**; Finova's names **Velto**; Lunex's names **Fasonex**; Lumina's names **CloudZero**.
- All five brand logos use the same alt text, `Logoipsum`.
- The About label reads `About my self.` and the first testimonial name reads `Wilium jonson`.
- The budget option `$1000 - $5000` uses different number formatting from the other options.
