# Web (Next.js)

Frontend Next.js (App Router) with Tailwind CSS and Sanity client helpers.

## Setup

1. Copy env vars: `cp .env.example .env.local`
2. Install deps: `pnpm install`
3. Run dev server: `pnpm dev`

## Notes

- Sanity helpers live in `src/lib/sanity`.
- Revalidate webhook: `POST /api/revalidate` with `x-revalidate-secret` header.
