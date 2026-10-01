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
  <section
    id="services"
    class="border-surface bg-surface scroll-mt-22.75 overflow-clip rounded-[20px] border px-5 pt-8.5 pb-6 sm:px-7.75 sm:pt-10.5 sm:pb-8"
  >
    <SectionHeading
      title="Services I Provide"
      description="Helping businesses build intuitive products that drive growth."
    />
    <ul role="list" class="grid grid-cols-1 gap-4.5 sm:grid-cols-2 sm:gap-2.5">
      <li
        v-for="service in services"
        :key="service.number"
        class="flex min-h-40 flex-col justify-between rounded-[17px] bg-white p-5.5 sm:min-h-50 md:min-h-58.25 md:p-7.75"
      >
        <span class="text-[28px] tracking-tighter text-[#dedee0]">{{ service.number }}</span>
        <div>
          <h3 class="mb-3.5 max-w-61.25 text-lg leading-[1.2] font-medium tracking-[-0.045em]">
            {{ service.title }}
          </h3>
          <p class="text-muted text-[13px]">{{ service.detail }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
