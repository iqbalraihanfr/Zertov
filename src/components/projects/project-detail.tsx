import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CalendarDays, ExternalLink, GaugeCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { TechIcons } from "@/app/projects/tech-icons"
import { Project } from "@/lib/types/project"
import { cn } from "@/lib/utils"
import { brandColors, colors } from "@/lib/utils/colors"

interface ProjectDetailProps {
  project: Project
}

const formatDate = (dateString?: string) => {
  if (!dateString) return null
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return null
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date)
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const heroImage = project.images[0] ?? project.thumbnail
  const published = formatDate(project.dates.published)
  const started = formatDate(project.dates.start)
  const ended = formatDate(project.dates.end)
  const metricsEntries = Object.entries(project.metrics)
  const linkEntries = Object.entries(project.links).filter(([, value]) => Boolean(value))
  const techTags = project.tags.length ? project.tags.join(",") : ""

  return (
    <article className={cn("space-y-12", colors.text.primary)}>
      <section className="space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              className="px-3 py-1 text-[0.7rem] uppercase tracking-[0.4em]"
              style={{
                backgroundColor: `${brandColors.zaffre}14`,
                color: brandColors.cetaceanBlue,
              }}
            >
              {project.status}
            </Badge>
            <div className="flex flex-wrap gap-2">
              {project.category.map((category) => (
                <span
                  key={category}
                  className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.28em]"
                  style={{
                    border: `1px solid ${brandColors.zaffre}26`,
                    backgroundColor: `${brandColors.zaffre}10`,
                    color: brandColors.cetaceanBlue,
                  }}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <h1 className={cn("text-3xl font-semibold sm:text-4xl md:text-5xl", colors.text.primary)}>{project.title}</h1>
          <p className={cn("max-w-3xl text-lg", colors.text.secondary)}>{project.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-[#000043]/70">
            {started ? (
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  border: `1px solid ${brandColors.cetaceanBlue}26`,
                  backgroundColor: `${brandColors.zaffre}10`,
                  color: brandColors.cetaceanBlue,
                }}
              >
                <CalendarDays className="h-4 w-4" style={{ color: brandColors.zaffre }} />
                Started {started}
              </span>
            ) : null}
            {ended ? (
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  border: `1px solid ${brandColors.cetaceanBlue}26`,
                  backgroundColor: `${brandColors.zaffre}10`,
                  color: brandColors.cetaceanBlue,
                }}
              >
                <CalendarDays className="h-4 w-4" style={{ color: brandColors.zaffre }} />
                Wrapped {ended}
              </span>
            ) : null}
            {!ended && project.status === "In Progress" && started ? (
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  border: `1px solid ${brandColors.zaffre}66`,
                  backgroundColor: `${brandColors.zaffre}22`,
                  color: brandColors.cetaceanBlue,
                }}
              >
                <GaugeCircle className="h-4 w-4" />
                Currently in production
              </span>
            ) : null}
            {published ? (
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  border: `1px solid ${brandColors.cetaceanBlue}26`,
                  backgroundColor: `${brandColors.zaffre}10`,
                  color: brandColors.cetaceanBlue,
                }}
              >
                <CalendarDays className="h-4 w-4" style={{ color: brandColors.zaffre }} />
                Published {published}
              </span>
            ) : null}
          </div>
        </div>

        <div
          className={cn(
            "relative overflow-hidden rounded-[2.5rem] border bg-white/80",
            colors.border.primary,
          )}
        >
          <div className={cn("absolute inset-0 opacity-60", colors.gradients.light)} />
          <Image
            src={heroImage}
            alt={project.title}
            width={1600}
            height={900}
            className="relative z-10 h-[420px] w-full object-cover sm:h-[520px]"
            priority
          />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <div className={cn("rounded-3xl border p-8 shadow-sm", colors.background.card, colors.border.primary)}>
            <h2 className="text-sm uppercase tracking-[0.4em] text-[#0006AA]/70">Highlights</h2>
            <p className={cn("mt-3 text-base", colors.text.secondary)}>
              {project.highlightsIntro ??
                "Each engagement blends research, experimentation, and meticulous execution. These are the signals that matter most for this project."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {metricsEntries.map(([metricKey, metricValue]) => (
                <div
                  key={metricKey}
                  className="rounded-2xl border border-[#000043]/20 bg-[#000043]/10 px-5 py-4 text-[#000043] transition duration-300 hover:-translate-y-0.5 hover:border-[#0006AA]/40 hover:bg-[#0006AA]/10"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#000043]/70">{metricKey}</p>
                  <p className={cn("mt-2 text-lg font-semibold", colors.text.primary)}>{metricValue}</p>
                </div>
              ))}
            </div>
          </div>

          {project.images.length > 1 ? (
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-[#0006AA]/70">Gallery</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.slice(1).map((image, index) => (
                  <div
                    key={`${project.slug}-image-${index}`}
                    className={cn(
                      "relative overflow-hidden rounded-3xl border bg-white/80",
                      colors.border.primary,
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} image ${index + 2}`}
                      width={900}
                      height={600}
                      className="h-56 w-full object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <aside className="space-y-6">
          <div className={cn("rounded-3xl border p-6 shadow-sm", colors.background.card, colors.border.primary)}>
            <h3 className="text-xs uppercase tracking-[0.4em] text-[#0006AA]/70">Tags</h3>
            {techTags ? (
              <TechIcons
                tags={techTags}
                className="mt-4 gap-3"
                iconWrapperClassName="h-9 w-9"
                iconClassName="text-lg"
              />
            ) : null}
          </div>

          {linkEntries.length ? (
            <div className={cn("rounded-3xl border p-6 shadow-sm", colors.background.card, colors.border.primary)}>
              <h3 className="text-xs uppercase tracking-[0.4em] text-[#0006AA]/70">Links</h3>
              <div className="mt-4 flex flex-col gap-3">
                {linkEntries.map(([label, url]) => (
                  <Link
                    key={label}
                    href={url!}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "flex items-center justify-between gap-2 rounded-full px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5",
                      colors.gradients.primary,
                      "text-white shadow-md hover:shadow-lg",
                    )}
                  >
                    <span className="flex items-center gap-2 capitalize">
                      <ExternalLink className="h-4 w-4 text-white/80" />
                      {label.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </article>
  )
}
