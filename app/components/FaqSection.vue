<script setup lang="ts">
const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'I provide product design, UI/UX design, website design, design systems, Framer development, and end-to-end digital product design services.',
  },
  {
    question: 'Do you design and develop websites?',
    answer:
      'Yes. I handle both the design and development process, creating high-converting websites using Framer and modern web technologies.',
  },
  {
    question: 'Can you redesign an existing product or website?',
    answer:
      'Absolutely. I can audit your current experience, identify opportunities, and redesign it to improve usability, conversions, and visual appeal.',
  },
  {
    question: 'Do you build websites in Framer?',
    answer:
      'Yes. I specialize in Framer development and create fast, responsive, and SEO-friendly websites that are easy to manage.',
  },
]
</script>

<template>
  <section
    id="faq"
    class="border-surface bg-surface scroll-mt-24 overflow-clip rounded-[20px] border px-5 pt-8.5 pb-6 sm:px-7.75 sm:pt-10.5 sm:pb-8"
  >
    <SectionHeading
      title="Frequently Asked Questions"
      description="Everything you need to know before we work together."
    />
    <div class="grid gap-2">
      <details
        v-for="(faq, index) in faqs"
        :key="faq.question"
        class="group rounded-xl bg-white px-5"
        :open="index === 0"
      >
        <summary
          class="focus-visible:outline-ink flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 rounded-sm text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden"
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
