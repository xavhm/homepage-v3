<script setup lang="ts">
const roles = ['Frontend Engineer', 'Product Engineer', 'Frontend Technical Owner']
const activeRole = ref(0)
let roleTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  roleTimer = setInterval(() => {
    activeRole.value = (activeRole.value + 1) % roles.length
  }, 3000)
})
onUnmounted(() => clearInterval(roleTimer))

const technologies = [
  { name: 'CSS', icon: 'i-simple-icons-css' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss' },
  { name: 'Vue', icon: 'i-simple-icons-vuedotjs' },
  { name: 'React', icon: 'i-simple-icons-react' },
  { name: 'Nuxt', icon: 'i-simple-icons-nuxt' },
  { name: 'Next.js', icon: 'i-simple-icons-nextdotjs' },
  { name: 'Cloudflare', icon: 'i-simple-icons-cloudflare' },
  { name: 'Docker', icon: 'i-simple-icons-docker' },
  { name: 'OpenAI', icon: 'i-simple-icons-openai' },
  { name: 'Claude Code', icon: 'i-simple-icons-claudecode' },
  { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
  { name: 'GitHub', icon: 'i-simple-icons-github' },
  { name: 'GitLab', icon: 'i-simple-icons-gitlab' },
]
</script>

<template>
  <section
    id="hero"
    class="border-muted bg-elevated relative scroll-mt-20.75 overflow-clip rounded-[20px] border px-6 pt-14.5 pb-7.5 sm:min-h-126.5 sm:px-10.5 sm:pt-10 sm:pb-10.75"
  >
    <div
      class="mb-6 flex w-fit max-w-full items-center gap-2 rounded-2xl bg-(--portfolio-status-bg) px-3 py-1.75 text-xs leading-relaxed text-(--portfolio-status-text) sm:mb-0 sm:ml-auto sm:rounded-full"
    >
      <span
        class="size-1.75 shrink-0 rounded-full bg-(--portfolio-status-dot) motion-safe:animate-pulse"
        aria-hidden="true"
      />Open to new opportunities
    </div>
    <div class="mb-6 flex items-center gap-4.75 sm:mb-7.5">
      <NuxtPicture
        format="avif,webp"
        class="block size-17 shrink-0 sm:size-21.5"
        :img-attrs="{ class: 'size-full rounded-full object-cover', fetchpriority: 'high' }"
        src="/portfolio/profile.jpg"
        width="86"
        height="86"
        alt="Xavier Hernandez"
        sizes="68px sm:86px"
        densities="x1 x2"
      />
      <div>
        <p class="mb-0.75 text-[17px] font-medium tracking-[-0.04em]">Xavier Hernandez</p>
        <div class="text-muted flex items-center gap-2 text-sm">
          <p class="sr-only">{{ roles.join(', ') }}</p>
          <p aria-hidden="true" class="motion-safe:hidden">{{ roles[0] }}</p>
          <div aria-hidden="true" class="hidden overflow-hidden motion-safe:grid">
            <span
              v-for="(role, index) in roles"
              :key="role"
              class="col-start-1 row-start-1 transition-transform duration-300 motion-reduce:transition-none"
              :class="index === activeRole ? 'translate-y-0' : 'translate-y-11'"
              >{{ role }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <h1
      class="mb-3.5 max-w-130 text-[clamp(1.7rem,1.4rem+1vw,1.75rem)] leading-[1.12] font-normal tracking-[-0.058em] text-balance"
    >
      I build digital experiences with engineering depth and product judgment.
      <span class="inline-block rotate-12">👾</span>
    </h1>
    <p class="text-toned max-w-137.5 text-sm leading-[1.65] tracking-tight sm:text-[15px]">
      I lead frontend architecture and delivery for production applications. Before engineering, I
      spent ten years in product operations, helping me connect technical decisions to user needs
      and business constraints.
    </p>
    <div class="mt-6.5 flex flex-wrap gap-2.5">
      <a
        class="focus-visible:outline-inverted bg-inverted text-inverted inline-flex min-h-11 items-center justify-center rounded-[11px] border border-transparent px-4.75 text-[13px] font-medium whitespace-nowrap shadow-md transition-all hover:-translate-y-0.5 hover:bg-(--portfolio-action-hover) focus-visible:outline-2 focus-visible:outline-offset-2"
        href="#contact"
        >Get in touch</a
      >
      <a
        class="border-default dark:border-inverted text-highlighted focus-visible:outline-inverted bg-elevated inline-flex min-h-11 items-center justify-center rounded-[11px] border px-4.75 text-[13px] font-medium whitespace-nowrap shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
        href="#projects"
        >Explore my work</a
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
        class="text-highlighted py-2 [--duration:45s] [--gap:--spacing(5)] motion-reduce:overflow-x-auto sm:[--gap:--spacing(6)]"
        :ui="{
          root: 'before:w-8 before:from-elevated after:w-8 after:from-elevated motion-reduce:before:hidden motion-reduce:after:hidden',
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
