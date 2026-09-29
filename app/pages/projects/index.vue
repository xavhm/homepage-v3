<script setup lang="ts">
import { projects } from '~/data/projects'
useSeoMeta({
  title: 'Projects — Calib Harrison',
  description: 'Case studies and projects by Calib Harrison.',
})
</script>

<template>
  <div
    class="overflow-clip rounded-b-[20px] border border-[#ededf0] bg-white px-5 pt-7 pb-9 sm:px-7.75 sm:pt-7.5"
  >
    <h1 class="sr-only">Projects</h1>
    <ul role="list" class="grid grid-cols-1 gap-x-5.5 gap-y-9 max-sm:gap-y-4.5 sm:grid-cols-2">
      <li v-for="project in projects" :key="project.slug">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </div>
</template>
