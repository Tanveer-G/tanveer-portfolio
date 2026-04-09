'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { STAT_PILLS } from '@/lib/data/constants'

const ThreeBackground = dynamic(() => import('./ThreeBackground'), { ssr: false })

export default function Hero() {
  const [speaking, setSpeaking] = useState(false)

  // Audio logic
  const handleAudio = () => {
    if (!window?.speechSynthesis) {
      alert('Web Speech API not supported in this browser.')
      return
    }
    if (speaking) {
      window?.speechSynthesis.cancel()
      setSpeaking(false)
    } else {
      window?.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(
        "Hi, I'm Tanveer, frontend-focused full stack developer. " +
        "I build fast, reactive web apps that solve real problems. " +
        "Scroll down to see my work."
      )
      u.rate = 0.94; u.pitch = 1.02; u.volume = 1
      u.onend = () => setSpeaking(false)
      u.onerror = () => setSpeaking(false)
      window.speechSynthesis.speak(u)
      setSpeaking(true)
    }
  }

  // GSAP entrance
  useEffect(() => {
    let ctx: any
    const run = async () => {
      const { gsap } = await import('gsap')
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.2 })
        gsap.set('#h-ti',  { y: 20, opacity: 0 })
        gsap.set('#h-sub', { y: 24, opacity: 0 })

        tl.to('#h-ey',    { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' })
          .to('#hw1',     { y: '0%', opacity: 1, duration: 1.05, ease: 'power4.out' }, '-=.35')
          .to('#hw2',     { y: '0%', opacity: 1, duration: 1.05, ease: 'power4.out' }, '-=.82')
          .to('#h-ti',    { y: 0, opacity: 1, duration: 0.6,  ease: 'power3.out' }, '-=.5')
          .to('#h-sub',   { y: 0, opacity: 1, duration: 0.6,  ease: 'power3.out' }, '-=.45')
          .to('#h-pills', { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }, '-=.4')
          .to('#h-ctas',  { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }, '-=.4')
          .to('#h-sc',    { opacity: 1, duration: 0.5 }, '-=.25')
      })
    }
    run()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center gbg overflow-hidden"
    >
      <ThreeBackground />

      {/* Radial ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 58% at 50% 58%,rgba(128,19,54,.32) 0%,transparent 74%)' }}
      />
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ top: '20%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(238,69,64,.1),transparent)' }}
      />

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full"
        style={{ paddingTop: '7rem', paddingBottom: '1rem' }}
      >
        {/* Eyebrow */}
        <div
          id="h-ey"
          className="sl mb-5 flex items-center justify-center gap-3"
          style={{ opacity: 0 }}
        >
          <span style={{ width: 32, height: 1, background: '#EE4540', display: 'inline-block' }} />
          Frontend-focused Full Stack Developer · 3+ Years
          <span style={{ width: 32, height: 1, background: '#EE4540', display: 'inline-block' }} />
        </div>

        {/* Big stacked headline */}
        <div className="mb-4 overflow-hidden">
          <div className="hero-line">
            <span
              id="hw1"
              className="hero-word font-black text-white"
              style={{
                fontSize: 'clamp(4rem,13vw,9.5rem)',
                letterSpacing: '-.032em',
                lineHeight: 0.88,
                display: 'block',
                opacity: 0,
                transform: 'translateY(110%)',
              }}
            >
              WEB APPS
            </span>
          </div>
          <div className="hero-line">
            <span
              id="hw2"
              className="hero-word gt font-black"
              style={{
                fontSize: 'clamp(4rem,13vw,9.5rem)',
                letterSpacing: '-.032em',
                lineHeight: 0.9,
                display: 'block',
                opacity: 0,
                transform: 'translateY(110%)',
              }}
            >
              DEVELOPER
            </span>
          </div>
        </div>

        {/* Title line */}
        <p
          id="h-ti"
          className="font-semibold mb-4"
          style={{ fontSize: 'clamp(.85rem,2.2vw,1.1rem)', color: 'rgba(237,224,240,.62)', opacity: 0 }}
        >
          TANVEER H. &nbsp;|&nbsp; React · Next.js · TypeScript · Node.js · Docker · AWS
        </p>

        {/* Subline */}
        <p
          id="h-sub"
          className="text-base md:text-lg mb-8 leading-relaxed"
          style={{ color: 'rgba(237,224,240,.52)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', opacity: 0 }}
        >
          I build <strong style={{ color: '#ede0f0' }}>fast, reactive web apps</strong> that solve real problems —{' '}
          from pixel-perfect UIs to production-ready full-stack systems.
        </p>


        {/* Floating stat pills */}
        <div
          id="h-pills"
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
          style={{ opacity: 0 }}
        >
          {STAT_PILLS.map((pill, i) => (
            <span key={pill.label + i} className="stat-pill">
              {pill.dot && (
                <span className='adot' style={{ width: 7, height: 7, borderRadius: '50%', background: '#EE4540', boxShadow: '0 0 8px #EE4540', flexShrink: 0 }} />
              )}
              {pill.label}
            </span>
          ))}
        </div>
        
        {/* CTA Buttons */}

        <div
          id="h-ctas"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          style={{ opacity: 0 }}
        >
          {/* View Work */}
          <a
            id="pro-btn"
            href="#projects"
            className="btn-p font-semibold text-sm rounded-2xl flex items-center justify-center gap-2"
            // style={{ width: 160, height: 56 }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 8 12 16 20 8" />
            </svg>
            View Work
          </a>

          {/* Play Intro — fixed 160×56px always */}
          <button
            id="aud-btn"
            onClick={handleAudio}
            className="btn-o font-semibold text-sm rounded-2xl"
          >
            {speaking ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
            <span>{speaking ? 'Pause' : 'Play Intro'}</span>
            <span id="btn-wave" className={speaking ? 'on' : ''}>
              <span className="bwb" style={{ height: 14 }} />
              <span className="bwb" style={{ height: 14, background: 'rgba(199,44,65,.85)' }} />
              <span className="bwb" style={{ height: 14 }} />
              <span className="bwb" style={{ height: 14, background: 'rgba(199,44,65,.85)' }} />
            </span>
          </button>
        </div>




   {/* Scroll cue */}
        <div id="h-sc" className="flex flex-col items-center gap-2" style={{ opacity: 0 }}>
          <span className="sl" style={{ fontSize: '.55rem', letterSpacing: '.22em' }}>Scroll</span>
          <div className="scroll-arrow" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom,#EE4540,rgba(238,69,64,.2))' }} />
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="#EE4540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>



     
      </div>
    </section>
  )
}
