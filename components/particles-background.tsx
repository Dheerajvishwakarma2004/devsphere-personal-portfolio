"use client"

import { useEffect, useRef } from "react"

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 1.5,
          opacity: Math.random() * 0.5 + 0.3,
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 14, 39, 0.01)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.opacity += (Math.random() - 0.5) * 0.02

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        p.opacity = Math.max(0.1, Math.min(1, p.opacity))

        ctx.fillStyle = `rgba(0, 217, 255, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    setCanvasSize()
    createParticles()
    animate()

    const handleResize = () => {
      setCanvasSize()
      createParticles()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none dark:block hidden" style={{ zIndex: 0 }} />
  )
}
