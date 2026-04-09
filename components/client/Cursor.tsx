'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hide on touch devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let dx = window.innerWidth / 2
    let dy = window.innerHeight / 2
    let rx = dx
    let ry = dy
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      dx = e.clientX
      dy = e.clientY
      dot.style.left = dx + 'px'
      dot.style.top = dy + 'px'
    }

    const craf = () => {
      rx += (dx - rx) * 0.11
      ry += (dy - ry) * 0.11
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(craf)
    }
    rafId = requestAnimationFrame(craf)

    const addHov = () => document.body.classList.add('hov')
    const rmHov = () => document.body.classList.remove('hov')

    // Attach hover effect to all interactive elements
    const attachCursor = () => {
      document.querySelectorAll(
        'a, button, input, textarea, select, .pjc, .skc, .ac, .etab, .fb, .stat-pill, [data-cursor]'
      ).forEach(el => {
        el.addEventListener('mouseenter', addHov)
        el.addEventListener('mouseleave', rmHov)
      })
    }
    attachCursor()

    // Re-attach on DOM mutations (for dynamically rendered skill/project cards)
    const observer = new MutationObserver(attachCursor)
    observer.observe(document.body, { childList: true, subtree: true })

    document.addEventListener('mousemove', onMouseMove, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cd" ref={dotRef} />
      <div id="cr" ref={ringRef} />
    </>
  )
}
