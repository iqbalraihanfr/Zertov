import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, CalendarDays } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { TechIcons } from "@/app/projects/tech-icons"
import { Project } from "@/lib/types/project"
import { cn } from "@/lib/utils"
import { brandColors, colors } from "@/lib/utils/colors"

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
  const techTags = project.tags.length ? project.tags.join(",") : ""

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-1 transition duration-500 hover:-translate-y-1 hover:shadow-xl",
        colors.background.card,
        colors.border.primary,
        colors.text.primary,
        "hover:border-[#0006AA]/40",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.4rem] border bg-white/80",
          colors.border.primary,
        )}
      >
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-80",
            colors.gradients.light,
          )}
        />
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={640}
          height={420}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={false}
        />

        <div className="absolute inset-x-4 top-4 flex items-center justify-between text-xs">
          <Badge
            className="px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest shadow-sm"
            style={{
              backgroundColor: `${brandColors.white}14`,
              color: brandColors.white,
            }}
          >
            {project.status}
          </Badge>
          {formattedDate ? (
            <span className="inline-flex text-white items-center gap-1 rounded-full glass-border-enhanced px-3 py-1 text-[0.7rem] shadow-sm backdrop-blur">
              <CalendarDays className="h-3.5 w-3.5" style={{ color: brandColors.white }} />
              {formattedDate}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.45em]" style={{ color: `${brandColors.zaffre}b3` }}>
          {project.category.map((category) => (
            <span
              key={category}
              className="rounded-full px-3 py-1 text-[0.6rem]"
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

        <h3
          className={cn("mt-4 text-2xl font-semibold transition duration-300 group-hover:text-[#0006AA]", colors.text.primary)}
          style={{ transitionProperty: "color" }}
        >
          {project.title}
        </h3>
        <p className={cn("mt-3 line-clamp-3 text-sm", colors.text.secondary)}>{project.description}</p>

        {techTags ? (
          <TechIcons
            tags={techTags}
            className="mt-6 gap-2"
            iconWrapperClassName="h-8 w-8"
            iconClassName="text-base"
          />
        ) : null}

        <div className="mt-auto flex items-center justify-between pt-6">
          <div className="flex flex-col text-[0.7rem] uppercase tracking-[0.28em]" style={{ color: `${brandColors.cetaceanBlue}80` }}>
            <span>Metrics</span>
            <span className={cn(colors.text.secondary)}>{Object.keys(project.metrics).length} Highlights</span>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:-translate-y-0.5",
              colors.gradients.primary,
              "text-white shadow-md hover:shadow-lg",
            )}
          >
            View project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}
