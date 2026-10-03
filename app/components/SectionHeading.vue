<script setup lang="ts">
defineProps<{ title: string; description?: string }>()
</script>

<template>
  <div class="mb-8.5 flex flex-col items-start gap-2 text-left">
    <h2
      class="text-[29px] leading-[1.1] font-normal tracking-[-0.06em] text-balance sm:text-[32px]"
    >
      {{ title }}
    </h2>
    <p v-if="description" class="text-muted text-[13px] leading-normal">
      {{ description }}
    </p>
  </div>
</template>
