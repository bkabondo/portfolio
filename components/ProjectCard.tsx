import { ExternalLink } from 'lucide-react'
import GithubIcon from './GithubIcon'

interface Project {
  id: string
  name: string
  tagline: string
  description: string
  tech: string[]
  live: string
  github: string
  emoji: string
  color: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = project.color + '60')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}>

      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}66)` }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Emoji + Name */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-3xl mb-2">{project.emoji}</div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{project.name}</h3>
            <p className="text-sm font-medium mt-0.5" style={{ color: project.color }}>{project.tagline}</p>
          </div>
          {/* Links */}
          <div className="flex gap-2 mt-1">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg border transition-colors"
              style={{ borderColor: 'var(--border2)', color: 'var(--muted)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}>
              <GithubIcon className="h-4 w-4" />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg border transition-colors"
              style={{ borderColor: 'var(--border2)', color: 'var(--muted)' }}
              onMouseEnter={e => { e.currentTarget.style.color = project.color; e.currentTarget.style.borderColor = project.color }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--muted)' }}>{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full border font-medium"
              style={{ borderColor: 'var(--border2)', color: 'var(--muted)', background: 'rgba(255,255,255,0.03)' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Live link button */}
        <a href={project.live} target="_blank" rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border transition-all"
          style={{ borderColor: project.color + '50', color: project.color }}
          onMouseEnter={e => { e.currentTarget.style.background = project.color + '15' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
          <ExternalLink className="h-3.5 w-3.5" />
          View Live Project
        </a>
      </div>
    </div>
  )
}
