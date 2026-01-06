# AGENTS

Repository pnpm workspace con due app:
- apps/web (Next.js App Router)
- apps/studio (Sanity Studio)

## Contesto e obiettivi
- Portfolio accademico/professionale di architettura con forte controllo editoriale.
- Performance elevate, struttura scalabile e contenuti gestiti via CMS.
- Identita visiva configurabile da CMS (colori e font in CSS variables).

## Defaults
- Rispondi in italiano salvo richiesta diversa.
- Usa pnpm (no npm/yarn) ed esegui i comandi dalla root del repo.
- Cambiamenti minimi, rispettando la strictness TypeScript esistente.
- Aggiorna sempre `README.md` ad ogni modifica del progetto.

## Struttura
- Frontend in `apps/web/src`.
- Route e API in `apps/web/src/app`.
- Schemi Sanity in `apps/studio/schemaTypes`.

## Coerenza contenuti (Sanity)
- Singleton: `siteSettings`, `homePage`, `aboutPage`, `cvPage`.
- Contenuti modulari a blocchi, evitare page-builder libero.
- Home con progetti in evidenza selezionati manualmente.
- Filtri portfolio lato client (dataset limitato).
- Progetti correlati calcolati automaticamente via tag/skills.
- Workflow draft/publish con preview dove previsto.

## Coerenza tecnica
- App Router only (no Pages Router).
- Usa i helper Sanity in `apps/web/src/lib/sanity`.
- Styling con Tailwind + CSS variables; evita hardcoding di colori/font gia in CMS.
- Immagini tramite Sanity Image Pipeline e helper esistente.

## Env e deploy
- Nuove env vars -> aggiorna il relativo `.env.example`.
- Webhook revalidate: `POST /api/revalidate` con header `x-revalidate-secret`.
- Allinea la Sanity API version tra web e studio.
- Deploy Studio usa `apps/studio/sanity.cli.ts` per `studioHost`.

## Conventions
- Se aggiungi script, aggiorna il `package.json` piu vicino (root per shared, app per local).
- Preferisci `apply_patch` per edit di un singolo file.

## Validation
- Preferisci: `pnpm lint` e `pnpm typecheck`.
