<script setup lang="ts">
import type { PortfolioProject } from '~/data/projects'
defineProps<{ project: PortfolioProject }>()
</script>

<template>
  <NuxtLink
    class="group focus-visible:outline-ink block min-w-0 focus-visible:rounded-[15px] focus-visible:outline-2 focus-visible:outline-offset-4"
    :to="`/projects/${project.slug}`"
  >
    <div class="aspect-[1.325] overflow-clip rounded-[15px] bg-[#ddd] max-sm:aspect-[1.33]">
      <NuxtPicture
        format="avif,webp"
        class="block size-full"
        :img-attrs="{
          class:
            'size-full object-cover transition-transform duration-450 ease-out motion-safe:group-hover:scale-[1.045]',
          style: { viewTransitionName: `project-${project.key}` },
        }"
        :src="project.cover"
        alt=""
        loading="lazy"
        width="900"
        height="674"
        sizes="320:100vw 480:100vw 639:100vw sm:320px"
        densities="x1 x2"
      />
    </div>
    <p class="text-muted mt-3.5 mb-1 text-[13px]">{{ project.category }}</p>
    <h3 class="text-base leading-tight font-medium tracking-[-0.04em]">{{ project.title }}</h3>
  </NuxtLink>
</template>
