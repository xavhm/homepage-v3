<script setup lang="ts">
import type { PortfolioProject } from '~/data/projects'
defineProps<{ project: PortfolioProject }>()
</script>

<template>
  <NuxtLink
    class="project-card"
    :to="`/projects/${project.slug}`"
    :aria-label="`${project.category}: ${project.title}`"
  >
    <div class="project-image-wrap">
      <img
        :src="project.cover"
        :alt="project.title"
        :style="{ viewTransitionName: `project-${project.key}` }"
        loading="lazy"
        width="900"
        height="674"
      />
    </div>
    <p class="project-category">{{ project.category }}</p>
    <h3>{{ project.title }}</h3>
  </NuxtLink>
</template>
