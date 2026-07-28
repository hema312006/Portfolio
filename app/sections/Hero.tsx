'use client'
import { useEffect, useState } from 'react'

const roles = [
  'AI/ML Engineer',
  'NLP Practitioner',
  'Multi-Agent Systems',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,182,212,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(139,92,246,0.06),transparent)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-pulse/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-aurora/5 blur-3xl animate-float" />

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-pulse/20 to-transparent pointer-events-none"
        style={{ animation: 'scan 8s linear infinite' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-lime/20 bg-lime/5 mb-10 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          <span className="font-mono text-xs text-lime tracking-widest uppercase">
            Open to opportunities · B.Tech AI — Class of 2028
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display font-800 leading-none mb-4">
          <span
            className="block text-5xl md:text-7xl lg:text-8xl text-white"
            style={{ letterSpacing: '-0.02em' }}
          >
            K. Hemalatha
          </span>
          <span
            className="block text-5xl md:text-7xl lg:text-8xl text-gradient"
            style={{ letterSpacing: '-0.02em' }}
          >
            Reddy
          </span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center gap-3 mt-6 mb-8 h-10">
          <span className="font-mono text-ghost text-sm tracking-widest">~/role</span>
          <span className="font-mono text-ghost">→</span>
          <span className="font-mono text-xl text-pulse font-500">
            {displayed}
            <span className="animate-blink text-pulse">|</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl text-xl md:text-2xl text-mist leading-relaxed font-body font-300 mb-12">
          Engineering intelligent systems that{' '}
          <span className="text-white font-500">think, reason, and act</span> — from
          multi-agent farms to NLP confidence models, turning research into
          real-world impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#projects"
            className="group flex items-center gap-3 px-6 py-3.5 bg-pulse text-void font-display font-600 text-sm tracking-widest uppercase hover:bg-cyan-300 transition-all duration-200"
          >
            View My Work
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 px-6 py-3.5 border border-white/10 text-mist font-display font-600 text-sm tracking-widest uppercase hover:border-white/30 hover:text-white transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5">
          {[
            { num: '8.48', label: 'GPA · 4 Semesters', unit: '' },
            { num: '5+', label: 'ML Projects Shipped', unit: '' },
            { num: '3', label: 'Months Industry Internship', unit: '' },
            { num: '4', label: 'Languages Spoken', unit: '' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display font-700 text-2xl text-white">
                {s.num}
                <span className="text-pulse">{s.unit}</span>
              </span>
              <span className="font-mono text-xs text-ghost tracking-widest uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent pointer-events-none" />
    </section>
  )
}
