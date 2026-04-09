'use client'

import { useRef, useState } from 'react'
import { useScrollReveal } from '@/lib/utils/gsapAnimations'

const EXP = {
  cdn: {
    role: 'Frontend Developer',
    company: '5centsCDN.net',
    period: 'April 2024 – January 2026',
    type: 'Remote',
    typeStyle: { background: 'rgba(238,69,64,.1)', border: '1px solid rgba(238,69,64,.25)', color: '#EE4540' },
    bullets: [
      'Led Figma-to-deployment for the company website; collaborated directly with senior management for iterative QA.',
      (<>Built <strong style={{ color: '#ede0f0' }}>Image Optimizer, Bandwidth Calculator, HLS/DASH Stream Tester</strong> with real-time metrics and Chart.js graphs.</>),
      (<>Boosted organic traffic by <strong style={{ color: '#EE4540' }}>25%</strong> through SEO-optimised Tailwind landing pages and dynamic calculators.</>),
      (<>Reduced HLS video startup latency by <strong style={{ color: '#EE4540' }}>30%</strong> via player config tuning and buffer management with hls.js.</>),
    ],
    award: { title: 'Recommendation Letter', desc: 'Received official recommendation from 5centsCDN for outstanding contributions' },
    pills: ['Next.js','Tailwind CSS','Context API','VideoJS','Chart.js','jsvectormap','Framer Motion','hls.js','Dash.js','TypeScript'],
  },
  hub: {
    role: 'Frontend Developer',
    company: 'HolidayHub.in',
    period: 'December 2023 – March 2024',
    type: 'On-site',
    typeStyle: { background: 'rgba(128,19,54,.22)', border: '1px solid rgba(128,19,54,.4)', color: 'rgba(237,224,240,.72)' },
    bullets: [
      'Built full CRM admin panel from scratch — dynamic modules for offers, bookings, employees, vendors using React + Redux Toolkit.',
      (<>Redesigned the booking flow, improving conversion by <strong style={{ color: '#EE4540' }}>15%</strong>.</>),
      (<>Reduced UI rendering latency by <strong style={{ color: '#EE4540' }}>30%</strong> via code-splitting, memoisation, and Redux optimisation.</>),
      'Integrated RESTful APIs for full CRUD — syncing marketing, sales, admin workflows in real time.',
    ],
    award: { title: 'Appreciation Certificate & Award', desc: 'Recognised by HolidayHub management for outstanding contributions to the product' },
    pills: ['React','Redux Toolkit','Material UI','Chart.js','React Router DOM','CSS3'],
  },
}

export default function Experience() {
  const [active, setActive] = useState<'cdn' | 'hub'>('cdn')
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  const exp = EXP[active]

  const switchTab = async (id: 'cdn' | 'hub') => {
    setActive(id)
    const { gsap } = await import('gsap')
    const panel = document.getElementById('ep-' + id)
    if (panel) gsap.fromTo(panel, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' })
  }

  return (
    <section id="experience" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="rv text-center mb-14">
          <div className="sl mb-3">Work History</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-.02em' }}>Experience</h2>
          <div className="ab mx-auto" />
        </div>

        <div className="rv flex flex-col md:flex-row gap-6">
          {/* Tab list */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible shrink-0 md:w-52">
            {(['cdn', 'hub'] as const).map(id => {
              const e = EXP[id]
              const isActive = active === id
              return (
                <button
                  key={id}
                  className={`etab text-left px-4 py-3 rounded-xl text-sm font-semibold whitespace-nowrap ${isActive ? 'active text-white' : ''}`}
                  style={!isActive ? { color: 'rgba(237,224,240,.6)' } : {}}
                  onClick={() => switchTab(id)}
                >
                  <div style={{ fontSize: '.68rem', color: isActive ? '#EE4540' : 'rgba(238,69,64,.5)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 2 }}>
                    {id === 'cdn' ? 'Apr 2024 – Jan 2026' : 'Dec 2023 – Mar 2024'}
                  </div>
                  {e.company}
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div className="flex-1">
            <div id={`ep-${active}`} className="epanel active glass gb rounded-2xl p-7">
              <div className="mb-5">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-medium" style={exp.typeStyle}>{exp.type}</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: '#EE4540' }}>
                  {exp.company}&nbsp;·&nbsp;
                  <span style={{ color: 'rgba(237,224,240,.42)', fontWeight: 400 }}>{exp.period}</span>
                </p>
              </div>

              <div className="space-y-3 mb-5">
                {exp.bullets.map((bullet, i) => (
                  <div key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'rgba(237,224,240,.62)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#EE4540' }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Award badge */}
              <div className="flex items-center gap-3 p-3 rounded-xl mb-5" style={{ background: 'rgba(238,69,64,.08)', border: '1px solid rgba(238,69,64,.22)' }}>
                <span className="text-xl">🏆</span>
                <div>
                  <p className="text-xs font-bold text-white">{exp.award.title}</p>
                  <p className="text-xs" style={{ color: 'rgba(237,224,240,.5)' }}>{exp.award.desc}</p>
                </div>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: '1px solid rgba(238,69,64,.1)' }}>
                {exp.pills.map(p => <span key={p} className="tp">{p}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
