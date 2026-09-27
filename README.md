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

## License

Released under the [MIT License](./LICENSE).
