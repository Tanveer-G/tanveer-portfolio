'use client'

import { useEffect, useRef } from 'react'

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let renderer: import('three').WebGLRenderer | undefined
    let animId: number

    const init = async () => {
      const THREE = await import('three')
      const canvas = canvasRef.current
      const hero = document.getElementById('hero')
      if (!canvas || !hero) return

      let W = hero.offsetWidth
      let H = hero.offsetHeight
      let mX = 0, mY = 0, tX = 0, tY = 0

      const scene = new THREE.Scene()
      const cam = new THREE.PerspectiveCamera(58, W / H, 0.1, 1000)
      cam.position.z = 5

      try {
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' })
      } catch {
        return
      }
      renderer.setSize(W, H)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setClearColor(0, 0)

      const N = 400
      const pos = new Float32Array(N * 3)
      const clr = new Float32Array(N * 3)
      const pal = [
        [0.93, 0.27, 0.25],
        [0.93, 0.27, 0.25],
        [0.78, 0.17, 0.25],
        [0.5,  0.07, 0.2 ],
        [0.72, 0.52, 0.62],
      ]
      for (let i = 0; i < N; i++) {
        pos[i * 3]     = (Math.random() - 0.5) * 22
        pos[i * 3 + 1] = (Math.random() - 0.5) * 14
        pos[i * 3 + 2] = (Math.random() - 0.5) * 10
        const c = pal[Math.floor(Math.random() * pal.length)]
        clr[i * 3] = c[0]; clr[i * 3 + 1] = c[1]; clr[i * 3 + 2] = c[2]
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(clr, 3))
      const mat = new THREE.PointsMaterial({ size: 0.042, vertexColors: true, transparent: true, opacity: 0.42 })
      const pts = new THREE.Points(geo, mat)
      scene.add(pts)

      const onMouseMove = (e: MouseEvent) => {
        mX = (e.clientX / window.innerWidth - 0.5) * 2
        mY = -(e.clientY / window.innerHeight - 0.5) * 1.3
      }
      const onResize = () => {
        W = hero.offsetWidth; H = hero.offsetHeight
        cam.aspect = W / H; cam.updateProjectionMatrix()
        renderer!.setSize(W, H)
      }

      document.addEventListener('mousemove', onMouseMove, { passive: true })
      window.addEventListener('resize', onResize)

      let t = 0, fr = 0
      const loop = () => {
        animId = requestAnimationFrame(loop)
        if (++fr % 2) return // 30fps cap
        t += 0.003
        pts.rotation.y = t * 0.06; pts.rotation.x = t * 0.022
        tX += (mX * 0.3 - tX) * 0.034; tY += (mY * 0.2 - tY) * 0.034
        cam.position.x = tX; cam.position.y = tY
        cam.lookAt(scene.position)
        renderer!.render(scene, cam)
      }
      loop()

      // Store cleanup refs
      return () => {
        document.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)
      }
    }

    let cleanup: (() => void) | undefined
    init().then(fn => { cleanup = fn })

    return () => {
      cancelAnimationFrame(animId)
      renderer?.dispose()
      cleanup?.()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="hero-c"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
