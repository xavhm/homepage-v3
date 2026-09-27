import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: {
    ignorePatterns: ['.agents/**', '.codex/**', '.nuxt/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    plugins: ['vue', 'vitest'],
  },
  fmt: {
    ignorePatterns: [
      '.agents/**',
      '.codex/**',
      '.nuxt/**',
      '.vscode/**',
      '.mcp.json',
      'AGENTS.md',
      'README.md',
      'skills-lock.json',
    ],
    singleQuote: true,
    semi: false,
  },
  staged: {
    '*.{js,mjs,ts,vue}': 'vp lint',
    '*.{js,mjs,ts,vue,css,json,md,yaml,yml}': 'vp fmt --check',
  },
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: ['test/unit/**/*.{test,spec}.ts'],
          environment: 'happy-dom',
        },
      },
      './test/nuxt/vitest.config.ts',
    ],
  },
})
