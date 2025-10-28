"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type LocomotiveScroll from "locomotive-scroll"
import { SCROLLER_DATA_ATTR, SCROLLER_ID } from "@/lib/scroll"

type LocomotiveScrollInstance = InstanceType<typeof LocomotiveScroll> & {
  scroll?: { instance: { scroll: { y: number } } }
}

const DESKTOP_BREAKPOINT = 1024

// Register GSAP plugins
if (typeof window !== "undefined") {
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
    let detachScroll: (() => void) | null = null
    let isCanceled = false

    const shouldUseSmoothScroll =
      typeof window !== "undefined"
        ? window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches
        : false

    if (!shouldUseSmoothScroll) {
      scrollContainer.dataset.nativeScroll = "true"

      if (typeof document !== "undefined") {
        document.body.dataset.smoothScrollReady = "true"
        window.dispatchEvent(new Event("smooth-scroll:ready"))
      }

      requestAnimationFrame(() => ScrollTrigger.refresh())

      return () => {
        delete scrollContainer.dataset.nativeScroll

        if (typeof document !== "undefined") {
          delete document.body.dataset.smoothScrollReady
          window.dispatchEvent(new Event("smooth-scroll:teardown"))
        }
      }
    }

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default

      if (isCanceled) return

      locomotiveScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        multiplier: 1,
        class: "is-revealed",
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 1024,
        },
      })

      detachScroll = locomotiveScroll.on("scroll", () => ScrollTrigger.update())

      ScrollTrigger.defaults({ scroller: scrollContainer })

      const resolvePinType = () => {
        if (typeof window === "undefined") return "fixed"
        const transformValue =
          scrollContainer.style.transform || window.getComputedStyle(scrollContainer).transform
        if (!transformValue || transformValue === "none") {
          return "fixed"
        }
        return "transform"
      }

      ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value?: number) {
          const instance = locomotiveScroll
          if (!instance) return 0
          if (typeof value === "number") {
            instance.scrollTo(value, { duration: 0, disableLerp: true })
            return 0
          }
          return instance.scroll?.instance.scroll.y ?? 0
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: resolvePinType(),
      })

      refreshHandler = () => locomotiveScroll?.update()
      ScrollTrigger.addEventListener("refresh", refreshHandler)
      ScrollTrigger.refresh()

      if (typeof document !== "undefined") {
        document.body.dataset.smoothScrollReady = "true"
        window.dispatchEvent(new Event("smooth-scroll:ready"))
      }
    }

    initLocomotiveScroll()

    return () => {
      isCanceled = true

      if (typeof document !== "undefined") {
        delete document.body.dataset.smoothScrollReady
        window.dispatchEvent(new Event("smooth-scroll:teardown"))
      }

      delete scrollContainer.dataset.nativeScroll

      detachScroll?.()

      if (refreshHandler) {
        ScrollTrigger.removeEventListener("refresh", refreshHandler)
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
