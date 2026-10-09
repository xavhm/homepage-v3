<script setup lang="ts">
import { projects } from '~/data/projects'
import { portfolioSeo } from '~/data/seo'

const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === route.params.slug))
if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Project not found' })

const title = computed(() => `${project.value?.title} — ${portfolioSeo.name}`)

useSeoMeta({
  title,
  description: () => project.value?.description,
  ogTitle: title,
  ogDescription: () => project.value?.description,
  twitterTitle: title,
  twitterDescription: () => project.value?.description,
})
</script>

<template>
  <article
    v-if="project"
    class="border-default bg-elevated overflow-clip rounded-[20px] border px-5 pt-7 sm:px-7.75 sm:pt-8 sm:pb-0"
  >
    <NuxtLink
      class="border-default text-highlighted focus-visible:outline-inverted bg-elevated dark:border-inverted mt-3 mb-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-[11px] border px-4.75 text-[13px] font-medium whitespace-nowrap shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
      to="/#projects"
      ><UIcon name="i-lucide-arrow-left" /> Back to projects</NuxtLink
    >
    <div class="text-muted flex flex-wrap gap-2.75 text-xs">
      <span>{{ project.category }}</span>
    </div>
    <h1
      class="mt-4.25 mb-2.5 text-[clamp(1.5rem,1.25rem+1vw,1.625rem)] leading-[1.2] font-normal tracking-[-0.055em] text-balance wrap-break-word"
    >
      {{ project.title }}
    </h1>
    <p class="text-muted max-w-150 text-[13px] leading-[1.6]">{{ project.description }}</p>
    <NuxtPicture
      :data-project-cover="project.key"
      format="avif,webp"
      class="mt-10 block w-full"
      :img-attrs="{
        class: 'aspect-[1.5] w-full rounded-[0.9375rem] object-cover',
        fetchpriority: 'high',
      }"
      :src="project.cover"
      :alt="project.title"
      loading="eager"
      width="1800"
      height="1348"
      sizes="320:100vw 480:100vw 639:100vw sm:662px"
      densities="x1 x2"
    />
    <div class="my-12">
      <p class="text-muted mb-5 text-[13px]">Context &amp; challenge</p>
      <h2
        class="mb-4.5 max-w-152.5 text-[clamp(1.5rem,1.2rem+1vw,1.75rem)] leading-tight font-medium tracking-[-0.055em] text-balance wrap-break-word"
      >
        {{ project.contextTitle }}
      </h2>
      <p class="text-muted max-w-150 text-sm leading-[1.65]">{{ project.contextText }}</p>
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
      <p class="text-muted mb-5 text-[13px]">My contribution</p>
      <h2
        class="mb-4.5 max-w-152.5 text-[clamp(1.5rem,1.2rem+1vw,1.75rem)] leading-tight font-medium tracking-[-0.055em] text-balance wrap-break-word"
      >
        {{ project.contributionTitle }}
      </h2>
      <p class="text-muted max-w-150 text-sm leading-[1.65]">{{ project.contributionText }}</p>
    </div>
  </article>
</template>
