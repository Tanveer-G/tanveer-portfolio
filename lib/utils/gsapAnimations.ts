import { useEffect, RefObject } from 'react'

/**
 * Animate all .rv elements within the given container ref.
 * Skips elements whose IDs are managed by the hero timeline.
 */
export function useScrollReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return
    let ctx: any

    const run = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const HERO_IDS = new Set(['h-ey', 'hw1', 'hw2', 'h-ti', 'h-sub', 'h-pills', 'h-ctas', 'h-sc'])

      ctx = gsap.context(() => {
        const items = ref.current?.querySelectorAll<HTMLElement>('.rv') ?? []
        items.forEach(el => {
          if (HERO_IDS.has(el.id)) return
          gsap.fromTo(
            el,
            { opacity: 0, y: 52, scale: 0.97 },
            {
              opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
            }
          )
        })
      }, ref.current ?? undefined)
    }

    run()
    return () => ctx?.revert()
  }, [ref])
}

/**
 * Animate GSAP counter with ScrollTrigger.
 */
export function useCounter(ref: RefObject<HTMLElement | null>, to: number, sfx = '') {
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
              v: to, duration: 2.2, ease: 'power3.out',
              onUpdate() { el.textContent = Math.round(obj.v) + sfx },
            })
          },
        })
      })
    }
    run()
    return () => ctx?.revert()
  }, [ref, to, sfx])
}

/**
 * GSAP fade-in-up for a single ref.
 */
export function useFadeIn(ref: RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    if (!ref.current) return
    let ctx: any

    const run = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, delay, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
      })
    }
    run()
    return () => ctx?.revert()
  }, [ref, delay])
}
