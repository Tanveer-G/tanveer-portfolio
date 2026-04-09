'use client'

import { useEffect, useRef, useState } from 'react'
import { SITE } from '@/lib/data/constants'

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const hl1 = useRef<HTMLSpanElement>(null)
  const hl2 = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    if (hl1.current && hl2.current) {
      hl1.current.style.transform = next ? 'rotate(45deg) translate(3px,3px)' : 'none'
      hl2.current.style.transform = next ? 'rotate(-45deg) translate(3px,-3px)' : 'none'
    }
  }

  const closeMenu = () => {
    setMenuOpen(false)
    if (hl1.current && hl2.current) {
      hl1.current.style.transform = 'none'
      hl2.current.style.transform = 'none'
    }
  }

  return (
    <nav
      id="nav"
      className={`fixed top-0 inset-x-0 z-50 px-5 md:px-12 ${scrolled ? 'sc' : ''}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ height: 64 }}>
        <a href="#hero" className="font-black text-xl gt tracking-tight">TH.</a>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium" style={{ color: 'rgba(237,224,240,.55)' }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="hover:text-r1 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-p text-xs font-semibold px-5 py-2.5 rounded-xl hidden sm:inline-flex">
            Hire Me
          </a>
          <button
            className="md:hidden p-2 flex flex-col gap-1.5"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span ref={hl1} className="w-5 h-px block" style={{ background: '#ede0f0', transition: 'all .3s' }} />
            <span ref={hl2} className="w-5 h-px block" style={{ background: '#ede0f0', transition: 'all .3s' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mn" className={`md:hidden glass-d rounded-2xl mx-0 mb-3 p-5 ${menuOpen ? 'open' : ''}`}>
        <div className="flex flex-col gap-4 text-sm font-medium" style={{ color: 'rgba(237,224,240,.75)' }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="hover:text-r1 transition-colors" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
