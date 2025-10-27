'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SCROLLER_DATA_ATTR, SCROLLER_ID } from '@/lib/scroll'

type LocomotiveScrollInstance = {
  update: () => void
  destroy: () => void
  on: (event: string, callback: (...args: unknown[]) => void) => void
  off: (event: string, callback: (...args: unknown[]) => void) => void
  scrollTo: (target: number | string | HTMLElement, options?: { duration?: number; disableLerp?: boolean }) => void
  scroll?: { instance: { scroll: { y: number } } }
}

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ===========================================
// SMOOTH SCROLL PROVIDER COMPONENT
// ===========================================
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let locomotiveScroll: LocomotiveScrollInstance | null = null
    let refreshHandler: (() => void) | null = null
    let scrollHandler: (() => void) | null = null
    let isCanceled = false

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default

      if (isCanceled) return

      locomotiveScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 1024,
        },
      })

      scrollHandler = () => ScrollTrigger.update()
      locomotiveScroll.on('scroll', scrollHandler)

      ScrollTrigger.defaults({ scroller: scrollContainer })

      ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
          if (!locomotiveScroll) return 0
          if (arguments.length) {
            locomotiveScroll.scrollTo(value as number, { duration: 0, disableLerp: true })
            return 0
          }
          return locomotiveScroll.scroll?.instance.scroll.y ?? 0
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: scrollContainer.style.transform ? 'transform' : 'fixed',
      })

      refreshHandler = () => locomotiveScroll?.update()
      ScrollTrigger.addEventListener('refresh', refreshHandler)
      ScrollTrigger.refresh()

      if (typeof document !== 'undefined') {
        document.body.dataset.smoothScrollReady = 'true'
        window.dispatchEvent(new Event('smooth-scroll:ready'))
      }
    }

    initLocomotiveScroll()

    return () => {
      isCanceled = true

      if (typeof document !== 'undefined') {
        delete document.body.dataset.smoothScrollReady
        window.dispatchEvent(new Event('smooth-scroll:teardown'))
      }

      if (scrollHandler && locomotiveScroll?.off) {
        locomotiveScroll.off('scroll', scrollHandler)
      }

      if (refreshHandler) {
        ScrollTrigger.removeEventListener('refresh', refreshHandler)
      }

      ScrollTrigger.getAll()
        .filter(trigger => trigger.scroller === scrollContainer)
        .forEach(trigger => trigger.kill())

      ScrollTrigger.defaults({})

      locomotiveScroll?.destroy()
    }
  }, [])

  return (
    <div
      id={SCROLLER_ID}
      ref={scrollRef}
      {...{ [SCROLLER_DATA_ATTR]: "" }}
    >
      {children}
    </div>
  )
}
