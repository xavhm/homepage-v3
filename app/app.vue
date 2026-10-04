<script setup lang="ts">
import { portfolioSeo } from '~/data/seo'

useSeoMeta({
  title: portfolioSeo.title,
  description: portfolioSeo.description,
  ogTitle: portfolioSeo.title,
  ogDescription: portfolioSeo.description,
  ogType: 'website',
  ogSiteName: portfolioSeo.name,
  twitterTitle: portfolioSeo.title,
  twitterDescription: portfolioSeo.description,
  twitterCard: 'summary_large_image',
})

// A shared placeholder for all pages. Replace this template when the final design is ready.
// Nuxt SEO generates absolute OG/Twitter image URLs and each page's canonical og:url.
defineOgImage(
  'Portfolio.takumi',
  {
    name: portfolioSeo.name,
    title: portfolioSeo.role,
  },
  {
    alt: `${portfolioSeo.name} — ${portfolioSeo.role}`,
  },
)

useHead({
  htmlAttrs: { lang: 'en', class: 'scroll-smooth motion-reduce:scroll-auto' },
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
