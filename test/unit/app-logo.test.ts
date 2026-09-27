import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'

const Greeting = defineComponent({
  props: { name: { type: String, required: true } },
  setup: (props) => () => h('p', `Hello, ${props.name}!`),
})

describe('Vue Test Utils with happy-dom', () => {
  it('renders a Vue component', () => {
    const wrapper = mount(Greeting, { props: { name: 'Nuxt' } })

    expect(wrapper.text()).toBe('Hello, Nuxt!')
  })
})
