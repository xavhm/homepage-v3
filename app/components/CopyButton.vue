<script setup lang="ts">
const props = defineProps<{ label: string; value: string; icon: string; copyLabel: string }>()

const status = ref<'idle' | 'copied' | 'error'>('idle')
const copying = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copy() {
  if (copying.value) return
  copying.value = true
  clearTimeout(resetTimer)
  status.value = 'idle'

  try {
    await navigator.clipboard.writeText(props.value)
    status.value = 'copied'
  } catch {
    status.value = 'error'
  } finally {
    copying.value = false
    resetTimer = setTimeout(() => {
      status.value = 'idle'
    }, 2000)
  }
}

onUnmounted(() => clearTimeout(resetTimer))
</script>

<template>
  <div class="relative">
    <button
      type="button"
      :aria-label="copyLabel"
      :disabled="copying"
      class="bg-surface text-muted focus-visible:outline-ink hover:bg-line inline-grid cursor-pointer place-items-center overflow-hidden rounded-full px-3.5 py-2 text-[0.8125rem] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-wait motion-reduce:transition-none"
      @click="copy"
    >
      <span
        aria-hidden="true"
        class="col-start-1 row-start-1 inline-flex items-center gap-2 transition-transform duration-300 motion-reduce:transition-none"
        :class="status === 'idle' ? 'translate-y-0' : 'translate-y-11'"
      >
        <UIcon :name="icon" class="size-4 shrink-0" />{{ label }}
      </span>
      <span
        aria-hidden="true"
        class="col-start-1 row-start-1 inline-flex items-center gap-2 transition-transform duration-300 motion-reduce:transition-none"
        :class="status === 'idle' ? 'translate-y-11' : 'translate-y-0'"
      >
        <UIcon
          :name="status === 'error' ? 'i-lucide-circle-alert' : 'i-lucide-check'"
          class="size-4"
        />
        {{ status === 'error' ? 'Copy failed' : 'Copied !' }}
      </span>
    </button>
    <span role="status" class="sr-only">
      {{
        status === 'copied'
          ? `${label} copied to clipboard.`
          : status === 'error'
            ? 'Could not copy. Please try again.'
            : ''
      }}
    </span>
  </div>
</template>
