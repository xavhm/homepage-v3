<script setup lang="ts">
const technologies = [
  { name: 'CSS', icon: 'i-simple-icons-css' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss' },
  { name: 'Vue', icon: 'i-simple-icons-vuedotjs' },
  { name: 'React', icon: 'i-simple-icons-react' },
  { name: 'Nuxt', icon: 'i-simple-icons-nuxt' },
  { name: 'Cloudflare', icon: 'i-simple-icons-cloudflare' },
  { name: 'Docker', icon: 'i-simple-icons-docker' },
  { name: 'OpenAI', icon: 'i-simple-icons-openai' },
  { name: 'Claude Code', icon: 'i-simple-icons-claudecode' },
  { name: 'GitHub', icon: 'i-simple-icons-github' },
  { name: 'GitLab', icon: 'i-simple-icons-gitlab' },
]
</script>

<template>
  <section
    id="hero"
    class="border-surface relative scroll-mt-20.75 overflow-clip rounded-[20px] border-2 bg-white px-6 pt-14.5 pb-7.5 sm:min-h-126.5 sm:px-10.5 sm:pt-10 sm:pb-10.75"
  >
    <div
      class="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-[#ebf9e7] px-3 py-1.75 text-[11px] whitespace-nowrap text-[#3f6c38] sm:top-4.5 sm:right-5"
    >
      <span
        class="size-1.75 rounded-full bg-[#51af3e] motion-safe:animate-pulse"
        aria-hidden="true"
      />Open for 2 new projects
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
        <p class="text-muted text-sm">Product Designer</p>
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
        href="#contact"
        >Get in touch</a
      >
      <a
        class="border-line text-ink focus-visible:outline-ink inline-flex min-h-11 items-center justify-center rounded-[11px] border bg-white px-4.75 text-[13px] font-medium whitespace-nowrap shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
        href="#projects"
        >See my Projects</a
      >
    </div>
    <div class="mt-12 sm:mt-13">
      <p class="mb-5 text-[13px] font-medium">Tools I work with</p>
      <ul class="sr-only">
        <li v-for="technology in technologies" :key="technology.name">{{ technology.name }}</li>
      </ul>
      <UMarquee
        :repeat="2"
        pause-on-hover
        aria-hidden="true"
        class="text-ink py-2 [--duration:45s] [--gap:--spacing(5)] motion-reduce:overflow-x-auto sm:[--gap:--spacing(6)]"
        :ui="{
          root: 'before:w-8 before:from-white after:w-8 after:from-white motion-reduce:before:hidden motion-reduce:after:hidden',
          content: 'motion-reduce:[&:not(:first-child)]:hidden',
        }"
      >
        <div
          v-for="technology in technologies"
          :key="technology.name"
          class="flex shrink-0 items-center gap-2.5"
        >
          <UIcon :name="technology.icon" class="size-7 shrink-0" />
          <span class="text-[13px] font-medium whitespace-nowrap">{{ technology.name }}</span>
        </div>
      </UMarquee>
    </div>
  </section>
</template>
