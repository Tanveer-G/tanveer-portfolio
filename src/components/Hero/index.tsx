'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type Tech = { id: string; label: string; src: string; alt: string }

const TECHS: Tech[] = [
  { id: 'js', label: 'JavaScript', src: '/icons/js.svg', alt: 'JavaScript' },
  { id: 'ts', label: 'TypeScript', src: '/icons/ts.svg', alt: 'TypeScript' },
  { id: 'react', label: 'React', src: '/icons/react.svg', alt: 'React' },
  { id: 'tailwind', label: 'Tailwind CSS', src: '/icons/tailwind.svg', alt: 'Tailwind CSS' },
  { id: 'prisma', label: 'Prisma', src: '/icons/prisma.svg', alt: 'Prisma' },
  { id: 'git', label: 'Git', src: '/icons/git.svg', alt: 'Git' },
]

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative hero-bg hero-overlay overflow-hidden"
      // background image is controlled in globals.css via .hero-bg, overlay via .hero-overlay::before
    >
      {/* Overlay helper for screen readers: decorative background */}
      <span className="sr-only">Starry purple-blue cosmic background</span>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16 md:py-28 lg:py-32">
        {/* header area (logo/nav slot) - optional, kept minimal here */}
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-white/8 flex items-center justify-center text-white/90 font-bold">
              TF
            </div>
            <span className="sr-only">Tanveer — Frontend Developer</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#work" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Work</a>
            <a href="#about" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">About</a>
            <a href="#blog" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Blog</a>
            <a href="#contact" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Contact</a>

            {/* Hire button uses btn-outline token from globals.css */}
            <a href="#contact" className="ml-4 btn-outline rounded-full px-4 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
              Hire Me
            </a>
          </nav>
        </div>

        {/* MAIN HERO: 2-column responsive layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          {/* Left: content */}
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="flex items-center gap-3 text-sm text-[var(--text-main)] mb-4">
              <span className="text-indigo-300">+</span>
              <span>Welcome to my creative realm</span>
            </div>

            <h1 id="hero-heading" className="h1-gradient font-display font-extrabold text-[clamp(36px,6vw,72px)] leading-[1.02] tracking-tight">
              FRONTEND DEVELOPER
            </h1>

            <p className="mt-6 text-[clamp(15px,2vw,18px)] max-w-xl text-[var(--text-main)]">
              Hi, I am <strong>Tanveer</strong> — <span className="text-[var(--grad-1-mid)]">Web Developer</span> with a passion for creating beautiful
              and responsive <strong>Web Apps</strong>. I build fast, accessible, and delightful user experiences.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#work"
                className="btn-primary inline-flex items-center justify-center h-12 px-6 rounded-2xl font-semibold transition-transform will-change-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-indigo-400"
              >
                VIEW MY WORK
              </a>

              <a
                href="#contact"
                className="btn-outline inline-flex items-center justify-center h-12 px-6 rounded-2xl font-semibold focus-visible:outline-2 focus-visible:outline-indigo-400"
              >
                CONTACT NOW!
              </a>
            </div>

            {/* Icon / Tech row */}
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              {TECHS.map((t) => (
                <div key={t.id} className="flex flex-col items-center gap-2 w-20">
                  <div className="tech-icon w-16 h-16 flex items-center justify-center">
                    <Image src={t.src} alt={t.alt} width={36} height={36} priority={false} />
                  </div>
                  <div className="text-xs text-[var(--icon-label)] text-center">{t.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: portrait */}
          <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
            <div
              className="w-[300px] sm:w-[360px] md:w-[420px] rounded-xl overflow-hidden shadow-[var(--portrait)]"
              style={{ boxShadow: 'var(--portrait)' }}
            >
              <Image
                src="/images/portrait-hero.webp"
                alt="Tanveer portrait"
                width={840}
                height={1120}
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Left vertical social strip (desktop only) */}
      <aside className="fixed left-6 top-1/3 hidden md:flex flex-col gap-3 z-40" aria-label="Social links">
        <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-md bg-[#071022] flex items-center justify-center text-white hover:scale-105 transform transition">
          {/* LinkedIn icon (inline svg) */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 4h4v16H4zM10 9v11h4V9c0-1.7 1.4-3 3-3s3 1.3 3 3v11h-4V12c0-.6-.4-1-1-1s-1 .4-1 1v8h-4V9z" fill="white"/>
          </svg>
        </a>

        <a href="#" aria-label="Twitter" className="w-11 h-11 rounded-md bg-[#071022] flex items-center justify-center text-white hover:scale-105 transform transition">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M23 4.5c-.7.3-1.3.6-2 .7.7-.4 1.2-1 1.4-1.8-.7.4-1.5.8-2.4 1C19 3 18 2.5 16.9 2.5c-2 0-3.6 1.7-3.6 3.8 0 .3 0 .5.1.8-3-.2-5.8-1.7-7.6-4.1-.3.6-.5 1.4-.5 2.1 0 1.4.7 2.6 1.7 3.3-.6 0-1.2-.2-1.7-.5 0 1.9 1.4 3.5 3.3 3.9-.3.1-.6.2-.9.2-.2 0-.5 0-.7-.1.5 1.7 2 2.9 3.7 2.9C7.6 20 10 21 12.6 21c6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.2-1 1.6-1.6-.6.3-1.3.5-2 .6z" fill="white"/>
          </svg>
        </a>

        <a href="#" aria-label="Email" className="w-11 h-11 rounded-md bg-[#071022] flex items-center justify-center text-white hover:scale-105 transform transition">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 7.5l9 6 9-6v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 7.5l-9 6-9-6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </aside>
    </section>
  )
}
