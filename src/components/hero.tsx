'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { SCROLLER_ID } from "@/lib/scroll"

const HERO_TITLE = "build what you imagine"
const HERO_PRETITLE = "Thoughtfully engineered experiences"
const HERO_BODY =
  "A Surabaya-based creative tech team crafting websites, systems, and digital experiences that actually work — visually, technically, and strategically."

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const leftPatternRef = useRef<HTMLDivElement | null>(null)
  const rightPatternRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      const scope = heroRef.current
      if (!scope) return

      const scrollerEl =
        typeof document !== "undefined"
          ? (document.getElementById(SCROLLER_ID) as HTMLElement | null)
          : null

      if (!scrollerEl) return

      const chars = gsap.utils.toArray<HTMLElement>("[data-hero-char]", scope)
      const fades = gsap.utils.toArray<HTMLElement>("[data-hero-fade]", scope)

      if (chars.length) {
        gsap.from(chars, {
          yPercent: 110,
          opacity: 0,
          duration: 1.4,
          ease: "expo.out",
          stagger: 0.04,
        })
      }

      if (fades.length) {
        gsap.from(fades, {
          opacity: 0,
          y: 24,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.35,
        })
      }

      const mm = gsap.matchMedia()

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          if (!heroRef.current) return

          const conditions = context.conditions ?? {}
          const isMobile = Boolean(conditions.isMobile)
          const leftTarget = isMobile ? { x: -40, y: 90 } : { x: -120, y: 180 }
          const rightTarget = isMobile ? { x: 40, y: -90 } : { x: 120, y: -180 }

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              scroller: scrollerEl,
              start: "top top",
              end: "bottom top",
              scrub: true,
              pin: true,
              pinSpacing: false,
              pinType: "transform",
            },
          })

          if (leftPatternRef.current) {
            timeline.to(
              leftPatternRef.current,
              { x: leftTarget.x, y: leftTarget.y, ease: "none" },
              0,
            )
          }

          if (rightPatternRef.current) {
            timeline.to(
              rightPatternRef.current,
              { x: rightTarget.x, y: rightTarget.y, ease: "none" },
              0,
            )
          }

          return () => timeline.kill()
        },
      )

      return () => mm.kill()
    },
    { scope: heroRef },
  )

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative isolate overflow-hidden bg-white pb-24 pt-28 text-neutral-900 sm:pt-36"
    >
      <div
        ref={leftPatternRef}
        className="pointer-events-none absolute -left-24 top-20 hidden select-none opacity-70 mix-blend-multiply md:block"
      >
        <Image
          src="/images/zrtv-pattern.png"
          alt="Zertov pattern accent"
          width={360}
          height={480}
          priority
          className="h-auto w-[240px] lg:w-[300px]"
        />
      </div>

      <div
        ref={rightPatternRef}
        className="pointer-events-none absolute -right-20 bottom-24 hidden select-none opacity-70 mix-blend-multiply md:block"
      >
        <Image
          src="/images/zrtv-pattern.png"
          alt="Zertov pattern accent"
          width={360}
          height={480}
          className="h-auto w-[220px] lg:w-[300px]"
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid items-end gap-16 md:grid-cols-[minmax(0,1fr),minmax(0,1.15fr)] lg:gap-24">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-neutral-500" data-hero-fade>
                {HERO_PRETITLE}
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl">
                {HERO_TITLE.split("").map((char, index) => (
                  <span
                    key={`${char}-${index}`}
                    data-hero-char
                    className="inline-block bg-gradient-to-b from-neutral-950 to-neutral-500 bg-clip-text text-transparent"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
            </div>

            <div className="space-y-6 text-lg text-neutral-600 md:text-xl">
              <p data-hero-fade>{HERO_BODY}</p>

              <div data-hero-fade>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  Start a project
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
