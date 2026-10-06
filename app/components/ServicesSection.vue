<script setup lang="ts">
const expertise = [
  {
    number: '01',
    title: 'Frontend architecture',
    detail: 'TypeScript, Vue.js, React, reusable components, Web Components',
  },
  {
    number: '02',
    title: 'Product engineering',
    detail: 'Business workflows, prioritization, API contracts, technical trade-offs',
  },
  {
    number: '03',
    title: 'Web performance',
    detail: 'Optimization for accessibility, Core Web Vitals. Testing with Vitest, Playwright',
  },
  {
    number: '04',
    title: 'AI-powered workflows',
    detail: 'AI-assisted engineering. User interfaces and component systems for AI agentic systems',
  },
]
</script>

<template>
  <section
    id="services"
    class="bg-muted scroll-mt-22.75 overflow-clip rounded-[20px] px-5 pt-8.5 pb-6 sm:px-7.75 sm:pt-10.5 sm:pb-8"
  >
    <SectionHeading
      title="What I bring to a team"
      description="Hands-on frontend ownership, grounded in product operations and delivery."
    />
    <ul role="list" class="grid grid-cols-1 gap-4.5 sm:grid-cols-2 sm:gap-2.5">
      <li
        v-for="area in expertise"
        :key="area.number"
        class="bg-elevated flex min-h-40 flex-col justify-between rounded-[17px] p-5.5 sm:min-h-50 md:min-h-58.25 md:p-7.75"
      >
        <span class="text-dimmed text-[28px] tracking-tighter">{{ area.number }}</span>
        <div>
          <h3 class="mb-3.5 max-w-61.25 text-lg leading-[1.2] font-medium tracking-[-0.045em]">
            {{ area.title }}
          </h3>
          <p class="text-muted text-[13px]">{{ area.detail }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
