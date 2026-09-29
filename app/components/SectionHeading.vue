<script setup lang="ts">
defineProps<{ title: string; description: string }>()
</script>

<template>
  <div class="section-heading">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>
