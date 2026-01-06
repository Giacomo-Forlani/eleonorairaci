# Portfolio di Architettura — Next.js + Sanity

Repository di un **portfolio accademico/professionale di architettura** basato su **Next.js** (frontend) e **Sanity** (CMS headless), con deploy su **Vercel**.

Obiettivi principali:
- controllo editoriale sulla narrazione dei progetti
- gestione completa dei contenuti via CMS
- performance elevate
- struttura scalabile e professionale

## Stack tecnologico

- **Frontend:** Next.js (App Router) + TypeScript
- **CMS:** Sanity Studio v3 (Content Lake + Studio)
- **Styling:** Tailwind CSS + CSS Variables
- **Hosting frontend:** Vercel
- **Hosting CMS:** Sanity.io
- **Immagini:** Sanity Image Pipeline
- **Email form:** Endpoint Next.js + servizio email (es. Resend)

## Struttura repository

```
.
├─ apps/
│  ├─ web/                 -> Next.js App Router
│  │  ├─ src/app/          -> Routes e API routes
│  │  ├─ src/lib/sanity/   -> Client, image builder, queries
│  │  └─ public/           -> Asset statici
│  └─ studio/              -> Sanity Studio
│     ├─ schemaTypes/      -> Schemi e singleton
│     ├─ sanity.config.ts  -> Config Studio
│     └─ deskStructure.ts  -> Struttura editoriale
├─ package.json            -> Script root e workspace
├─ pnpm-workspace.yaml     -> Config workspace
└─ README.md
```

## Linee guida di sviluppo

- Regole e coerenza del progetto in `AGENTS.md`.
- Mantieni `AGENTS.md` aggiornato quando cambiano le direttive operative.

## Requisiti

- Node.js (LTS)
- pnpm

## Setup rapido

1. `pnpm install`
2. `cp apps/web/.env.example apps/web/.env.local`
3. `cp apps/studio/.env.example apps/studio/.env`
4. `pnpm dev` (frontend) e `pnpm studio:dev` (CMS)

Nota: in `apps/studio/.env` valorizza anche `SANITY_STUDIO_PROJECT_ID` e
`SANITY_STUDIO_DATASET` (prefisso richiesto per esporre le variabili al build
dello Studio).

## Script principali

- `pnpm dev` -> Next.js dev server
- `pnpm build` -> build Next.js
- `pnpm studio:dev` -> Sanity Studio in locale
- `pnpm lint` -> lint di web + studio
- `pnpm typecheck` -> TypeScript su web + studio

## Variabili d'ambiente

Frontend (`apps/web/.env.local`):
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_READ_TOKEN` (opzionale, per preview o queries protette)
- `REVALIDATE_SECRET`

Studio (`apps/studio/.env`):
- `SANITY_PROJECT_ID`
- `SANITY_STUDIO_PROJECT_ID` (uguale a `SANITY_PROJECT_ID`)
- `SANITY_DATASET`
- `SANITY_STUDIO_DATASET` (uguale a `SANITY_DATASET`)
- `SANITY_API_VERSION`

Nota: i file `.env` e `.env.local` non si committano; usa i `.env.example` per condividere i valori base.

## Architettura contenuti (Sanity)

- **Singleton:** `siteSettings`, `homePage`, `aboutPage`, `cvPage`
- **Contenuti modulari:** blocchi strutturati e ripetibili, non page-builder libero
- **Home curata:** progetti in evidenza scelti manualmente
- **Filtri portfolio:** applicati lato client (dataset limitato)
- **Progetti correlati:** calcolo automatico basato su tag/skills
- **Design tokens:** colori e font da `siteSettings` convertiti in CSS variables
- **Draft/Publish:** workflow editoriale nativo con preview
- **ISR:** webhook Sanity -> invalidazione pagine Next.js

## Webhook revalidate

- `POST /api/revalidate` con header `x-revalidate-secret`
- il valore deve coincidere con `REVALIDATE_SECRET`

## Deploy

Frontend su Vercel.

Sanity Studio:
1. `pnpm --filter @portfolio/studio exec sanity login`
2. `pnpm --filter @portfolio/studio exec sanity deploy --hostname eleonorairaci`

Nota: il valore `studioHost` è definito in `apps/studio/sanity.cli.ts` per evitare prompt al deploy.

## Note operative

- La config ESLint in `apps/web` estende solo `next/core-web-vitals` per compatibilita build su Vercel.
- Lo Studio usa ESLint flat config in `apps/studio/eslint.config.js` (ESLint v9).
- L'helper immagini Sanity usa il tipo inferito dal builder per compatibilita tra versioni.
- Se nel webhook Sanity puoi scegliere solo `v2021-03-25` o `v2025-02-19`, usa `v2025-02-19` e allinea lo stesso valore nelle env.
