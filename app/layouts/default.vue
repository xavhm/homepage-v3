<script setup lang="ts">
const route = useRoute()

watch(
  () => route.path,
  async (path, previousPath) => {
    if (path === previousPath || route.hash) return
    await nextTick()
    document.getElementById('main-content')?.focus()
  },
)
</script>

<template>
  <NuxtAnnouncer />
  <NuxtRouteAnnouncer />
  <div
    class="site-layout text-highlighted mx-auto w-[calc(100%-20px)] max-w-181 font-sans text-sm tracking-tight md:w-[calc(100%-32px)]"
  >
    <a
      href="#main-content"
      class="bg-inverted focus-visible:outline-inverted text-inverted sr-only fixed top-3 left-3 z-60 rounded-lg px-4 py-3 font-medium focus:not-sr-only focus-visible:outline-2 focus-visible:outline-offset-2"
      >Skip to main content</a
    >
    <div class="site-header-fade" aria-hidden="true" />
    <SiteHeader />
    <main id="main-content" tabindex="-1" class="pt-6 focus:outline-none">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
