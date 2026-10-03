import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vite-plus/test'

import { HeroSection, ProjectCard } from '#components'
import { projects } from '~/data/projects'

describe('Portfolio pictures', () => {
  it('offers usable mobile sources and keeps the project transition on the image', async () => {
    const project = projects[0]!
    const wrapper = await mountSuspended(ProjectCard, { props: { project } })
    const picture = wrapper.get('picture')
    const image = picture.get('img')

    expect(picture.findAll('source').map((source) => source.attributes('type'))).toEqual([
      'image/avif',
      'image/webp',
    ])
    for (const source of [...picture.findAll('source'), image]) {
      const widths = source
        .attributes('srcset')!
        .split(', ')
        .map((entry) => Number(entry.split(' ').at(-1)!.replace('w', '')))
      expect(Math.min(...widths)).toBeGreaterThanOrEqual(320)
      expect(Math.max(...widths)).toBeGreaterThanOrEqual(1278)
    }
    expect(image.attributes('src')).toContain('f_jpeg')
    expect(image.attributes('loading')).toBe('lazy')
    expect(image.element.style.viewTransitionName).toBe(`project-${project.key}`)
    expect(picture.attributes('style')).toBeUndefined()
    wrapper.unmount()
  })

  it('puts the portrait loading priority on the inner image', async () => {
    const wrapper = await mountSuspended(HeroSection)
    const picture = wrapper.get('picture')

    expect(picture.get('img').attributes('fetchpriority')).toBe('high')
    expect(picture.get('img').attributes('loading')).not.toBe('lazy')
    expect(picture.attributes('fetchpriority')).toBeUndefined()
    wrapper.unmount()
  })
})
