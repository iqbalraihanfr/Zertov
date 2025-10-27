import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CalendarDays, ExternalLink, GaugeCircle, Tags } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Project } from "@/lib/types/project"

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

  return (
    <article className="space-y-12">
      <section className="space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-indigo-100 px-3 py-1 text-[0.7rem] uppercase tracking-[0.4em] text-indigo-600">
              {project.status}
            </Badge>
            <div className="flex flex-wrap gap-2">
              {project.category.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs uppercase tracking-[0.28em] text-neutral-500"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl md:text-5xl">{project.title}</h1>
          <p className="max-w-3xl text-lg text-neutral-600">{project.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
            {started ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-indigo-400" />
                Started {started}
              </span>
            ) : null}
            {ended ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-indigo-400" />
                Wrapped {ended}
              </span>
            ) : null}
            {!ended && project.status === "In Progress" && started ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100 px-4 py-2 text-indigo-600">
                <GaugeCircle className="h-4 w-4" />
                Currently in production
              </span>
            ) : null}
            {published ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-indigo-400" />
                Published {published}
              </span>
            ) : null}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-neutral-100">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/50 via-transparent to-sky-200/40 opacity-60" />
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
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h2 className="text-sm uppercase tracking-[0.4em] text-indigo-500">Highlights</h2>
            <p className="mt-3 text-base text-neutral-600">
              {project.highlightsIntro ??
                "Each engagement blends research, experimentation, and meticulous execution. These are the signals that matter most for this project."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {metricsEntries.map(([metricKey, metricValue]) => (
                <div
                  key={metricKey}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-neutral-700 transition duration-300 hover:border-indigo-200 hover:bg-indigo-50"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">{metricKey}</p>
                  <p className="mt-2 text-lg font-semibold text-neutral-900">{metricValue}</p>
                </div>
              ))}
            </div>
          </div>

          {project.images.length > 1 ? (
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-indigo-500">Gallery</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.slice(1).map((image, index) => (
                  <div
                    key={`${project.slug}-image-${index}`}
                    className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100"
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
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-xs uppercase tracking-[0.4em] text-indigo-500">Tags</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-neutral-200 bg-neutral-50 text-xs uppercase tracking-[0.24em] text-neutral-600"
                >
                  <Tags className="h-3 w-3 text-indigo-400" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {linkEntries.length ? (
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.4em] text-indigo-500">Links</h3>
              <div className="mt-4 flex flex-col gap-3">
                {linkEntries.map(([label, url]) => (
                  <Button
                    key={label}
                    asChild
                    variant="outline"
                    className="justify-between rounded-full border-indigo-100 bg-indigo-50 text-indigo-600 hover:border-indigo-200 hover:bg-indigo-100"
                  >
                    <Link href={url!} target="_blank" rel="noreferrer">
                      <span className="flex items-center gap-2 capitalize">
                        <ExternalLink className="h-4 w-4 text-indigo-400" />
                        {label.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </article>
  )
}
