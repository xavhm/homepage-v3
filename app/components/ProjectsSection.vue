<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section
    id="projects"
    class="border-surface bg-surface scroll-mt-24 overflow-clip rounded-[20px] border px-5 pt-8.5 pb-6 sm:px-7.75 sm:pt-10.5 sm:pb-8"
  >
    <SectionHeading
      title="Case Studies & Projects"
      description="A selection of projects showcasing strategy, design thinking, and measurable impact."
    />
    <div class="grid grid-cols-1 gap-x-5.5 gap-y-9 max-sm:gap-y-4.5 sm:grid-cols-2">
      <ProjectCard v-for="project in projects.slice(0, 4)" :key="project.slug" :project="project" />
    </div>
    <NuxtLink
      class="border-line text-ink focus-visible:outline-ink mx-auto mt-9.5 flex min-h-11 w-fit items-center justify-center rounded-[11px] border bg-white px-4.75 text-[13px] font-medium whitespace-nowrap shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
      to="/projects"
      >See All Projects</NuxtLink
    >
  </section>
</template>
