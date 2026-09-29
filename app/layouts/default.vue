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
  <div
    class="text-ink mx-auto mt-2.5 w-[calc(100%-20px)] max-w-181 bg-white font-sans text-sm tracking-tight scheme-light md:mt-15.5 md:w-[calc(100%-32px)]"
  >
    <a
      href="#main-content"
      class="bg-ink focus-visible:outline-ink sr-only fixed top-3 left-3 z-60 rounded-lg px-4 py-3 font-medium text-white focus:not-sr-only focus-visible:outline-2 focus-visible:outline-offset-2"
      >Skip to main content</a
    >
    <SiteHeader />
    <main id="main-content" tabindex="-1" class="focus:outline-none">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
