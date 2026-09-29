<script setup lang="ts">
import { projects } from '~/data/projects'

const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === route.params.slug))
if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Project not found' })

useSeoMeta({
  title: () => `${project.value?.title} — Calib Harrison`,
  description: () => project.value?.description,
})
</script>

<template>
  <article v-if="project" class="project-detail panel">
    <div class="project-meta">
      <span>{{ project.category }}</span
      ><span aria-hidden="true">·</span><span>{{ project.dates }}</span>
    </div>
    <h1>{{ project.title }}</h1>
    <p class="project-intro">{{ project.description }}</p>
    <a
      class="button button-light preview-button"
      href="https://apechain.com/"
      target="_blank"
      rel="noopener noreferrer"
      >Preview Project</a
    >
    <img
      class="detail-image detail-cover"
      :src="project.cover"
      :alt="project.title"
      :style="{ viewTransitionName: `project-${project.key}` }"
      width="1800"
      height="1348"
      fetchpriority="high"
    />
    <div class="detail-copy">
      <p class="eyebrow">Ideation &amp; Conceptual</p>
      <h2>{{ project.conceptTitle }}</h2>
      <p>{{ project.conceptText }}</p>
    </div>
    <div class="detail-image-grid">
      <img
        v-for="(image, index) in project.detailImages"
        :key="image"
        class="detail-image"
        :src="image"
        :alt="`${project.title} visual ${index + 2}`"
        loading="lazy"
        width="1800"
        height="1348"
      />
    </div>
    <div class="detail-copy">
      <p class="eyebrow">Production &amp; Execution</p>
      <h2>{{ project.executionTitle }}</h2>
      <p>{{ project.executionText }}</p>
    </div>
    <NuxtLink class="button button-light back-projects" to="/projects"
      ><UIcon name="i-lucide-arrow-left" /> All Projects</NuxtLink
    >
  </article>
</template>
