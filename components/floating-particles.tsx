"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
  opacity: number
}

const colors = [
  "#9333ea", // purple-600
  "#ec4899", // pink-500
  "#06b6d4", // cyan-500
  "#10b981", // emerald-500
  "#f59e0b", // amber-500
  "#ef4444", // red-500
  "#8b5cf6", // violet-500
  "#14b8a6", // teal-500
]

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = []
    for (let i = 0; i < 20; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.6 + 0.2,
      })
    }
    setParticles(initialParticles)

    // Animation loop
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            particle.speedX *= -1
            newX = Math.max(0, Math.min(window.innerWidth, newX))
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            particle.speedY *= -1
            newY = Math.max(0, Math.min(window.innerHeight, newY))
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const intervalId = setInterval(animate, 50)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Additional floating spiritual symbols */}
      <div className="absolute top-20 left-10 animate-bounce text-4xl opacity-30">✨</div>
      <div className="absolute top-40 right-20 animate-pulse text-3xl opacity-40" style={{ animationDelay: "1s" }}>
        🔮
      </div>
      <div className="absolute bottom-32 left-1/4 animate-bounce text-2xl opacity-35" style={{ animationDelay: "2s" }}>
        ⭐
      </div>
      <div className="absolute top-1/3 right-1/3 animate-pulse text-3xl opacity-30" style={{ animationDelay: "3s" }}>
        💫
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce text-2xl opacity-40" style={{ animationDelay: "4s" }}>
        🌟
      </div>
      <div className="absolute top-1/2 left-20 animate-pulse text-2xl opacity-35" style={{ animationDelay: "5s" }}>
        ✨
      </div>
    </div>
  )
}
