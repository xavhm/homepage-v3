import { defineVitestProject } from '@nuxt/test-utils/config'
import { fileURLToPath } from 'node:url'

const testOverrides = {
  ssr: false,
  fonts: { provider: 'local' },
}

export default defineVitestProject({
  test: {
    name: 'nuxt',
    include: ['*.{test,spec}.ts'],
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('../../', import.meta.url)),
        domEnvironment: 'happy-dom',
        overrides: testOverrides,
      },
    },
  },
})
