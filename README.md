# Portfolio di Architettura — Next.js + Sanity + Vercel

Questo repository contiene il codice di un **portfolio accademico/professionale di architettura** basato su **Next.js** come frontend e **Sanity** come CMS headless, con deploy su **Vercel**.  

Il progetto è pensato per offrire:
- forte controllo editoriale (narrazione dei progetti),
- gestione completa dei contenuti da CMS,
- performance elevate,
- struttura scalabile e professionale.

Le scelte architetturali e funzionali adottate sono elencate e motivate di seguito.

## Stack tecnologico

- **Frontend:** Next.js (App Router) + TypeScript  
- **CMS:** Sanity (Content Lake + Studio)  
- **Styling:** Tailwind CSS + CSS Variables  
- **Hosting frontend:** Vercel  
- **Hosting CMS:** Sanity.io  
- **Immagini:** Sanity Image Pipeline  
- **Email form:** Endpoint Next.js + servizio email (es. Resend)

## 1. Architettura del progetto  

Struttura del repository:

```

apps/
├─ web/        → Frontend Next.js (deploy su Vercel)
└─ studio/     → Sanity Studio (CMS admin)

```

**Motivazione**
- Separazione chiara tra presentazione (frontend) e gestione contenuti (CMS).
- Struttura professionale e scalabile.
- Facilita manutenzione, deploy e possibili estensioni future.

Struttura del progetto (dettaglio):

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


## 2. Hosting Sanity Studio  

Il CMS admin è hostato direttamente sull’infrastruttura Sanity.

**Motivazione**
- Nessuna manutenzione server.
- Stabilità e aggiornamenti automatici.
- Riduzione della complessità del progetto frontend.
- Best practice per progetti editoriali e portfolio.

## 3. Gestione dei contenuti dinamici  

Le pagine uniche del sito sono gestite come documenti singleton:
- `siteSettings`
- `homePage`
- `aboutPage`
- `cvPage`

**Motivazione**
- Chiarezza per l’admin: una pagina = un documento.
- Nessun rischio di duplicazione.
- Ideale per Home, About, CV e impostazioni globali.

## 4. Contenuti modulari (blocchi)  

I contenuti delle pagine (Home, About, Progetti) sono costruiti tramite **campi strutturati e ripetibili**, ma non tramite un page-builder libero.

Esempi:
- galleria immagini
- testo descrittivo
- sezioni predefinite
- metadati chiari

**Motivazione**
- Maggiore controllo sul layout e sulla coerenza visiva.
- Implementazione frontend più semplice e robusta.
- Riduzione del rischio di impaginazioni incoerenti da parte dell’admin.

## 5. Gestione Home – Progetti in evidenza  

La Home permette di selezionare manualmente i progetti in evidenza.

Campi principali:
- Hero image / gif
- Breve descrizione personale
- Lista di progetti selezionati (reference a `project`)

**Motivazione**
- Controllo curatoriale totale.
- La Home racconta una storia precisa e intenzionale.
- Approccio ideale per un portfolio accademico.

## 6. Filtri Portfolio  

I filtri (Tag, Skills, Tipologia) sono applicati lato client.

**Motivazione**
- Esperienza utente immediata e fluida.
- Dataset limitato (portfolio personale).
- Implementazione più semplice rispetto a query server dinamiche.

## 7. Progetti correlati  

I progetti correlati sono calcolati automaticamente in base a:
- tag condivisi
- skills condivise

**Motivazione**
- Relazioni semantiche corrette.
- Nessuna manutenzione manuale.
- Il sistema migliora automaticamente con l’aumentare dei contenuti.

## 8. Gestione colori e font da CMS  

Colori e font sono definiti nel documento `siteSettings` e convertiti in CSS variables.

Esempi:
- `--color-background`
- `--color-text`
- `--color-primary`
- `--font-heading`
- `--font-body`

**Motivazione**
- L’admin può modificare l’identità visiva senza toccare il codice.
- Design system coerente.
- Nessun redeploy necessario per modifiche cromatiche o tipografiche.

## 9. Pubblicazione contenuti  

Si utilizza il sistema di draft/publish nativo di Sanity:
- i contenuti non pubblicati non sono visibili al pubblico
- possibilità di preview nel frontend

**Motivazione**
- Workflow editoriale professionale.
- Possibilità di verificare i contenuti prima della pubblicazione.
- Approccio standard per CMS headless moderni.

## 10. Aggiornamento contenuti (ISR)  

Quando un contenuto viene pubblicato o aggiornato:
- Sanity invia un webhook a Next.js
- Next.js invalida le pagine interessate (ISR)

**Motivazione**
- Performance elevate (static generation).
- Aggiornamenti quasi immediati.
- Nessun rebuild completo del sito.

## 11. Form di contatto  

Il form di contatto utilizza:
- una API route in Next.js (`/api/contact`)
- un servizio email (es. Resend)

Campi:
- Nome
- Email
- Messaggio

**Motivazione**
- Controllo totale su logica e sicurezza.
- Nessun servizio esterno visibile.
- Possibilità di leggere destinatari e testi dal CMS.

## 12. Target del progetto  

Il progetto è pensato per:
- studenti di architettura
- presentazioni accademiche
- portfolio per studi, concorsi, Erasmus, laurea

**Nota**
Il target non influisce direttamente sull’implementazione tecnica, ma guida tutte le scelte editoriali e strutturali.

## Setup rapido

1. `pnpm install`
2. `cp apps/web/.env.example apps/web/.env.local`
3. `cp apps/studio/.env.example apps/studio/.env`
4. `pnpm dev` (frontend) e `pnpm studio:dev` (CMS)

Nota: i file `.env` e `.env.local` non si committano; usa i `.env.example` per condividere i valori base.
Nota: la config ESLint in `apps/web` estende solo `next/core-web-vitals` per compatibilita build su Vercel.

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
- `SANITY_DATASET`
- `SANITY_API_VERSION`
