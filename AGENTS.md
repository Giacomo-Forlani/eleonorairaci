# AGENTS

This repository is a pnpm workspace with two apps:
- apps/web (Next.js App Router)
- apps/studio (Sanity Studio)

## Defaults
- Reply in Italian unless the user asks otherwise.
- Use pnpm (no npm/yarn) and run commands from the repo root.
- Keep changes minimal and consistent with existing TypeScript strictness.
- Update README.md on every change to keep it aligned with the current project state.

## Structure
- Frontend code lives in apps/web/src.
- Routes and API handlers are in apps/web/src/app.
- Sanity schemas live in apps/studio/schemaTypes.

## Conventions
- If adding env vars, update the relevant .env.example file.
- If adding scripts, update the closest package.json (root for shared, app for local).
- Prefer apply_patch for single-file edits when possible.

## Validation
- Prefer running: pnpm lint and pnpm typecheck.
