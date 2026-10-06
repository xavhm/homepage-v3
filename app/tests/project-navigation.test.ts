import { afterEach, describe, expect, it, vi } from 'vite-plus/test'

import { useNuxtApp, useRouter } from '#app'
import routerOptions from '~/router.options'
import {
  finishProjectTransition,
  projectTransitionKey,
  setProjectTransitionFinish,
} from '~/utils/project-transition'

afterEach(() => {
  setProjectTransitionFinish()
  vi.restoreAllMocks()
})

describe('Project navigation', () => {
  it('only pairs a cover for home/project navigation to the projects section', () => {
    const detail = { path: '/projects/youbook-tourism-commerce', hash: '' }
    expect(projectTransitionKey(detail, { path: '/' })).toBe('youbook')
    expect(projectTransitionKey({ path: '/', hash: '#projects' }, detail)).toBe('youbook')
    expect(projectTransitionKey({ path: '/', hash: '#hero' }, detail)).toBeUndefined()
    expect(projectTransitionKey({ path: '/', hash: '#contact' }, detail)).toBeUndefined()
    expect(
      projectTransitionKey(detail, { path: '/projects/internal-erp-workflows' }),
    ).toBeUndefined()
  })

  it('restores history before releasing the snapshot, even with a projects hash', async () => {
    useRouter().currentRoute.value = { ...useRouter().currentRoute.value, fullPath: '/#projects' }
    vi.spyOn(useNuxtApp().hooks, 'hookOnce').mockImplementation((_name, callback) => {
      ;(callback as () => void)()
      return () => {}
    })
    const scroll = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    const snapshot = vi.fn<() => Promise<void>>(async () => {
      expect(scroll).toHaveBeenCalledWith({ left: 0, top: 1234, behavior: 'instant' })
    })
    setProjectTransitionFinish(snapshot)
    await routerOptions.scrollBehavior(
      { path: '/', hash: '#projects', fullPath: '/#projects' } as never,
      { path: '/projects/youbook-tourism-commerce', matched: [{}] } as never,
      { left: 0, top: 1234 },
    )
    expect(snapshot).toHaveBeenCalledOnce()
  })

  it('returns Home to the top without a smooth scroll', async () => {
    useRouter().currentRoute.value = { ...useRouter().currentRoute.value, fullPath: '/' }
    vi.spyOn(useNuxtApp().hooks, 'hookOnce').mockImplementation((_name, callback) => {
      ;(callback as () => void)()
      return () => {}
    })
    const scroll = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    await routerOptions.scrollBehavior(
      { path: '/', hash: '', fullPath: '/' } as never,
      { path: '/projects/youbook-tourism-commerce', matched: [{}] } as never,
      null,
    )
    expect(scroll).toHaveBeenCalledWith({ left: 0, top: 0, behavior: 'instant' })
  })

  it('clears transition coordination after completion', async () => {
    const snapshot = vi.fn<() => Promise<void>>(async () => {})
    setProjectTransitionFinish(snapshot)
    await finishProjectTransition()
    setProjectTransitionFinish()
    await finishProjectTransition()
    expect(snapshot).toHaveBeenCalledOnce()
  })
})
