# Homepage v3

[![Vite+](https://img.shields.io/badge/toolchain-Vite%2B-8B5CF6)](https://viteplus.dev/guide/)
[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

Personal homepage, built with Nuxt, Nuxt UI, TypeScript, and Tailwind CSS.
The repository uses [Vite+](https://viteplus.dev/guide/) and its `vp` CLI as the entry point for dependency management and development tasks.

## Prerequisites

Install the global Vite+ CLI on macOS or Linux:

```bash
curl -fsSL https://vite.plus | bash
```

For Windows and alternative installation options, see the [Vite+ installation guide](https://viteplus.dev/guide/#install-vp-globally). Open a new terminal after installation and confirm that the CLI is available:

```bash
vp --version
```

Vite+ can manage the required Node.js runtime and package manager. This project currently resolves to pnpm from the `packageManager` field in `package.json`.

## Getting started

Install dependencies:

```bash
vp install
```

Start the Nuxt development server at `http://localhost:3000`:

```bash
vp run dev
```

## Commands

| Command            | Purpose                                                               |
| ------------------ | --------------------------------------------------------------------- |
| `vp install`       | Install dependencies with the package manager declared by the project |
| `vp run dev`       | Start the Nuxt development server with hot module replacement         |
| `vp run build`     | Create a production build                                             |
| `vp run preview`   | Preview the production build locally                                  |
| `vp check`         | Check formatting, lint rules, and types with Oxfmt and Oxlint        |
| `vp fmt`           | Format project files with Oxfmt                                       |
| `vp lint`          | Lint project files with Oxlint                                        |
| `vp test`          | Run Vitest unit and Nuxt environment tests                            |
| `vp run typecheck` | Run Nuxt's TypeScript checks                                          |
| `vp toolchain`     | Display the active Vite+ toolchain and versions                       |
| `vp help`          | List all Vite+ commands                                               |

### Vite+ built-ins and project scripts

Vite+ built-in commands and `package.json` scripts use different syntax. This is a Nuxt application, so use `vp run <name>` for its framework scripts:

- `vp run dev` runs the `nuxt dev` script from `package.json`.
- `vp run build` runs the `nuxt build` script from `package.json`.
- `vp dev` and `vp build` invoke Vite+'s built-in Vite commands instead.

Use `vp run` without a task name to open the interactive task selector. See the [Vite+ task runner documentation](https://viteplus.dev/guide/run) for filtering, caching, and workspace options.

## Checks and tests

`vite.config.ts` configures Oxlint, Oxfmt, and Vitest. Unit tests in `test/unit/` use Happy DOM and Vue Test Utils. Tests in `test/nuxt/` use Nuxt Test Utils with Happy DOM. Run one suite with `vp test --project unit` or `vp test --project nuxt`.

The Vite+ Git hooks run `vp staged` before commits to check staged code with Oxlint and Oxfmt. The `commit-msg` hook checks Conventional Commit messages with Commitlint. `vp install` installs the hook dispatcher in each clone, and `vp hooks status` shows whether it is active.

## Production

Create and preview a production build:

```bash
vp run build
vp run preview
```

The generated Nuxt output is written to `.output/`. Refer to the [Nuxt deployment guide](https://nuxt.com/docs/getting-started/deployment) for provider-specific instructions.

### SEO and Cloudflare

The canonical production URL is `https://www.xavhm.foo`. Override it with `NUXT_SITE_URL` when needed; `.env.example` documents the build variables. Set `NUXT_SITE_ENV=staging` **before building** Cloudflare preview deployments so their prerendered HTML and robots file disable indexing. Production builds use `NUXT_SITE_ENV=production` (the default).

Nuxt SEO generates `/robots.txt`, `/sitemap.xml`, canonical URLs, social metadata, and Schema.org JSON-LD. The sitemap includes the homepage and every project in `app/data/projects.ts`. All these pages are prerendered explicitly. The sitemap and OG images use zero runtime mode and are regenerated when you build; rebuild after changing projects or SEO content.

Shared portfolio metadata lives in `app/data/seo.ts`; case studies use their own titles and descriptions. The homepage is a `ProfilePage` linked to the site-wide `Person` identity, including the portrait and existing social profiles.

The shared 1200 × 630 PNG placeholder is generated from `app/components/OgImage/Portfolio.takumi.vue` and registered in `app/app.vue`. Edit that template for the final design. The Takumi native renderer runs during the build, and generated images are served as static assets on Cloudflare. The build needs network access to resolve the Inter font.

Choose the Nitro preset for your Cloudflare deployment: `cloudflare_module` for Workers, or `cloudflare_pages` for Pages. Configure `www.xavhm.foo` as the production custom domain, and redirect `xavhm.foo` to `https://www.xavhm.foo` to keep one canonical origin. After deployment, verify `/robots.txt` and `/sitemap.xml` on the live domain and submit the sitemap in Google Search Console.

Configuration follows the [Nuxt SEO setup guide](https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules), [OG image zero runtime guidance](https://nuxtseo.com/docs/og-image/guides/zero-runtime), and [identity setup guidance](https://nuxtseo.com/docs/schema-org/guides/setup-identity).

## License

Released under the [MIT License](./LICENSE).
