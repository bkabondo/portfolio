'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, ExternalLink, Download, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import ChatAgent from '@/components/ChatAgent'
import ProjectCard from '@/components/ProjectCard'
import GithubIcon from '@/components/GithubIcon'
import { PROJECTS, SKILLS, CONTACT } from '@/lib/data'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── HERO ─────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium"
              style={{ borderColor: 'rgba(124,106,247,0.4)', color: '#a78bfa', background: 'rgba(124,106,247,0.08)' }}>
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Open to opportunities
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight" style={{ color: 'var(--text)' }}>
              Benjamin<br />
              <span style={{ background: 'linear-gradient(135deg, #7c6af7, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Kabondo
              </span>
            </h1>
            <p className="text-xl font-medium" style={{ color: 'var(--muted)' }}>
              Full-Stack Developer · AI Applications
            </p>
            <p className="text-base leading-relaxed max-w-lg" style={{ color: '#6a6a88' }}>
              I build production-grade AI-powered web apps — from luxury ride platforms to financial coaches.
              Next.js, Supabase, Claude AI, Stripe.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'var(--accent)' }}>
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="/Resume2026.pdf" download
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border2)', color: 'var(--text)', background: 'var(--card)' }}>
                <Download className="h-4 w-4" /> Resume
              </a>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border2)', color: 'var(--muted)' }}>
                <GithubIcon className="h-4 w-4" />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border2)', color: 'var(--muted)' }}>
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border2)', color: 'var(--muted)' }}>
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border2)', color: 'var(--muted)' }}>
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
                style={{ background: 'var(--accent)', transform: 'scale(0.9)' }} />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border-2"
                style={{ borderColor: 'rgba(124,106,247,0.3)' }}>
                <Image src="/profile.jpg" alt="Benjamin Kabondo" fill className="object-cover object-top" priority />
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ───────────────────────────────── */}
        <section id="about" className="border-y py-20" style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>About</p>
            <h2 className="text-3xl font-bold mb-10" style={{ color: 'var(--text)' }}>Who I Am</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="leading-relaxed" style={{ color: '#8888aa' }}>
                  I&apos;m a full-stack developer who loves turning complex ideas into clean, working software.
                  I specialize in <strong style={{ color: 'var(--text)' }}>Next.js, TypeScript, Supabase</strong>, and integrating AI models
                  like <strong style={{ color: 'var(--text)' }}>Claude</strong> into real products.
                </p>
                <p className="leading-relaxed" style={{ color: '#8888aa' }}>
                  I&apos;ve shipped 10+ projects end-to-end — all with authentication, live databases, payment processing,
                  and AI features. I care deeply about both engineering quality and user experience.
                </p>
                <p className="leading-relaxed" style={{ color: '#8888aa' }}>
                  Currently open to <strong style={{ color: 'var(--text)' }}>full-time roles</strong> and <strong style={{ color: 'var(--text)' }}>freelance projects</strong>.
                  I reply fast — reach me at{' '}
                  <a href={`mailto:${CONTACT.email}`} className="underline" style={{ color: 'var(--accent2)' }}>
                    {CONTACT.email}
                  </a>
                </p>
              </div>
              <div className="space-y-5">
                {SKILLS.map(s => (
                  <div key={s.category}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>{s.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map(item => (
                        <span key={item} className="text-xs px-3 py-1.5 rounded-full border font-medium"
                          style={{ borderColor: 'var(--border2)', color: 'var(--text)', background: 'rgba(124,106,247,0.06)' }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS PREVIEW ─────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>Work</p>
              <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>Featured Projects</h2>
            </div>
            <Link href="/projects"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: 'var(--muted)' }}>
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────── */}
        <section id="contact" className="border-t py-20" style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}>
          <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Contact</p>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--text)' }}>Let&apos;s Work Together</h2>
            <p style={{ color: 'var(--muted)' }}>
              Open to full-time roles, freelance contracts, and interesting collaborations.
              Drop me a line — I reply fast.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <a href={`mailto:${CONTACT.email}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: 'var(--accent)' }}>
                <Mail className="h-4 w-4" /> {CONTACT.email}
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:opacity-90"
                style={{ borderColor: '#0077b5', color: '#0077b5', background: 'rgba(0,119,181,0.06)' }}>
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:opacity-90"
                style={{ borderColor: '#e1306c', color: '#e1306c', background: 'rgba(225,48,108,0.06)' }}>
                <InstagramIcon className="h-4 w-4" /> Instagram
              </a>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold border transition-all"
                style={{ borderColor: 'var(--border2)', color: 'var(--text)' }}>
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a href="/Resume2026.pdf" download
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold border transition-all"
                style={{ borderColor: 'var(--border2)', color: 'var(--text)' }}>
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t py-6 text-center text-xs" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span>© 2026 Benjamin Kabondo</span>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <GithubIcon className="h-3 w-3" /> GitHub
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <LinkedInIcon className="h-3 w-3" /> LinkedIn
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <InstagramIcon className="h-3 w-3" /> Instagram
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1 hover:underline">
              <Mail className="h-3 w-3" /> Email
            </a>
            <a href="/Resume2026.pdf" download className="flex items-center gap-1 hover:underline">
              <ExternalLink className="h-3 w-3" /> Resume
            </a>
          </div>
        </footer>
      </main>
      <ChatAgent />
    </>
  )
}
