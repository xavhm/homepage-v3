<script setup lang="ts">
import { projects } from '~/data/projects'
useSeoMeta({
  title: 'Projects — Calib Harrison',
  description: 'Case studies and projects by Calib Harrison.',
})
</script>

<template>
  <div class="projects-page panel">
    <h1 class="sr-only">Projects</h1>
    <div class="project-grid">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </div>
</template>
