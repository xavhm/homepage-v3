<template>
  <div
    class="text-ink mx-auto mt-2.5 w-[calc(100%-20px)] max-w-181 bg-white font-sans text-sm tracking-tight scheme-light md:mt-15.5 md:w-[calc(100%-32px)]"
  >
    <SiteHeader />
    <main id="main-content">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
