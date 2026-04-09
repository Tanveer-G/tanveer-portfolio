'use client'

import { useRef } from 'react'
import { useScrollReveal } from '@/lib/utils/gsapAnimations'

const CARDS = [
  {
    icon: '⚡',
    title: 'Performance Obsessive',
    body: 'I optimise before I ship. Code-splitting, lazy loading, Core Web Vitals — every millisecond matters in production.',
  },
  {
    icon: '🧩',
    title: 'Component-First Thinker',
    body: "I build systems, not pages. Reusable, composable components that scale across products without entropy.",
  },
  {
    icon: '🚀',
    title: 'Ships Without Breaking',
    body: 'Figma to deployed app in hours, not sprints — with TypeScript, clean git history, and zero regressions.',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  return (
    <section id="about" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="rv text-center mb-14">
          <div className="sl mb-3">Why Hire Me?</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-.02em' }}>
            The Developer You Need
          </h2>
          <div className="ab mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {CARDS.map(card => (
            <div key={card.title} className="rv ac glass gb rounded-2xl p-7">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-bold text-white text-base mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(237,224,240,.55)' }}>{card.body}</p>
            </div>
          ))}
        </div>

        <div className="rv glass gb rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-start gap-8">
          <div
            className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
            style={{ background: 'linear-gradient(135deg,rgba(238,69,64,.2),rgba(128,19,54,.2))', border: '1px solid rgba(238,69,64,.22)' }}
          >
            👨‍💻
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-lg mb-2">Tanveer H.</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(237,224,240,.58)' }}>
              Frontend-focused full stack developer with <strong style={{ color: '#ede0f0' }}>3+ years</strong> in production.
              From CDN streaming dashboards with real-time hls.js to multi-tenant SaaS and AI-powered RAG chat apps —
              I bring deep frontend craft with full-stack reach.
            </p>
            <ul className="space-y-2">
              {[
                'I turn complex designs into fluid, pixel-perfect code',
                'I think in components and user journeys, not just features',
                'I ship fast without breaking things — tested, typed, documented',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(237,224,240,.62)' }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#EE4540' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
