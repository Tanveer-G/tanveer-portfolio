'use client'

import { useRef, useState } from 'react'
import { SKILLS, SK_CATS, type SkillCategory } from '@/lib/data/skills'
import { useScrollReveal } from '@/lib/utils/gsapAnimations'

export default function Skills() {
  const [active, setActive] = useState<'All' | SkillCategory>('All')
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  const handleFilter = async (cat: 'All' | SkillCategory) => {
    setActive(cat)
    const { gsap } = await import('gsap')
    document.querySelectorAll<HTMLElement>('.skc').forEach(card => {
      const show = cat === 'All' || card.dataset.cat === cat
      if (show) {
        card.style.display = 'flex'
        gsap.fromTo(card, { opacity: 0, scale: 0.88, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'power3.out' })
      } else {
        gsap.to(card, {
          opacity: 0, scale: 0.88, y: 6, duration: 0.18, ease: 'power2.in',
          onComplete: () => { card.style.display = 'none' },
        })
      }
    })
  }

  return (
    <section id="skills" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="rv text-center mb-12">
          <div className="sl mb-3">Toolkit</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-.02em' }}>
            Skills
          </h2>
          <div className="ab mx-auto mb-4" />
          <p className="text-xs" style={{ color: 'rgba(237,224,240,.38)' }}>
            Hover for context&nbsp;·&nbsp;filter by category below
          </p>
        </div>

        {/* Category filter buttons */}
        <div className="rv flex flex-wrap justify-center gap-2.5 mb-8">
          {SK_CATS.map(cat => (
            <button
              key={cat}
              className={`fb px-5 py-2 rounded-full ${active === cat ? 'active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {SKILLS.map(s => (
            <div
              key={s.n}
              className="skc glass gb rounded-xl p-3 flex flex-col items-center gap-1.5 text-center"
              data-cat={s.c}
            >
              <div className="text-xl leading-none">{s.e}</div>
              <p className="text-xs font-semibold text-white leading-snug">{s.n}</p>
              <span className="tp" style={{ fontSize: '.58rem', padding: '2px 6px' }}>
                {s.c.split(' ')[0]}
              </span>
              <div className="sk-tip">{s.i}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
