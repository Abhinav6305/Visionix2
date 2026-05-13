import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number | number[]
  rootMargin?: string
  once?: boolean
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    once = false
  } = options

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: Array.isArray(threshold) ? threshold : threshold,
        rootMargin
      }
    )

    observer.observe(ref.current)

    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold, rootMargin, once])

  return { ref, isVisible, scrollProgress }
}
