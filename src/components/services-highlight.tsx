"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { colors } from "@/lib/utils/colors"
import { ArrowUpRight, Check, CircleFadingPlus, Workflow, Code, Brush } from "lucide-react"

const serviceHighlights = [
  {
    title: "Web Development",
    description: "Bring your digital presence to life through smart, scalable, and seamless web experiences. We design, develop, and optimize websites that don’t just look good they perform.",
    deliverables: ["UI/UX design & prototyping", "Responsive & interactive development", "SEO, analytics & performance integration"],
    icon: Code,
  },
  {
    title: "Content & Social Media",
    description: "Create connection that converts. From content strategy to daily execution, we craft stories and visuals that make your brand stay relevant, memorable, and engaging.",
    deliverables: ["Content direction & storytelling", "Social media management & growth assets", "Reels, motion, and campaign production"],
    icon: CircleFadingPlus,
  },
  {
    title: "Branding Strategy",
    description: "From zero to an identity that speaks. We help brands discover their voice from visual DNA to guidelines that drive consistent impact.",
    deliverables: ["Logo & visual identity design", "Brand strategy & positioning", "Brand guideline system"],
    icon: Brush,
  },
]

const differentiators = [
  // { label: "Average turnaround", value: "12 days" },
  { label: "Stakeholder approvals", value: "2 revisions max" },
  { label: "Campaign uptime", value: "99.9%" },
]

export function ServicesHighlight() {
  return (
    <section
      id="services"
      className={cn(
        "relative z-10 mt-0 pb-24 pt-16 text-white sm:pb-28",
        colors.gradients.vertical,
      )}
    >
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-32 right-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-24 h-96 w-96 rounded-full bg-[#0006AA]/50 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div
          className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/10 px-6 py-14 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:px-10 sm:py-16 md:px-12 lg:px-16 lg:py-20"
        >
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute bottom-[-6rem] left-8 h-72 w-72 rounded-full bg-[#0006AA]/40 blur-[100px]" />
            <div className="absolute bottom-[-6rem] right-8 h-72 w-72 rounded-full bg-neutral-900/40 blur-[100px]" />
          </div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] lg:gap-16">
            <div className="flex flex-col justify-between gap-10">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.42em] text-white/60">What we craft</p>
                <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Launch-ready digital experiences built for marketing teams that need momentum.
                </h2>
                <p className="max-w-lg text-base text-white/80 sm:text-lg">
                  From strategy to shipped experiences, our pods plug into your roadmap and deliver the assets you need,
                  aligned with the story you want to tell.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {differentiators.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm text-white/90 backdrop-blur"
                  >
                    <span className="font-semibold text-white">{item.value}</span>
                    <span className="ml-2 text-white/60">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border border-white/40 bg-white/15 px-8 py-5 text-sm font-semibold uppercase tracking-[0.32em] text-white hover:bg-white/25"
                >
                  <a href="https://wa.me/6285123796985" target="_blank" rel="noopener noreferrer">
                    Start a project
                  </a>
                </Button>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <span>See how our sprint playbooks keep approvals fast.</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-8">
              {serviceHighlights.map(({ title, description, deliverables, icon: Icon }) => (
                <Card
                  key={title}
                  className="border-white/20 bg-white/10 p-6 text-white/90 shadow-none backdrop-blur"
                >
                  <CardHeader className="px-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <p className="text-sm text-white/80">{description}</p>
                    <ul className="mt-6 space-y-3">
                      {deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
