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
      timeZone: 'America/Los_Angeles',
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
  <header class="site-header">
    <div class="site-time">
      <strong>{{ localTime }}</strong
      ><span>Los Angeles</span>
    </div>
    <nav class="main-nav" aria-label="Main navigation">
      <a v-for="item in nav" :key="item.label" :href="item.href">{{ item.label }}</a>
    </nav>
    <div class="socials" aria-label="Social links">
      <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X"
        ><UIcon name="i-simple-icons-x"
      /></a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        ><UIcon name="i-simple-icons-linkedin"
      /></a>
      <a
        href="https://dribbble.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Dribbble"
        ><UIcon name="i-simple-icons-dribbble"
      /></a>
      <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" aria-label="Behance"
        ><UIcon name="i-simple-icons-behance"
      /></a>
    </div>
  </header>
</template>
