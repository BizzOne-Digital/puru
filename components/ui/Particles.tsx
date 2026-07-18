'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

/** Client-only random particles (generated after mount to avoid hydration mismatch). */
export default function Particles({ count = 26, className = '' }: { count?: number; className?: string }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 5 + Math.random() * 7,
        delay: Math.random() * 6,
        opacity: 0.15 + Math.random() * 0.4,
      }))
    );
  }, [count]);

  if (prefersReducedMotion) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite, pulse-glow ${p.duration * 0.7}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
