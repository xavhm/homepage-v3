<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section
    id="projects"
    class="border-surface bg-surface scroll-mt-22.75 overflow-clip rounded-[20px] border px-5 pt-8.5 pb-6 sm:px-7.75 sm:pt-10.5 sm:pb-8"
  >
    <SectionHeading
      title="Selected work"
      description="Products and technical challenges that show how I connect frontend engineering with operational needs."
    />
    <ul role="list" class="grid grid-cols-1 gap-x-5.5 gap-y-9 max-sm:gap-y-4.5 sm:grid-cols-2">
      <li v-for="project in projects" :key="project.slug">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </section>
</template>
