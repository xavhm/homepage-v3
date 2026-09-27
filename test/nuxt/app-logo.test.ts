import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'

const Greeting = defineComponent({
  setup: () => () => h('p', 'Nuxt is ready'),
})

describe('Nuxt test environment', () => {
  it('renders with the Nuxt test environment', async () => {
    const wrapper = await mountSuspended(Greeting)

    expect(wrapper.text()).toBe('Nuxt is ready')
  })
})
