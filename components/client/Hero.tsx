'use client'
import { useState, useRef } from 'react'
import { STAT_PILLS } from '@/lib/data/constants'
import BackgroundEffect from './BackgroundEffect'

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleAudio = () => {
    // Lazy-init audio on first click
    if (!audioRef.current) {
      const audio = new Audio('/audio/intro.m4a') // or .mp3
      audio.addEventListener('ended', () => setIsPlaying(false))
      audio.addEventListener('error', () => {
        setAudioError(true)
        setIsPlaying(false)
      })
      audioRef.current = audio
    }

    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      // Reset if already ended
      if (audio.ended) audio.currentTime = 0
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setAudioError(true)
          setIsPlaying(false)
        })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center gbg overflow-hidden"
    >
      <BackgroundEffect />

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
        <div className="sl mb-5 flex items-center justify-center gap-3 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.1s' }}
        >
          <span style={{ width: 32, height: 1, background: '#EE4540', display: 'inline-block' }} />
          Frontend-focused Full Stack Developer · 3+ Years
          <span style={{ width: 32, height: 1, background: '#EE4540', display: 'inline-block' }} />
        </div>

        {/* Big stacked headline */}
        <div className="mb-4 overflow-hidden">
          <div className="hero-line">
            <span
              className="hero-word font-black text-white block opacity-0 animate-slideUp"
              style={{
                fontSize: 'clamp(4rem,13vw,9.5rem)',
                letterSpacing: '-.032em',
                lineHeight: 0.88,
                animationDelay: '0.3s'
              }}
            >
              WEB APPS
            </span>
          </div>
          <div className="hero-line">
            <span
              className="hero-word gt font-black block opacity-0 animate-slideUp"
              style={{
                fontSize: 'clamp(4rem,13vw,9.5rem)',
                letterSpacing: '-.032em',
                lineHeight: 0.9,
                animationDelay: '0.5s'
              }}
              onClick={handleAudio}
              role="button"
              tabIndex={0}
            >
              DEVELOPER
            </span>
          </div>
        </div>

        {/* Title line */}
        <p
          className="font-semibold mb-4 opacity-0 animate-fadeInUp"
          style={{ fontSize: 'clamp(.85rem,2.2vw,1.1rem)', color: 'rgba(237,224,240,.62)', animationDelay: '0.7s' }}
        >
          TANVEER H. &nbsp;|&nbsp; React · Next.js · TypeScript · Node.js · Docker · AWS
        </p>

        {/* Subline */}
        <p
          className="text-base md:text-lg mb-8 leading-relaxed opacity-0 animate-fadeInUp"
          style={{ color: 'rgba(237,224,240,.52)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', animationDelay: '0.8s' }}
        >
          I build <strong style={{ color: '#ede0f0' }}>fast, reactive web apps</strong> that solve real problems —{' '}
          from pixel-perfect UIs to production-ready full-stack systems.
        </p>

        {/* Floating stat pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-8 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.9s' }}
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '1s' }}
        >
          <a
            id="pro-btn"
            href="#projects"
            className="btn-p font-semibold text-sm rounded-2xl flex items-center justify-center gap-2"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 8 12 16 20 8" />
            </svg>
            View Work
          </a>

          <button
            id="aud-btn"
            onClick={handleAudio}
            className={`btn-o font-semibold text-sm rounded-2xl ${audioError ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={audioError}
            title={audioError ? 'Audio unavailable' : 'Play intro'}
          >
            {isPlaying ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
            <span>{isPlaying ? 'Pause' : (audioError ? 'Unavailable' : 'Play Intro')}</span>
            <span id="btn-wave" className={isPlaying ? 'on' : ''}>
              <span className="bwb" style={{ height: 14 }} />
              <span className="bwb" style={{ height: 14, background: 'rgba(199,44,65,.85)' }} />
              <span className="bwb" style={{ height: 14 }} />
              <span className="bwb" style={{ height: 14, background: 'rgba(199,44,65,.85)' }} />
            </span>
          </button>
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-2 opacity-0 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
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