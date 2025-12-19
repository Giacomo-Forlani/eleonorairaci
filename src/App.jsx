import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  const navLinkClass = ({ isActive }) =>
    [
      'rounded-full border border-transparent px-4 py-1.5 text-sm font-medium transition',
      'hover:border-neutral-900/70',
      isActive ? 'bg-neutral-900 text-neutral-100 shadow-sm' : 'text-neutral-900',
    ].join(' ')

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff1dc,_#f4f1ec_60%)]">
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-700">
            Progetto
          </div>
          <nav className="flex flex-wrap gap-2">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
