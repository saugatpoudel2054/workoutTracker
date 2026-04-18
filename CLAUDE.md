# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Important: Next.js Version Warning

This project uses **Next.js 16.2.4**, which has breaking API changes from earlier versions. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. Do not assume APIs or conventions from Next.js 13/14/15 apply.

## Architecture

**Stack:** Next.js 16.2.4 (App Router), React 19, TypeScript 5 (strict), Tailwind CSS 4

**Structure:** `src/app/` — App Router file-based routing. Server Components by default. `layout.tsx` is the root layout; `page.tsx` is the home route.

**Styling:** Tailwind CSS v4 via `@import "tailwindcss"` in `globals.css`. CSS custom properties handle theming with automatic dark mode via `prefers-color-scheme`.

**Path alias:** `@/*` resolves to `./src/*`.
