<script setup lang="ts">
const testimonials = [
  {
    name: 'Wilium jonson',
    handle: '@jonsonwil',
    avatar: '/portfolio/avatar-1.avif',
    quote:
      'Working with Calib was a fantastic experience. His ability to transform complex ideas into intuitive user experiences helped us launch faster and with greater confidence.',
  },
  {
    name: 'Michael Carter',
    handle: '@michaelcart',
    avatar: '/portfolio/avatar-2.avif',
    quote:
      'From strategy to execution, every detail was carefully considered. The final product exceeded our expectations and significantly improved our user engagement.',
  },
  {
    name: 'Sarah Bennett',
    handle: '@bennettsrh',
    avatar: '/portfolio/avatar-3.avif',
    quote:
      'Calib brought clarity and structure to our product. His design process was thoughtful, collaborative, and focused on delivering measurable business results.',
  },
  {
    name: 'Emma Rodriguez',
    handle: '@rodriguez',
    avatar: '/portfolio/avatar-4.avif',
    quote:
      'A highly skilled designer who understands both user needs and business goals. The designs were clean, scalable, and had a real impact on our growth.',
  },
]
</script>

<template>
  <section
    id="testimonials"
    class="border-surface bg-surface scroll-mt-24 overflow-clip rounded-[20px] border px-5 pt-8.5 pb-6 sm:px-7.75 sm:pt-10.5 sm:pb-8"
  >
    <SectionHeading
      title="What Clients Are Saying"
      description="Insights from clients who trusted me to bring their ideas to life through design."
    />
    <ul role="list" class="grid grid-cols-1 gap-4.5 sm:grid-cols-2 sm:gap-2.5">
      <li
        v-for="person in testimonials"
        :key="person.name"
        class="min-h-52.5 rounded-2xl bg-white p-5.5"
      >
        <div class="flex items-center gap-2.5">
          <img
            class="size-10.5 rounded-full object-cover"
            :src="person.avatar"
            alt=""
            width="44"
            height="44"
            loading="lazy"
          />
          <div class="grid gap-0.75">
            <strong class="text-[13px] font-medium">{{ person.name }}</strong
            ><span class="text-muted text-[11px]">{{ person.handle }}</span>
          </div>
          <UIcon name="i-simple-icons-x" class="ml-auto text-[13px]" aria-hidden="true" />
        </div>
        <p class="mt-5 text-[13px] leading-[1.6] text-[#4f4f53]">{{ person.quote }}</p>
      </li>
    </ul>
  </section>
</template>
