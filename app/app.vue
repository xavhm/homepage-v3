<script setup lang="ts">
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
