<script setup lang="ts">
import type { PortfolioProject } from '~/data/projects'
const props = defineProps<{ project: PortfolioProject }>()
const image = useImage()
let coverPreloaded = false

function preloadCover() {
  if (
    !document.startViewTransition ||
    coverPreloaded ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
    return
  coverPreloaded = true
  // Warm the responsive hero source while Nuxt prefetches the destination route.
  const source = image.getSizes(props.project.cover, {
    sizes: '320:100vw 480:100vw 639:100vw sm:662px',
    densities: 'x1 x2',
    modifiers: { format: 'avif', width: 1800, height: 1348 },
  })
  const cover = new Image()
  cover.sizes = source.sizes ?? ''
  cover.srcset = source.srcset ?? ''
  cover.src = source.src ?? props.project.cover
}
</script>

<template>
  <NuxtLink
    class="group focus-visible:outline-inverted block min-w-0 focus-visible:rounded-[15px] focus-visible:outline-2 focus-visible:outline-offset-4"
    :to="`/projects/${project.slug}`"
    :aria-label="project.cardLabel"
    @pointerenter="preloadCover"
    @focus="preloadCover"
  >
    <div class="bg-accented aspect-[1.325] overflow-clip rounded-[15px] max-sm:aspect-[1.33]">
      <NuxtPicture
        :data-project-cover="project.key"
        format="avif,webp"
        class="block size-full"
        :img-attrs="{
          class:
            'size-full object-cover transition-transform duration-450 ease-out motion-safe:group-hover:scale-[1.045]',
        }"
        :src="project.cover"
        alt=""
        loading="lazy"
        width="900"
        height="674"
        sizes="320:100vw 480:100vw 639:100vw sm:320px"
        densities="x1 x2"
      />
    </div>
    <p class="text-muted mt-3.5 mb-1 text-[13px]">{{ project.category }}</p>
    <h3 class="text-base leading-tight font-medium tracking-[-0.04em]">{{ project.title }}</h3>
    <p class="text-muted mt-2 text-sm leading-relaxed">{{ project.description }}</p>
  </NuxtLink>
</template>
