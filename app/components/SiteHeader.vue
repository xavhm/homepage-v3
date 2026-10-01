<script setup lang="ts">
const nav = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
]

const localTime = ref('--:--:--')
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const update = () => {
    localTime.value = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Paris',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(new Date())
  }
  update()
  timer = setInterval(update, 1000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <header
    class="site-header sticky z-50 flex min-h-16 items-center justify-center gap-4 rounded-[20px] px-3 min-[741px]:justify-between min-[741px]:px-6"
  >
    <div
      class="hidden items-baseline gap-1.5 text-xs tracking-[-0.02em] whitespace-nowrap min-[741px]:flex"
    >
      <strong class="font-semibold">{{ localTime }}</strong
      ><span class="text-muted text-[11px]">La Rochelle</span>
    </div>
    <nav
      class="flex w-full items-center justify-between gap-1 overflow-x-auto text-xs font-medium whitespace-nowrap min-[741px]:w-auto min-[741px]:gap-5.5 min-[741px]:overflow-visible min-[741px]:text-[13px]"
      aria-label="Main navigation"
    >
      <a
        v-for="item in nav"
        :key="item.label"
        :href="item.href"
        class="focus-visible:outline-ink flex min-h-11 shrink-0 items-center px-1.5 transition-opacity hover:opacity-50 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 min-[741px]:px-0"
        >{{ item.label }}</a
      >
    </nav>
    <div class="hidden gap-2 min-[741px]:flex" role="group" aria-label="Social links">
      <a
        class="focus-visible:outline-ink grid size-7.75 place-items-center rounded-[9px] bg-white text-[15px] shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        ><UIcon name="i-simple-icons-x"
      /></a>
      <a
        class="focus-visible:outline-ink grid size-7.75 place-items-center rounded-[9px] bg-white text-[15px] shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        ><UIcon name="i-simple-icons-linkedin"
      /></a>
      <a
        class="focus-visible:outline-ink grid size-7.75 place-items-center rounded-[9px] bg-white text-[15px] shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        ><UIcon name="i-simple-icons-github"
      /></a>
    </div>
  </header>
</template>
