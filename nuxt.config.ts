import { projects } from './app/data/projects'
import { portfolioSeo } from './app/data/seo'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/hints',
    '@nuxtjs/seo',
    'nuxt-security',
  ],

  fonts: {
    families: [
      {
        name: 'Inter',
        src: '/fonts/InterVariable.woff2',
        weight: [100, 900],
        style: 'normal',
        display: 'swap',
        global: true,
      },
      {
        name: 'Inter',
        src: '/fonts/InterVariable-Italic.woff2',
        weight: [100, 900],
        style: 'italic',
        display: 'swap',
        global: true,
        preload: false,
      },
    ],
  },

  devtools: {
    enabled: true,
  },

  site: {
    url: process.env.NUXT_SITE_URL || 'https://www.xavhm.foo',
    name: portfolioSeo.name,
    description: portfolioSeo.description,
    defaultLocale: 'en',
    trailingSlash: false,
  },

  seo: {
    canonicalQueryWhitelist: [],
  },

  robots: {
    groups: [{ userAgent: ['*'], allow: ['/'] }],
  },

  sitemap: {
    zeroRuntime: true,
    urls: ['/', ...projects.map((project) => `/projects/${project.slug}`)],
  },

  schemaOrg: {
    identity: {
      type: 'Person',
      name: portfolioSeo.name,
      image: portfolioSeo.image,
      description: portfolioSeo.description,
      jobTitle: portfolioSeo.role,
      sameAs: portfolioSeo.sameAs,
    },
  },

  ogImage: {
    enabled: true,
    zeroRuntime: true,
    defaults: {
      width: 1200,
      height: 630,
      extension: 'png',
    },
  },

  // Follow the visitor's OS theme; Nuxt UI registers the color-mode module.
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      titleTemplate: '%s',
      meta: [{ name: 'color-scheme', content: 'light dark' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  experimental: {
    viewTransition: true,
  },

  routeRules: {
    '/': { prerender: true },
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/robots.txt',
        '/sitemap.xml',
        ...projects.map((project) => `/projects/${project.slug}`),
      ],
    },
  },

  compatibilityDate: '2026-06-30',

  security: {},
})
