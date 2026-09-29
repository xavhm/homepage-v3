<script setup lang="ts">
const services = [
  { number: '01', title: 'Product & Interface Design Systems', detail: 'UI Design, UX Design' },
  {
    number: '02',
    title: 'Creative Direction & Visual Strategy',
    detail: 'Visual Strategy, Design Planning',
  },
  {
    number: '03',
    title: 'Branding Strategy for Growth and Scale',
    detail: 'Positioning, Marketing Strategy',
  },
  {
    number: '04',
    title: 'Website Design & Development Solutions',
    detail: 'Responsive Websites, Landing Pages',
  },
]
</script>

<template>
  <section id="services" class="panel section-panel services-section">
    <SectionHeading
      title="Services I Provide"
      description="Helping businesses build intuitive products that drive growth."
    />
    <div class="service-grid">
      <div v-for="service in services" :key="service.number" class="service-card">
        <span class="service-number">{{ service.number }}</span>
        <div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
