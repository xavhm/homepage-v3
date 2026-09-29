<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section id="projects" class="projects-section panel section-panel">
    <SectionHeading
      title="Case Studies & Projects"
      description="A selection of projects showcasing strategy, design thinking, and measurable impact."
    />
    <div class="project-grid">
      <ProjectCard v-for="project in projects.slice(0, 4)" :key="project.slug" :project="project" />
    </div>
    <NuxtLink class="button button-light all-projects" to="/projects">See All Projects</NuxtLink>
  </section>
</template>
