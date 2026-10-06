import type { RouterConfig } from '@nuxt/schema'

import { finishProjectTransition } from '~/utils/project-transition'

export default {
  async scrollBehavior(to, from, savedPosition): Promise<false> {
    const nuxtApp = useNuxtApp()
    const router = useRouter()
    const changingPage = to.path !== from.path
    if (!changingPage && !to.hash && !from.hash && !savedPosition) return false

    if (changingPage && from.matched.length) {
      await new Promise<void>((resolve) => nuxtApp.hooks.hookOnce('page:finish', () => resolve()))
      await nextTick()
    }
    if (router.currentRoute.value.fullPath !== to.fullPath) return false

    let position = savedPosition ?? { left: 0, top: 0 }
    if (!savedPosition && to.hash) {
      const target = document.getElementById(decodeURIComponent(to.hash.slice(1)))
      if (target) {
        position = {
          left: 0,
          top:
            window.scrollY +
            target.getBoundingClientRect().top -
            (Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0),
        }
      }
    }
    // Instant route scrolling is part of the snapshot update. Smooth scrolling
    // remains available for section links within the homepage.
    window.scrollTo({ ...position, behavior: changingPage || savedPosition ? 'instant' : 'auto' })
    await finishProjectTransition()
    return false
  },
} satisfies RouterConfig
