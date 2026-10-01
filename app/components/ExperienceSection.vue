<script setup lang="ts">
import { experienceGroups } from '~/data/experience'

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

function formatDate(date: string) {
  return date.length === 7 ? dateFormatter.format(new Date(`${date}-01T00:00:00Z`)) : date
}
</script>

<template>
  <section
    id="work"
    class="border-line bg-default scroll-mt-24 overflow-clip rounded-[20px] border px-6 py-9 sm:px-9.75 sm:py-12"
  >
    <SectionHeading
      title="Experience"
      description="Frontend engineering, grounded in a decade of product operations."
    />

    <div class="grid gap-9">
      <div v-for="group in experienceGroups" :key="group.title">
        <h3 class="text-muted mb-6 text-[0.8125rem] font-normal">{{ group.title }}</h3>
        <ol role="list" class="grid gap-7">
          <li
            v-for="(entry, entryIndex) in group.entries"
            :key="`${entry.organization}-${entry.startDate}`"
            class="relative grid gap-2 pl-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-5"
          >
            <span
              aria-hidden="true"
              class="border-line absolute top-1.5 left-0 border-l"
              :class="entryIndex === group.entries.length - 1 ? 'bottom-0' : '-bottom-7'"
            />
            <span
              aria-hidden="true"
              class="bg-default border-muted absolute top-1.5 -left-0.75 size-1.75 rounded-full border"
            />
            <p class="text-muted text-xs leading-5">
              <time :datetime="entry.startDate">{{ formatDate(entry.startDate) }}</time>
              <template v-if="entry.startDate !== entry.endDate">
                <span> – </span>
                <span v-if="entry.endDate === 'Present'">Present</span>
                <time v-else :datetime="entry.endDate">{{ formatDate(entry.endDate) }}</time>
              </template>
            </p>
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h4 class="text-ink text-base leading-5 font-medium tracking-[-0.04em]">
                  {{ entry.organization }}
                </h4>
                <span
                  v-if="entry.endDate === 'Present'"
                  class="bg-surface text-muted rounded-full px-2 py-0.5 text-[0.6875rem]"
                  >Current</span
                >
              </div>
              <p class="mt-1.5 text-[0.8125rem] leading-relaxed font-medium">
                {{ entry.position }}
              </p>
              <!-- Unverified locations stay in the source data until confirmed. -->
              <p v-if="entry.location !== 'To confirm'" class="text-muted mt-1 text-xs">
                {{ entry.location }}
              </p>
              <p class="text-muted mt-3 text-[0.8125rem] leading-relaxed">
                {{ entry.description }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
