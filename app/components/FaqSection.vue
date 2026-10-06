<script setup lang="ts">
const faqs = [
  {
    question: 'What kind of roles are you considering?',
    answer:
      'Senior Frontend Engineer and Product Engineer roles with meaningful input into technical and product decisions. I’m especially interested in teams building AI-powered products.',
  },
  {
    question: 'Where are you based?',
    answer:
      'I’m based in La Rochelle, France, and open to remote or hybrid opportunities in France and the EU, including English-speaking teams.',
  },
  {
    question: 'What is your main technical focus?',
    answer:
      'TypeScript and frontend architecture, with production experience in Vue.js, Nuxt, React, Web Components, accessibility, performance, and automated testing. AI agentic systems powered by LangChain and LangGraph.',
  },
]
</script>

<template>
  <section
    id="faq"
    class="bg-muted scroll-mt-24 overflow-clip rounded-[20px] px-5 pt-8.5 pb-6 sm:px-7.75 sm:pt-10.5 sm:pb-8"
  >
    <SectionHeading title="A few useful details" />
    <div class="grid gap-2">
      <details
        v-for="(faq, index) in faqs"
        :key="faq.question"
        name="faq"
        class="faq-item group bg-elevated rounded-xl px-5"
        :open="index === 0"
      >
        <summary
          class="focus-visible:outline-inverted flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 rounded-sm text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden"
        >
          {{ faq.question
          }}<UIcon
            name="i-lucide-plus"
            class="shrink-0 transition-transform group-open:rotate-45 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </summary>
        <p class="text-muted mb-4.75 leading-[1.6]">{{ faq.answer }}</p>
      </details>
    </div>
  </section>
</template>

<style scoped>
.faq-item {
  interpolate-size: allow-keywords;
}

.faq-item::details-content {
  block-size: 0;
  overflow: hidden;
  opacity: 0;
  transition:
    block-size 220ms ease,
    opacity 180ms ease,
    content-visibility 220ms;
  transition-behavior: allow-discrete;
}

.faq-item[open]::details-content {
  block-size: auto;
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .faq-item::details-content {
    transition: none;
  }
}
</style>
