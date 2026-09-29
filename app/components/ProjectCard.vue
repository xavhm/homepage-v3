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
      <img
        class="size-full object-cover transition-transform duration-450 ease-out motion-safe:group-hover:scale-[1.045]"
        :src="project.cover"
        alt=""
        :style="{ viewTransitionName: `project-${project.key}` }"
        loading="lazy"
        width="900"
        height="674"
      />
    </div>
    <p class="text-muted mt-3.5 mb-1 text-[13px]">{{ project.category }}</p>
    <h3 class="text-base leading-tight font-medium tracking-[-0.04em]">{{ project.title }}</h3>
  </NuxtLink>
</template>
