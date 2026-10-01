<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section
    id="projects"
    class="border-surface bg-surface scroll-mt-22.75 overflow-clip rounded-[20px] border px-5 pt-8.5 pb-6 sm:px-7.75 sm:pt-10.5 sm:pb-8"
  >
    <SectionHeading
      title="Case Studies & Projects"
      description="A selection of projects showcasing strategy, design thinking, and measurable impact."
    />
    <ul role="list" class="grid grid-cols-1 gap-x-5.5 gap-y-9 max-sm:gap-y-4.5 sm:grid-cols-2">
      <li v-for="project in projects" :key="project.slug">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </section>
</template>
