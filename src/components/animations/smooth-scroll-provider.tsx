'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SCROLLER_DATA_ATTR, SCROLLER_ID } from '@/lib/scroll'

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
    let locomotiveScroll: any
    let refreshHandler: (() => void) | null = null
    let scrollHandler: (() => void) | null = null
    let isCanceled = false

    const initLocomotiveScroll = async () => {
      const scrollEl = scrollRef.current

      if (!scrollEl) return

      const LocomotiveScroll = (await import('locomotive-scroll')).default

      if (isCanceled) return

      locomotiveScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 1024
        }
      })

      // Sync Locomotive with ScrollTrigger
      scrollHandler = () => ScrollTrigger.update()
      locomotiveScroll.on('scroll', scrollHandler)

      // Use the locomotive container as the default scroller
      ScrollTrigger.defaults({ scroller: scrollEl })

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {
          return arguments.length
            ? locomotiveScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locomotiveScroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        },
        pinType: scrollRef.current!.style.transform ? 'transform' : 'fixed'
      })

      refreshHandler = () => locomotiveScroll?.update()
      ScrollTrigger.addEventListener('refresh', refreshHandler)
      ScrollTrigger.refresh()
    }

    initLocomotiveScroll()

    return () => {
      isCanceled = true

      if (scrollHandler && locomotiveScroll?.off) {
        locomotiveScroll.off('scroll', scrollHandler)
      }

      if (refreshHandler) {
        ScrollTrigger.removeEventListener('refresh', refreshHandler)
      }

      const scrollEl = scrollRef.current
      ScrollTrigger.getAll()
        .filter(trigger => trigger.scroller === scrollEl)
        .forEach(trigger => trigger.kill())

      ScrollTrigger.defaults({})

      if (locomotiveScroll) locomotiveScroll.destroy()
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
