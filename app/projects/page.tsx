'use client'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import ChatAgent from '@/components/ChatAgent'
import GithubIcon from '@/components/GithubIcon'
import { PROJECTS } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* Back */}
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
            style={{ color: 'var(--muted)' }}>
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          {/* Header */}
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>Projects</h1>
            <p className="text-lg max-w-xl" style={{ color: 'var(--muted)' }}>
              A selection of apps I&apos;ve shipped — each with real auth, live databases, payments, and AI features.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-14 max-w-lg">
            {[
              { value: '10+', label: 'Apps Shipped' },
              { value: '4', label: 'Featured Here' },
              { value: '100%', label: 'Live & Deployed' },
            ].map(stat => (
              <div key={stat.label} className="rounded-2xl border p-4 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                <p className="text-2xl font-extrabold" style={{ color: 'var(--accent2)' }}>{stat.value}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
            {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>

          {/* More projects CTA */}
          <div className="rounded-2xl border p-8 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <p className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>See more on GitHub</p>
            <p className="text-sm mb-5" style={{ color: 'var(--muted)' }}>
              6 additional projects — LexAI, VerdantAI, InterviewForge, HabitMind, BildPick, SkillBridge
            </p>
            <a href="https://github.com/bkabondo" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all"
              style={{ borderColor: 'var(--border2)', color: 'var(--text)' }}
              onMouseEnter={() => {}} >
              <GithubIcon className="h-4 w-4" /> github.com/bkabondo <ExternalLink className="h-3.5 w-3.5 ml-1" />
            </a>
          </div>
        </div>
      </main>
      <ChatAgent />
    </>
  )
}
