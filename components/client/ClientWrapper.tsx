'use client'

import dynamic from 'next/dynamic'

// Lazy load heavy client components (they will never run on server)
const SmoothScroll = dynamic(() => import('@/components/client/SmoothScroll'), { ssr: false })
const Cursor = dynamic(() => import('@/components/client/Cursor'), { ssr: false })
const Nav = dynamic(() => import('@/components/client/Nav'), { ssr: false })
const Hero = dynamic(() => import('@/components/client/Hero'), { ssr: false })
const MarqueeSection = dynamic(() => import('@/components/client/Marquee'), { ssr: false })
const About = dynamic(() => import('@/components/client/About'), { ssr: false })
const Experience = dynamic(() => import('@/components/client/Experience'), { ssr: false })
const Projects = dynamic(() => import('@/components/client/Projects'), { ssr: false })
const Skills = dynamic(() => import('@/components/client/Skills'), { ssr: false })
const Impact = dynamic(() => import('@/components/client/Impact'), { ssr: false })
const Contact = dynamic(() => import('@/components/client/Contact'), { ssr: false })
const Resume = dynamic(() => import('@/components/client/Resume'), { ssr: false })
const Footer = dynamic(() => import('@/components/client/Footer'), { ssr: false })

export default function ClientWrapper() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <div className="dv" />
        <MarqueeSection />
        <div className="dv" />
        <About />
        <div className="dv" />
        <Experience />
        <div className="dv" />
        <Projects />
        <div className="dv" />
        <Skills />
        <div className="dv" />
        <Impact />
        <div className="dv" />
        <Contact />
        <Resume />
        <div className="dv" />
      </main>
      <Footer />
    </>
  )
}