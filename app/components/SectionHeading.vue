<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>

<template>
  <div
    class="mb-8.5 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between md:gap-6"
  >
    <h2
      class="max-w-[320px] text-[29px] leading-[1.1] font-normal tracking-[-0.06em] text-balance sm:text-[32px]"
    >
      {{ title }}
    </h2>
    <p class="text-muted max-w-67.5 text-[13px] leading-normal max-md:max-w-full">
      {{ description }}
    </p>
  </div>
</template>
