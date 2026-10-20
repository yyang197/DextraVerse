# DextraVerse

Research-platform website: hardware, teleoperation, tactile sensing and rewards, policy learning, and AI-friendly development.

Website: https://yyang197.github.io/DextraVerse/

## Local development

Requires Node.js 22.13+ and npm.

```sh
npm ci
npm run dev
```

## GitHub Pages

Pushes to `main` run `.github/workflows/pages.yml`, build the static export, and deploy `dist/client/` to GitHub Pages. Repository Pages source must be **GitHub Actions**.

```sh
NEXT_PUBLIC_BASE_PATH=/DextraVerse npm run build
```

The workflow uses the base path supplied by GitHub, including for media, paper, fonts and script URLs. For root-domain local builds, use `npm run build` without that environment variable.

## Source map

- `app/page.tsx`: section order, hero links, footer.
- `app/hardware.tsx`, `teleoperation.tsx`, `tactile.tsx`, `policy-learning.tsx`, `ai-coding.tsx`: platform sections.
- `app/experiences.tsx`: hero video controls and retained reusable presentation components.
- `app/globals.css`: Charter typography, orange palette, responsive layout.
- `components/`, `hooks/`, `lib/`: supporting UI code.
- `public/media/`: website-ready videos, posters, images, SVG logo, and paper PDF.
- `public/fonts/charter/`: four webfont styles and original license.
- `docs/`: asset provenance notes.

This snapshot includes the complete tracked website source and web assets, excluding dependency folders, caches, generated builds, and Git history. Original camera files and paper authoring sources are not required to build the website.

## Build integration

The original Vinext / Sites / Cloudflare build integration is retained. GitHub Pages only uploads the static `dist/client/` output. No Sites credentials are included.

Charter webfont license is included in `public/fonts/charter/`. Asset notes are in `docs/`.
