const highlights = [
  {
    title: 'Pagine indipendenti',
    body: 'Ogni sezione vive in un file dedicato per sviluppo e test isolati.',
  },
  {
    title: 'Routing chiaro',
    body: 'Ogni pagina ha un URL diretto per navigare senza passare da menu.',
  },
  {
    title: 'Struttura scalabile',
    body: 'Aggiungi nuove pagine in /pages e registrale nelle route.',
  },
]

function HomePage() {
  const cardClass =
    'flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-xl'
  const pillClass =
    'rounded-full bg-[#efe7da] px-4 py-1 text-xs uppercase tracking-[0.25em] text-neutral-600'

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
          Home
        </span>
        <h1 className="text-4xl sm:text-5xl">Workspace pagine</h1>
        <p className="max-w-xl">
          Questa pagina riassume la nuova struttura con route dedicate. Usa la
          barra in alto per aprire ogni pagina direttamente.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <article className={cardClass} key={item.title}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <span className={pillClass}>/</span>
        <span className={pillClass}>/about</span>
        <span className={pillClass}>/projects</span>
        <span className={pillClass}>/contact</span>
      </div>
    </section>
  )
}

export default HomePage
