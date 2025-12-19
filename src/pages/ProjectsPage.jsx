const projects = [
  {
    name: 'Landing',
    status: 'In progress',
    desc: 'Pagina di ingresso con focus sulla value proposition.',
  },
  {
    name: 'Portfolio',
    status: 'Draft',
    desc: 'Layout per mostrare lavori e case study.',
  },
  {
    name: 'Blog',
    status: 'Backlog',
    desc: 'Area contenuti con articoli e note di sviluppo.',
  },
]

function ProjectsPage() {
  const cardClass =
    'flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-xl'
  const statusClass =
    'text-[0.65rem] uppercase tracking-[0.3em] text-neutral-500'

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
          Projects
        </span>
        <h1 className="text-3xl sm:text-4xl">Progetti in sviluppo</h1>
        <p className="max-w-xl">
          Ogni card puo diventare una pagina separata per iterare in modo
          autonomo.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article className={cardClass} key={project.name}>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <span className={statusClass}>{project.status}</span>
            </div>
            <p>{project.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
