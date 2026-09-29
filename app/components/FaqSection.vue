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
      'Yes. I design and develop responsive websites and landing pages tailored to your brand and business goals.',
  },
  {
    question: 'Can you redesign an existing product or website?',
    answer:
      'Yes. I can improve the usability, visual design, and overall experience of an existing product or website.',
  },
  {
    question: 'Do you build websites in Framer?',
    answer: 'Yes. I build custom, responsive websites in Framer.',
  },
]
</script>

<template>
  <section id="faq" class="panel section-panel faq-section">
    <SectionHeading
      title="Frequently Asked Questions"
      description="Everything you need to know before we work together."
    />
    <div class="faq-list">
      <details v-for="(faq, index) in faqs" :key="faq.question" :open="index === 0">
        <summary>{{ faq.question }}<UIcon name="i-lucide-plus" /></summary>
        <p>{{ faq.answer }}</p>
      </details>
    </div>
  </section>
</template>
