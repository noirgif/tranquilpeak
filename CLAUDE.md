# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in **this Hexo theme** (`themes/tranquilpeak/`). The parent blog repo may also have a root `CLAUDE.md` for site-wide Hexo commands.

## What this is

A customized fork of [hexo-theme-tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak) (package name `hexo-theme-tranquilpeak`, Grunt-based asset pipeline). Hexo loads EJS layouts, `scripts/` helpers and tags, and `languages/` strings at generate time; CSS/JS shipped in `source/assets/` are produced by Grunt from `source/_css/` and `source/_js/`.

## Commands (run inside `themes/tranquilpeak/`)

This directory includes `pnpm-lock.yaml`; use **pnpm** when possible (`corepack enable pnpm` or install from [pnpm.io](https://pnpm.io/installation)). Plain `npm` works if you do not have pnpm.

Install dependencies:

```bash
pnpm install
```

**Interactive development** — development build then file watcher (edit `_css` / `_js` and see rebuilds):

```bash
pnpm start
```

Equivalent to `grunt default` → `build` + `watch`.

**One-shot development build** — unminified assets, dev-style script linking (`linkAssets`):

```bash
pnpm run grunt -- build
```

**Production build** — concat, minify, hashed filenames for injected bundles (`linkAssetsProd`). Note: the package script named `build` runs this, not the Grunt `build` task:

```bash
pnpm run build
```

Lint:

```bash
pnpm run lint
```

After changing theme assets, run `hexo generate` (or `hexo server`) from the **blog root** to verify the full site.

## Asset pipeline (Grunt)

| Stage | Role |
|--------|------|
| `compileAssets` | `sass:dev` compiles `source/_css/tranquilpeak.scss` (and partials) into `source/assets/css/`; `concat:devJs` concatenates `source/_js/**/*.js` → `source/assets/js/tranquilpeak.js` |
| `syncAssets` | `compileAssets` + `sync:dev` (e.g. `source/_images` → `source/assets/images` per theme docs) |
| `build` | Dev-oriented: clean, copy, `syncAssets`, `linkAssets`, text replacements for Fancybox / Font Awesome / Tranquilpeak paths |
| `buildProd` | Adds `concat` (full CSS bundle + `script.js` from `tasks/pipeline.js` list), `cssmin`, `uglify`, `linkAssetsProd` |

**Which files to edit**

- **SCSS**: `source/_css/` (entry `tranquilpeak.scss`). Do not hand-edit generated `source/assets/css/*.css` except when debugging; regenerate via Grunt.
- **Theme JS modules**: `source/_js/*.js` (concatenated into `tranquilpeak.js`). Shared behavior also ends up in the concatenated `script.js` / minified script in production; follow existing patterns in `_js/`.
- **Vendor / built blobs**: `source/assets/` holds compiled output, vendored libs (jQuery, Fancybox, etc.), and production min files with content hashes in the name.

**Injected bundles**: `tasks/pipeline.js` defines `tranquilpeakCssFilesToInject` and `tranquilpeakJsFilesToInject` used by the linker for `layout/_partial/head.ejs` and `layout/_partial/script.ejs`. Add or reorder CSS/JS there when the set of linked asset files changes.

## Hexo theme layout (no separate build)

| Path | Purpose |
|------|---------|
| `layout/` | EJS templates (`layout.ejs`, `post.ejs`, partials under `layout/_partial/`) |
| `scripts/` | Node modules for Hexo: `helpers/`, `filters/`, `tags/` (registered automatically) |
| `languages/` | Theme i18n YAML (`en.yml`, `zh-cn.yml`, …) |
| `_config.yml` | Theme options (sidebar, covers, third-party services, etc.) |

## Fork-specific notes

- **Photo diary**: `layout/photo-diary.ejs`, `layout/_partial/photo-diary.ejs`, styles under `source/_css/pages/_photo-diary.scss`, and related JS if any.
- **Snow UI**: `source/_js/snow.js`, `source/_css/themes/_snow.scss` (comment in sources attributes behavior to “some plus” / soul-plus style snowfall).
- **Search modal**: `source/_js/search-modal.js` and related styles under `source/_css/pages/_search.scss`.

## Configuration reminder

Theme `_config.yml` recommends CDN for images; for theme development, images belong under `source/_images` and are synced into `source/assets/images` by the Grunt `sync` task (see comments at the top of `_config.yml`).
