import {
  projectTransitionKey,
  setProjectTransitionFinish,
  visibleProjectCover,
} from '~/utils/project-transition'

export default defineNuxtPlugin((nuxtApp) => {
  if (!document.startViewTransition) return

  const router = useRouter()
  let cancel: (() => void) | undefined
  let browserTransition = false
  window.addEventListener('popstate', (event) => {
    browserTransition = Boolean(event.hasUAVisualTransition)
    cancel?.()
  })

  router.beforeResolve(async (to, from) => {
    cancel?.()
    const key = projectTransitionKey(to, from)
    const skip = browserTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    browserTransition = false
    if (!key || skip) return
    const oldImage = visibleProjectCover(key)
    if (!oldImage?.complete || !oldImage.naturalWidth) return

    oldImage.style.viewTransitionName = 'project-cover'
    let releaseRoute!: () => void
    let releaseSnapshot!: () => void
    const routeReady = new Promise<void>((resolve) => {
      releaseRoute = resolve
    })
    const snapshotReady = new Promise<void>((resolve) => {
      releaseSnapshot = resolve
    })
    const transition = document.startViewTransition(() => {
      releaseRoute()
      return snapshotReady
    })
    // Skipping rejects ready even though the DOM update still succeeds.
    void transition.ready.catch(() => {})
    let newImage: HTMLImageElement | undefined
    let cleaned = false
    const cleanup = () => {
      if (cleaned) return
      cleaned = true
      oldImage.style.removeProperty('view-transition-name')
      newImage?.style.removeProperty('view-transition-name')
      if (cancel === abort) {
        cancel = undefined
        setProjectTransitionFinish()
      }
      clearTimeout(watchdog)
    }
    const abort = () => {
      transition.skipTransition()
      releaseRoute()
      releaseSnapshot()
      cleanup()
    }
    cancel = abort
    // Errors or superseded navigations must never leave the document frozen.
    const watchdog = setTimeout(abort, 1500)
    setProjectTransitionFinish(async () => {
      newImage = visibleProjectCover(key)
      if (!newImage) return abort()
      newImage.style.viewTransitionName = 'project-cover'
      // A missing hero snapshot creates an apparent delay. Allow a short decode
      // budget, then fall back to ordinary navigation on a cold/slow connection.
      let timeout: ReturnType<typeof setTimeout> | undefined
      const decoded = await Promise.race([
        newImage.decode().then(
          () => true,
          () => false,
        ),
        new Promise<false>((resolve) => {
          timeout = setTimeout(() => resolve(false), 120)
        }),
      ])
      clearTimeout(timeout)
      if (cancel !== abort) return
      if (!decoded) return abort()
      releaseSnapshot()
    })
    void transition.finished.catch(() => {}).finally(cleanup)
    await routeReady
  })

  router.afterEach((_to, _from, failure) => {
    if (failure) cancel?.()
  })
  router.onError(() => cancel?.())
  nuxtApp.hook('app:error', () => cancel?.())
  nuxtApp.hook('vue:error', () => cancel?.())
})
