import { projects } from '~/data/projects'

export function projectTransitionKey(to: { path: string; hash: string }, from: { path: string }) {
  const projectPath = from.path === '/' ? to.path : to.path === '/' ? from.path : undefined
  if (!projectPath || (to.path === '/' && to.hash && to.hash !== '#projects')) return
  return projects.find((project) => projectPath === `/projects/${project.slug}`)?.key
}

// The router releases the snapshot only after the destination scroll is settled.
let finish: (() => Promise<void>) | undefined

export function setProjectTransitionFinish(callback?: () => Promise<void>) {
  finish = callback
}

export async function finishProjectTransition() {
  await finish?.()
}

export function visibleProjectCover(key: string) {
  const image = document.querySelector<HTMLImageElement>(`[data-project-cover="${key}"] img`)
  if (!image) return
  const rect = image.getBoundingClientRect()
  if (
    rect.bottom <= 0 ||
    rect.top >= window.innerHeight ||
    rect.right <= 0 ||
    rect.left >= window.innerWidth
  )
    return
  return image
}
