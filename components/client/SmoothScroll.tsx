'use client'

import { useEffect } from 'react'

/**
 * SmoothScroll — Lenis-style RAF smooth scroll shim.
 * Connects to GSAP ScrollTrigger via ScrollTrigger.update().
 * Only activates on desktop (>768px) and respects prefers-reduced-motion.
 * Import once in the root page; wraps no children.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || window.innerWidth <= 768) return

    let target = window.scrollY
    let current = window.scrollY
    let last = 0
    let rafId: number

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    const raf = async (ts: number) => {
      rafId = requestAnimationFrame(raf)
      if (ts - last < 16) return
      last = ts
      current += (target - current) * 0.09
      window.scrollTo(0, current)
      // Dynamically import ScrollTrigger to avoid SSR issues
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      ScrollTrigger.update()
    }
    rafId = requestAnimationFrame(raf)

    const onWheel = (e: WheelEvent) => {
      target = Math.max(
        0,
        Math.min(document.body.scrollHeight - window.innerHeight, target + e.deltaY)
      )
    }

    let ts0 = 0
    const onTouchStart = (e: TouchEvent) => { ts0 = e.touches[0].clientY }
    const onTouchMove = (e: TouchEvent) => {
      const dy = ts0 - e.touches[0].clientY
      target = Math.max(0, Math.min(document.body.scrollHeight - window.innerHeight, target + dy * 1.6))
      ts0 = e.touches[0].clientY
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    // Anchor smooth-jump
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    const onAnchorClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement
      const sel = a.getAttribute('href')
      if (!sel || sel === '#') return
      const el = document.querySelector(sel)
      if (el) {
        e.preventDefault()
        target = el.getBoundingClientRect().top + window.scrollY - 64
      }
    }
    anchors.forEach(a => a.addEventListener('click', onAnchorClick))

    return () => {
      cancelAnimationFrame(rafId)
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      anchors.forEach(a => a.removeEventListener('click', onAnchorClick))
    }
  }, [])

  return null
}
