import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import useReducedMotion from './useReducedMotion'

/**
 * Subtle pointer parallax scoped to a target ref. Returns spring-smoothed
 * motion values in pixel space, ready to plug into `motion.*` transforms.
 * No-op under prefers-reduced-motion.
 *
 * @param {React.RefObject<HTMLElement>} ref  container to listen on
 * @param {number} strength                  peak translation in px (±)
 */
export default function useMouseParallax(ref, strength = 8) {
  const reduced = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 90, damping: 20, mass: 0.6 })
  const y = useSpring(rawY, { stiffness: 90, damping: 20, mass: 0.6 })

  useEffect(() => {
    if (reduced) return undefined
    const el = ref?.current
    if (!el) return undefined
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const nx = (e.clientX - cx) / (rect.width / 2)
      const ny = (e.clientY - cy) / (rect.height / 2)
      rawX.set(Math.max(-1, Math.min(1, nx)) * strength)
      rawY.set(Math.max(-1, Math.min(1, ny)) * strength)
    }
    const onLeave = () => {
      rawX.set(0)
      rawY.set(0)
    }
    el.addEventListener('mousemove', onMove, { passive: true })
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [ref, strength, rawX, rawY, reduced])

  return { x, y }
}
