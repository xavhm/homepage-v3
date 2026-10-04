<script setup lang="ts">
withDefaults(defineProps<{ name?: string; title?: string }>(), {
  name: 'Xavier Hernandez-Martinez',
  title: 'Frontend & Product Engineer',
})
</script>

<template>
  <div class="bg-surface text-ink flex h-full w-full flex-col justify-between p-20">
    <p class="m-0 text-3xl">Portfolio</p>
    <div class="flex flex-col gap-6">
      <h1 class="m-0 text-6xl font-bold">{{ name }}</h1>
      <p class="m-0 text-4xl text-[#69696d]">{{ title }}</p>
    </div>
    <div class="bg-ink h-2 w-24" />
  </div>
</template>
