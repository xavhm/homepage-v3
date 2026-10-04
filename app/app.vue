<script setup lang="ts">
useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})

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
