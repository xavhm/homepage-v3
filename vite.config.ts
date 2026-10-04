import { defineConfig } from 'vite-plus'

export default defineConfig({
  test: {
    projects: [
      // OxC also loads this config: start Nuxt only when Vitest resolves the project.
      async () => {
        const { defineVitestProject } = await import('@nuxt/test-utils/config')

        return defineVitestProject({
          test: {
            name: 'nuxt',
            include: ['./app/tests/**/*.test.ts'],
            environment: 'nuxt',
          },
        })
      },
    ],
  },
  staged: {
    '*.{js,ts,tsx,vue}': 'vp check --fix',
  },
  fmt: {
    ignorePatterns: [
      '.agents/**',
      '.codex/**',
      '.nuxt/**',
      '.vscode/**',
      'public/**',
      '.mcp.json',
      'AGENTS.md',
      'README.md',
      'skills-lock.json',
    ],
    singleQuote: true,
    semi: false,
    sortPackageJson: true,
    sortImports: true,
    sortTailwindcss: true,
  },
  lint: {
    plugins: ['vue', 'eslint', 'vitest', 'typescript', 'oxc', 'node'],
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
      'no-debugger': 'error',
      'no-console': 'error',
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    ignorePatterns: [
      'dist/**',
      '.agents/**',
      '.codex/**',
      '.nuxt/**',
      '.data/**',
      '.github/**',
      'public/**',
    ],
  },
})
