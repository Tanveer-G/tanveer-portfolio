'use client'

import { useRef, useEffect } from 'react'
import { IMPACT_STATS, DEGREE } from '@/lib/data/constants'
import { useScrollReveal } from '@/lib/utils/gsapAnimations'

function Counter({
  to,
  sfx,
  fontSize,
}: {
  to: number
  sfx: string
  fontSize: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obj = { v: 0 }
    let ctx: any

    const run = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 82%',
          once: true,
          onEnter() {
            gsap.to(obj, {
              v: to,
              duration: 2.2,
              ease: 'power3.out',
              onUpdate() {
                el.textContent = Math.round(obj.v) + sfx
              },
            })
          },
        })
      })
    }
    run()
    return () => ctx?.revert()
  }, [to, sfx])

  return (
    <span ref={ref} className="gt font-black" style={{ fontSize, lineHeight: 1 }}>
      0{sfx}
    </span>
  )
}

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef)

  return (
    <section
      id="metrics"
      className="py-24 px-6"
      ref={sectionRef}
      style={{ background: 'linear-gradient(to bottom,#20142C,rgba(81,10,50,.12),#20142C)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="rv text-center mb-14">
          <div className="sl mb-3">Impact</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: '-.02em' }}
          >
            By The Numbers
          </h2>
          <div className="ab mx-auto" />
        </div>

        {/* 5-column stat grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {IMPACT_STATS.map(stat => (
            <div
              key={stat.label}
              className={`rv stc glass gb rounded-2xl p-6 text-center${
                stat.label === 'Lighthouse Score' ? ' col-span-2 md:col-span-1 lg:col-span-1' : ''
              }`}
            >
              <div className="mb-1">
                <Counter to={stat.to} sfx={stat.sfx} fontSize={stat.fontSize} />
              </div>
              <p className="text-xs font-semibold mb-1" style={{ color: 'rgba(237,224,240,.48)' }}>
                {stat.label}
              </p>
              {'badges' in stat && stat.badges && (
                <div className="flex justify-center items-center gap-1.5 flex-wrap mt-1">
                  {stat.badges.map(b => (
                    <span
                      key={b}
                      className="px-1.5 py-0.5 rounded"
                      style={{
                        background: 'rgba(238,69,64,.12)',
                        color: 'rgba(237,224,240,.5)',
                        fontSize: '.6rem',
                        fontWeight: 600,
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Degree card */}
        <div className="rv glass gb rounded-2xl p-7 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div
              className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl"
              style={{
                background: 'linear-gradient(135deg,rgba(238,69,64,.2),rgba(128,19,54,.2))',
                border: '1px solid rgba(238,69,64,.2)',
              }}
            >
              🎓
            </div>
            <div className="flex-1">
              <div className="sl mb-1">Education</div>
              <h3 className="font-bold text-white text-xl mb-1">{DEGREE.title}</h3>
              <p className="text-sm font-semibold mb-0.5" style={{ color: 'rgba(237,224,240,.7)' }}>
                {DEGREE.institution}
              </p>
              <p className="text-xs" style={{ color: 'rgba(237,224,240,.42)' }}>
                {DEGREE.period}&nbsp;·&nbsp;
                <strong style={{ color: '#EE4540' }}>{DEGREE.grade}</strong>
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  )
}
