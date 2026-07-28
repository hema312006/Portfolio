'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-void/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-700 text-sm tracking-widest text-white uppercase">
          <span className="text-pulse">KH</span>
          <span className="text-ghost mx-1">/</span>
          <span className="text-mist">Reddy</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-widest text-ghost uppercase hover:text-pulse transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:hema31reddy@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-pulse/30 text-pulse font-mono text-xs tracking-widest uppercase hover:bg-pulse/10 hover:border-pulse/60 transition-all duration-200"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pulse animate-pulse" />
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-ghost hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5 w-full' : 'w-full'}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-3/4'}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5 w-full' : 'w-full'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-ink/95 backdrop-blur-xl border-b border-white/5`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs tracking-widest text-ghost uppercase hover:text-pulse transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:hema31reddy@gmail.com"
              className="font-mono text-xs tracking-widest text-pulse uppercase"
            >
              → Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
