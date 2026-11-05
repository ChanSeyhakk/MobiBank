import { useState } from 'react'
import { Logo } from './Icons.jsx'

const links = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Features', page: 'features' },
  { label: 'Security', page: 'security' },
  { label: 'Help', page: 'help' },
]

export default function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function renderLinks(mobile = false) {
    return links.map(({ label, page }) => (
      <a
        key={page}
        className={`rounded-md py-2 transition hover:text-brand ${activePage === page ? 'font-semibold text-brand' : ''}`}
        href={`#${page}`}
        aria-current={activePage === page ? 'page' : undefined}
        onClick={() => mobile && setMenuOpen(false)}
      >
        {label}
      </a>
    ))
  }

  return (
    <header className="relative z-10 border-b border-white/70 bg-white/85 shadow-[0_3px_18px_rgba(37,76,130,.04)] backdrop-blur-lg">
      <div className="mx-auto grid h-[96px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-[clamp(20px,6.5vw,84px)] max-[1000px]:h-[78px] max-[1000px]:grid-cols-[1fr_auto]">
        <a className="flex items-center gap-2.5 justify-self-start rounded-md max-[520px]:gap-1.5" href="#home" aria-label="MobiBank home">
          <Logo className="h-10 w-12 max-[520px]:h-8 max-[520px]:w-9" />
          <span className="text-[25px] font-bold tracking-[-.3px] text-navy max-[520px]:text-[20px]">MobiBank</span>
        </a>

        <nav className="flex items-center gap-7 text-[15px] font-medium max-[1000px]:hidden" aria-label="Main">
          {renderLinks()}
        </nav>

        <div className="flex items-center justify-self-end gap-6 font-medium max-[520px]:gap-3">
          <a className="rounded-md transition hover:text-brand max-[520px]:hidden" href="#login">Log in</a>
          <a className="rounded-full bg-brand px-5 py-3 font-semibold text-white shadow-[0_8px_20px_rgba(31,111,235,.22)] transition hover:-translate-y-0.5 hover:bg-brand-dark max-[520px]:px-3 max-[520px]:py-2.5 max-[520px]:text-[13px]" href="#features">Get the App</a>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-[#dfe7f3] text-navy min-[1001px]:hidden max-[520px]:h-9 max-[520px]:w-9"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="text-2xl leading-none" aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="absolute inset-x-0 top-full grid gap-1 border-t border-[#e5ebf4] bg-white px-6 py-4 shadow-lg min-[1001px]:hidden" aria-label="Mobile">
          {renderLinks(true)}
          <a className="rounded-md py-2 font-semibold text-brand min-[521px]:hidden" href="#login" onClick={() => setMenuOpen(false)}>Log in</a>
        </nav>
      )}
    </header>
  )
}
