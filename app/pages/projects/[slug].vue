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
  <article
    v-if="project"
    class="overflow-clip rounded-[20px] border border-[#ededf0] bg-white px-5 pt-7 pb-9 sm:px-7.75 sm:pt-11.5 sm:pb-12.5"
  >
    <div class="text-muted flex flex-wrap gap-2.75 text-xs">
      <span>{{ project.category }}</span
      ><span aria-hidden="true">·</span><span>{{ project.dates }}</span>
    </div>
    <h1
      class="mt-4.25 mb-2.5 text-[clamp(1.5rem,1.25rem+1vw,1.625rem)] leading-[1.2] font-normal tracking-[-0.055em] text-balance wrap-break-word"
    >
      {{ project.title }}
    </h1>
    <p class="text-muted max-w-150 text-[13px] leading-[1.6]">{{ project.description }}</p>
    <a
      class="border-line text-ink focus-visible:outline-ink mt-6.5 inline-flex min-h-11 items-center justify-center rounded-[11px] border bg-white px-4.75 text-[13px] font-medium whitespace-nowrap shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
      href="https://apechain.com/"
      target="_blank"
      rel="noopener noreferrer"
      >Preview Project</a
    >
    <NuxtPicture
      format="avif,webp"
      class="mt-10 block w-full"
      :img-attrs="{
        class: 'aspect-[1.5] w-full rounded-[0.9375rem] object-cover',
        style: { viewTransitionName: `project-${project.key}` },
        fetchpriority: 'high',
      }"
      :src="project.cover"
      :alt="project.title"
      width="1800"
      height="1348"
      sizes="320:100vw 480:100vw 639:100vw sm:662px"
      densities="x1 x2"
    />
    <div class="my-12">
      <p class="text-muted mb-5 text-[13px]">Ideation &amp; Conceptual</p>
      <h2
        class="mb-4.5 max-w-152.5 text-[clamp(1.5rem,1.2rem+1vw,1.75rem)] leading-tight font-medium tracking-[-0.055em] text-balance wrap-break-word"
      >
        {{ project.conceptTitle }}
      </h2>
      <p class="text-muted max-w-150 text-sm leading-[1.65]">{{ project.conceptText }}</p>
    </div>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <NuxtPicture
        format="avif,webp"
        v-for="(image, index) in project.detailImages"
        :key="image"
        class="block w-full"
        :img-attrs="{ class: 'aspect-[1.15] w-full rounded-[0.9375rem] object-cover' }"
        :src="image"
        :alt="`${project.title} visual ${index + 2}`"
        loading="lazy"
        width="1800"
        height="1348"
        sizes="320:100vw 480:100vw 639:100vw sm:325px"
        densities="x1 x2"
      />
    </div>
    <div class="my-12">
      <p class="text-muted mb-5 text-[13px]">Production &amp; Execution</p>
      <h2
        class="mb-4.5 max-w-152.5 text-[clamp(1.5rem,1.2rem+1vw,1.75rem)] leading-tight font-medium tracking-[-0.055em] text-balance wrap-break-word"
      >
        {{ project.executionTitle }}
      </h2>
      <p class="text-muted max-w-150 text-sm leading-[1.65]">{{ project.executionText }}</p>
    </div>
    <NuxtLink
      class="border-line text-ink focus-visible:outline-ink mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-[11px] border bg-white px-4.75 text-[13px] font-medium whitespace-nowrap shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
      to="/#projects"
      ><UIcon name="i-lucide-arrow-left" /> Back</NuxtLink
    >
  </article>
</template>
