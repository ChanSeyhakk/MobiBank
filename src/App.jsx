import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import { AboutPage, FeaturesPage, HelpPage, LoginPage, SecurityPage } from './components/Pages.jsx'

const pages = {
  about: AboutPage,
  features: FeaturesPage,
  help: HelpPage,
  login: LoginPage,
  security: SecurityPage,
}

function currentPage() {
  return window.location.hash.slice(1) || 'home'
}

function Footer() {
  return (
    <footer className="border-t border-[#e4ebf5] bg-white/80">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5 px-[clamp(20px,6.5vw,84px)] py-7 text-sm">
        <p>© {new Date().getFullYear()} MobiBank. A concept preview; no banking services are connected.</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          <a className="transition hover:text-brand" href="#about">About</a>
          <a className="transition hover:text-brand" href="#security">Security</a>
          <a className="transition hover:text-brand" href="#help">Help</a>
        </nav>
      </div>
    </footer>
  )
}

export default function App() {
  const [page, setPage] = useState(currentPage)

  useEffect(() => {
    const updatePage = () => setPage(currentPage())
    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const Page = pages[page] ?? Hero

  return (
    <div className="page">
      <Navbar activePage={page} />
      <Page />
      <Footer />
    </div>
  )
}
