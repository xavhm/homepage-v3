<script setup lang="ts">
const roles = ['UI/UX Designer', 'Product Designer', 'Design Strategist']
const roleIndex = ref(0)
let roleTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  roleTimer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.length
  }, 2800)
})
onUnmounted(() => {
  if (roleTimer) clearInterval(roleTimer)
})
</script>

<template>
  <section
    id="hero"
    class="relative scroll-mt-24 overflow-clip rounded-b-[20px] border border-[#ededf0] bg-white px-6 pt-14.5 pb-7.5 sm:min-h-126.5 sm:px-10.5 sm:pt-10 sm:pb-10.75"
  >
    <div
      class="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-[#ebf9e7] px-3 py-1.75 text-[11px] whitespace-nowrap text-[#508549] sm:top-4.5 sm:right-5"
    >
      <span class="size-1.25 rounded-full bg-[#51af3e]" />Open for 2 new projects
    </div>
    <div class="mb-6 flex items-center gap-4.75 sm:mb-7.5">
      <img
        class="size-17 rounded-full object-cover sm:size-21.5"
        src="/portfolio/profile.avif"
        width="86"
        height="86"
        alt="Calib Harrison"
        fetchpriority="high"
      />
      <div>
        <p class="mb-0.75 text-[17px] font-medium tracking-[-0.04em]">Calib Harrison</p>
        <p class="text-muted text-sm" aria-live="off">{{ roles[roleIndex] }}</p>
      </div>
    </div>
    <h1
      class="mb-3.5 max-w-130 text-[clamp(1.7rem,1.4rem+1vw,1.75rem)] leading-[1.12] font-normal tracking-[-0.058em] text-balance"
    >
      I design premium, high-converting digital experiences that drive growth.
    </h1>
    <p class="max-w-137.5 text-sm leading-[1.65] tracking-tight text-[#5e5e62] sm:text-[15px]">
      Helping brands grow through thoughtful design and user experiences that drive engagement,
      build trust, and deliver results.
    </p>
    <div class="mt-6.5 flex flex-wrap gap-2.5">
      <a
        class="focus-visible:outline-ink inline-flex min-h-11 items-center justify-center rounded-[11px] border border-transparent bg-[#101013] px-4.75 text-[13px] font-medium whitespace-nowrap text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#343438] focus-visible:outline-2 focus-visible:outline-offset-2"
        href="https://cal.com/"
        target="_blank"
        rel="noopener noreferrer"
        >Book a Free Call</a
      >
      <NuxtLink
        class="border-line text-ink focus-visible:outline-ink inline-flex min-h-11 items-center justify-center rounded-[11px] border bg-white px-4.75 text-[13px] font-medium whitespace-nowrap shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
        to="/projects"
        >See my Projects</NuxtLink
      >
    </div>
    <div class="mt-12 sm:mt-13">
      <p class="mb-6.25 text-[13px] font-medium">Trusted by 30+ Brands including</p>
      <div
        class="grid grid-cols-2 items-center gap-x-4 gap-y-5 sm:flex sm:justify-between sm:gap-4.5"
        role="group"
        aria-label="Trusted brand logos"
      >
        <img
          v-for="number in 5"
          :key="number"
          class="col-span-1 h-5 max-w-full object-contain last:col-span-2 last:mx-auto sm:max-w-[21%] sm:last:mx-0"
          :src="`/portfolio/logo-${number}.svg`"
          alt="Logoipsum"
          height="20"
        />
      </div>
    </div>
  </section>
</template>
