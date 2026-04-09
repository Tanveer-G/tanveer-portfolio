// /**
//  * Main portfolio page.
//  * All heavy client components (GSAP, Three.js, audio) are lazy-loaded
//  * with `dynamic` to avoid SSR errors and keep the initial bundle lean.
//  */
// 'use client'
// import dynamic from 'next/dynamic'

// // ── Layout / utility client components ──────────────────────────────────────
// const SmoothScroll = dynamic(() => import('@/components/client/SmoothScroll'), { ssr: false })
// const Cursor       = dynamic(() => import('@/components/client/Cursor'),       { ssr: false })
// const Nav          = dynamic(() => import('@/components/client/Nav'),          { ssr: false })

// // ── Sections ─────────────────────────────────────────────────────────────────
// // Hero loads Three.js — must be client-only
// const Hero       = dynamic(() => import('@/components/client/Hero'),       { ssr: false })
// // Marquee is a pure CSS animation, no client state needed — can SSR
// import MarqueeSection from '@/components/client/Marquee'
// // All other sections use GSAP ScrollTrigger — client-only
// const About      = dynamic(() => import('@/components/client/About'),      { ssr: false })
// const Experience = dynamic(() => import('@/components/client/Experience'), { ssr: false })
// const Projects   = dynamic(() => import('@/components/client/Projects'),   { ssr: false })
// const Skills     = dynamic(() => import('@/components/client/Skills'),     { ssr: false })
// const Impact     = dynamic(() => import('@/components/client/Impact'),     { ssr: false })
// const Contact    = dynamic(() => import('@/components/client/Contact'),    { ssr: false })
// const Resume     = dynamic(() => import('@/components/client/Resume'),     { ssr: false })
// // Footer is static — SSR is fine
// import Footer from '@/components/client/Footer'

// export default function Page() {
//   return (
//     <>
//       {/* Global utilities (cursor + smooth scroll run on client only) */}
//       <SmoothScroll />
//       <Cursor />

//       {/* Navigation */}
//       <Nav />

//       <main>
//         {/* 1. Hero — Three.js particles + GSAP entrance + audio intro */}
//         <Hero />

//         <div className="dv" />

//         {/* Tech stack ticker */}
//         <MarqueeSection />

//         <div className="dv" />

//         {/* 2. About */}
//         <About />

//         <div className="dv" />

//         {/* 3. Experience */}
//         <Experience />

//         <div className="dv" />

//         {/* 4. Projects — with skill search + highlight */}
//         <Projects />

//         <div className="dv" />

//         {/* 5. Skills — category filter + tooltips */}
//         <Skills />

//         <div className="dv" />

//         {/* 6. Impact / Metrics — GSAP counters + degree */}
//         <Impact />

//         <div className="dv" />

//         {/* 7. Contact form — POST → /api/contact → Brevo */}
//         <Contact />

//         {/* Resume download */}
//         <Resume />

//         <div className="dv" />
//       </main>

//       <Footer />
//     </>
//   )
// }
import type { Metadata } from 'next'
import ClientWrapper from '@/components/client/ClientWrapper'

export const metadata: Metadata = {
  title: 'Tanveer H. | Frontend-focused Full Stack Developer',
  description: '3+ years building production web apps with React, Next.js, TypeScript. Fast, accessible, and scalable solutions.',
  openGraph: {
    title: 'Tanveer H. – Full Stack Developer Portfolio',
    description: 'React, Next.js, Node.js expert. 15+ projects shipped.',
    images: ['/projects/og.webp'],
  },
}

export default function Page() {
  return <ClientWrapper />
}