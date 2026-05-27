'use client'

// import dynamic from 'next/dynamic'
// import ClarityProvider from './Clarity'

import SmoothScroll from '@/components/client/SmoothScroll'
import Cursor from '@/components/client/Cursor'
import Nav from '@/components/client/Nav'
import Hero from '@/components/client/Hero'
import MarqueeSection from '@/components/client/Marquee'
import About from '@/components/client/About'
import Experience from '@/components/client/Experience'
import Projects from '@/components/client/Projects'
import Skills from '@/components/client/Skills'
import Impact from '@/components/client/Impact'
import Contact from '@/components/client/Contact'
import Resume from '@/components/client/Resume'
import Footer from '@/components/client/Footer'
import ClarityProvider from './Clarity'

// Lazy load heavy client components (they will never run on server)
// const SmoothScroll = dynamic(() => import('@/components/client/SmoothScroll'), { ssr: false })
// const Cursor = dynamic(() => import('@/components/client/Cursor'), { ssr: false })
// const Nav = dynamic(() => import('@/components/client/Nav'), { ssr: false })
// const Hero = dynamic(() => import('@/components/client/Hero'), { ssr: false })
// const MarqueeSection = dynamic(() => import('@/components/client/Marquee'), { ssr: false })
// const About = dynamic(() => import('@/components/client/About'), { ssr: false })
// const Experience = dynamic(() => import('@/components/client/Experience'), { ssr: false })
// const Projects = dynamic(() => import('@/components/client/Projects'), { ssr: false })
// const Skills = dynamic(() => import('@/components/client/Skills'), { ssr: false })
// const Impact = dynamic(() => import('@/components/client/Impact'), { ssr: false })
// const Contact = dynamic(() => import('@/components/client/Contact'), { ssr: false })
// const Resume = dynamic(() => import('@/components/client/Resume'), { ssr: false })
// const Footer = dynamic(() => import('@/components/client/Footer'), { ssr: false })



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
      <ClarityProvider />
    </>
  )
}