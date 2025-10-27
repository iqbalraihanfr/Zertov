import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, CalendarDays, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Project } from "@/lib/types/project"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  className?: string
}

const formatDate = (dateString?: string) => {
  if (!dateString) return null
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return null
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date)
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const primaryDate = project.dates.published ?? project.dates.end ?? project.dates.start
  const formattedDate = formatDate(primaryDate)

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-1 transition duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[1.4rem] border border-neutral-200/60 bg-neutral-100/60">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/40 via-sky-200/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-80" />
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={640}
          height={420}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={false}
        />

        <div className="absolute inset-x-4 top-4 flex items-center justify-between text-xs">
          <Badge className="bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-neutral-900 shadow-sm">
            {project.status}
          </Badge>
          {formattedDate ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-[0.7rem] text-neutral-600 shadow-sm backdrop-blur">
              <CalendarDays className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.45em] text-indigo-500/70">
          {project.category.map((category) => (
            <span key={category} className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[0.6rem] text-indigo-600">
              {category}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-neutral-900 transition duration-300 group-hover:text-indigo-600">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm text-neutral-600">{project.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-neutral-200 bg-neutral-50 text-[0.7rem] font-medium uppercase tracking-wide text-neutral-600 transition duration-300 group-hover:border-indigo-200 group-hover:text-indigo-600"
            >
              <Sparkles className="h-3 w-3 text-indigo-400" />
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 ? (
            <Badge className="bg-indigo-100 text-[0.7rem] uppercase tracking-wide text-indigo-600">
              +{project.tags.length - 4} more
            </Badge>
          ) : null}
        </div>

        <div className="mt-auto flex items-center justify-between pt-6">
          <div className="flex flex-col text-[0.7rem] uppercase tracking-[0.28em] text-neutral-400">
            <span>Metrics</span>
            <span className="text-neutral-600">{Object.keys(project.metrics).length} Highlights</span>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition duration-300 hover:border-indigo-200 hover:bg-indigo-100"
          >
            View project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}
