'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
// Github icon not in this lucide version — defined inline in pages

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(12px)', borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg" style={{ color: 'var(--text)' }}>
          <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)' }}>
            <Code2 className="h-4 w-4 text-white" />
          </div>
          <span>BK</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ color: pathname === l.href ? 'var(--accent2)' : 'var(--muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = pathname === l.href ? 'var(--accent2)' : 'var(--muted)')}>
              {l.label}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent2)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,106,247,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" style={{ color: 'var(--muted)' }} onClick={() => setOpen(o => !o)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t px-6 py-4 space-y-2" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium" style={{ color: 'var(--muted)' }}>
              {l.label}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="block px-3 py-2 rounded-lg text-sm font-semibold" style={{ color: 'var(--accent2)' }}>
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  )
}
