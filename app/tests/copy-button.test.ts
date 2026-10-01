import { mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vite-plus/test'

import { CopyButton } from '#components'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

describe('CopyButton', () => {
  it('copies the value and resets the success feedback', async () => {
    const writeText = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue()
    const wrapper = await mountSuspended(CopyButton, {
      props: {
        label: 'contact@calib.com',
        value: 'contact@calib.com',
        icon: 'i-lucide-mail',
        copyLabel: 'Copy email address',
      },
    })
    vi.useFakeTimers()

    await wrapper.get('button').trigger('click')
    await flushPromises()

    expect(writeText).toHaveBeenCalledWith('contact@calib.com')
    expect(wrapper.get('[role="status"]').text()).toContain('copied to clipboard')
    expect(wrapper.get('button').attributes('aria-label')).toBe('Copy email address')

    await vi.advanceTimersByTimeAsync(2000)
    expect(wrapper.get('[role="status"]').text()).toBe('')
    wrapper.unmount()
  })

  it('reports clipboard failure without claiming success and allows retry', async () => {
    const writeText = vi
      .spyOn(navigator.clipboard, 'writeText')
      .mockRejectedValueOnce(new Error('Clipboard denied'))
      .mockResolvedValueOnce()
    const wrapper = await mountSuspended(CopyButton, {
      props: {
        label: '+(123) 254 587 00',
        value: '+12325458700',
        icon: 'i-lucide-smartphone',
        copyLabel: 'Copy phone number',
      },
    })

    await wrapper.get('button').trigger('click')
    await flushPromises()
    expect(wrapper.get('[role="status"]').text()).toContain('Could not copy')

    await wrapper.get('button').trigger('click')
    await flushPromises()
    expect(writeText).toHaveBeenLastCalledWith('+12325458700')
    expect(wrapper.get('[role="status"]').text()).toContain('copied to clipboard')
    wrapper.unmount()
  })
})
