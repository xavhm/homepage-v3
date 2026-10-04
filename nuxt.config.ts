import { projects } from './app/data/projects'
import { portfolioSeo } from './app/data/seo'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/hints', '@nuxtjs/seo', 'nuxt-security'],

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

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      titleTemplate: '%s',
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
