import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="flex flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
          404
        </span>
        <h1 className="text-3xl sm:text-4xl">Pagina non trovata</h1>
        <p className="max-w-xl">
          La route che cerchi non esiste o e stata spostata.
        </p>
      </div>
      <Link
        className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-5 py-2 text-sm font-medium text-neutral-100 transition hover:-translate-y-0.5 hover:shadow-lg"
        to="/"
      >
        Torna alla home
      </Link>
    </section>
  )
}

export default NotFoundPage
