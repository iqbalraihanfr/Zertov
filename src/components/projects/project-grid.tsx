import type { ReactNode } from "react"

import { Project } from "@/lib/types/project"
import { cn } from "@/lib/utils"
import { colors } from "@/lib/utils/colors"

import { ProjectCard } from "./project-card"

interface ProjectGridProps {
  projects: Project[]
  className?: string
  emptyState?: ReactNode
}

export function ProjectGrid({ projects, className, emptyState }: ProjectGridProps) {
  if (!projects.length) {
    return (
      <div
        className={cn(
          "rounded-3xl border p-10 text-center",
          colors.background.card,
          colors.border.primary,
          colors.text.secondary,
        )}
      >
        {emptyState ?? "No projects match your filters yet."}
      </div>
    )
  }

  return (
    <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
