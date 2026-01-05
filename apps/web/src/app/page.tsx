export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Base setup
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Portfolio di Architettura
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600">
          Struttura pronta. Collega Sanity e sostituisci questo contenuto con i
          dati reali.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-neutral-200 px-3 py-1 text-sm">
            Next.js App Router
          </span>
          <span className="rounded-full border border-neutral-200 px-3 py-1 text-sm">
            Sanity CMS
          </span>
          <span className="rounded-full border border-neutral-200 px-3 py-1 text-sm">
            Tailwind CSS
          </span>
        </div>
      </div>
    </main>
  )
}
