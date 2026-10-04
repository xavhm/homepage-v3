<script setup lang="ts">
withDefaults(defineProps<{ name?: string; title?: string; image?: string }>(), {
  name: 'Xavier Hernandez',
  title: 'Senior Frontend & Product Engineer',
  image: '/portfolio/profile.jpg',
})

// Bind text directly so template indentation cannot become a leading space in Takumi.
const introduction =
  'I lead frontend architecture and delivery for production applications. Before engineering, I spent ten years in product operations, helping me connect technical decisions to user needs and business constraints.'
</script>

<template>
  <div
    class="text-ink relative flex h-full w-full flex-col justify-center overflow-hidden bg-white p-18 font-sans"
    :style="{ boxShadow: 'inset 0 0 4rem 0.5rem #ebebed' }"
  >
    <div class="mt-6 flex items-center gap-7">
      <img
        :src="image"
        :alt="name"
        width="104"
        height="104"
        class="size-26 shrink-0 rounded-full object-cover"
      />
      <div class="flex flex-col gap-1.5">
        <p class="m-0 text-[1.75rem] font-medium tracking-[-0.04em]">{{ name }}</p>
        <p class="m-0 text-[1.375rem] text-(--color-muted)">{{ title }}</p>
      </div>
    </div>
    <h1 class="mt-8 mb-0 max-w-230 text-[2.75rem] leading-[1.12] font-normal tracking-[-0.058em]">
      I build digital experiences with technical depth and product judgment.
      <img
        src="/favicon.svg"
        alt=""
        width="44"
        height="44"
        class="ml-2 inline-block size-11 rotate-12 pt-1"
      />
    </h1>
    <p
      class="mt-5 mb-0 max-w-237.5 text-[1.375rem] leading-[1.65] tracking-tight text-[#5e5e62]"
      v-text="introduction"
    />
  </div>
</template>
