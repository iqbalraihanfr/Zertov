"use client"

import { useMemo, useState } from "react"
import { Search, Sparkles } from "lucide-react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { colors } from "@/lib/utils/colors"
import { Project } from "@/lib/types/project"

import { ProjectGrid } from "./project-grid"
import { TECH_ICON_MAP } from "@/app/projects/tech-icons"

interface ProjectFilterProps {
  projects: Project[]
  categories: string[]
}

export function ProjectFilter({ projects, categories }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category.includes(activeCategory)

      if (!normalizedQuery) {
        return matchesCategory
      }

      const haystack = [
        project.title,
        project.description,
        project.tags.join(" "),
        project.tags.map((tag) => TECH_ICON_MAP[tag]?.name ?? tag).join(" "),
        project.category.join(" "),
        project.status,
      ]
        .join(" ")
        .toLowerCase()

      return matchesCategory && haystack.includes(normalizedQuery)
    })
  }, [projects, activeCategory, searchTerm])

  const totalProjects = filteredProjects.length

  return (
    <section className="space-y-8">
      <div
        className={cn(
          "rounded-3xl border px-6 py-6 shadow-sm md:px-8",
          colors.background.card,
          colors.border.primary,
          colors.text.primary,
        )}
      >
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.48em] text-[#0006AA]/70">
              Projects
            </p>
            <h2 className={cn("mt-1 text-2xl font-semibold md:text-3xl", colors.text.primary)}>
              Crafted experiences for forward-thinking brands
            </h2>
          </div>
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#000043]/50" />
            <Input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search projects"
              className={cn(
                "rounded-full border bg-white py-2 pl-11 pr-4 text-sm placeholder:text-[#111111]/40 focus:ring-2",
                colors.border.primary,
                colors.text.secondary,
                "focus:border-[#0006AA] focus:ring-[#0006AA]/30",
              )}
            />
          </div>
        </header>

        <div className="mt-6 flex flex-wrap gap-2">
          <FilterPill
            key="all"
            label="All"
            isActive={activeCategory === "All"}
            onClick={() => setActiveCategory("All")}
          />
          {categories.map((category) => (
            <FilterPill
              key={category}
              label={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.45em] text-[#000043]/70">
          <Sparkles className="h-3.5 w-3.5 text-[#0006AA]" />
          {totalProjects} {totalProjects === 1 ? "project" : "projects"} curated
        </div>
      </div>

      <ProjectGrid
        projects={filteredProjects}
        emptyState={
          <div className="space-y-3">
            <h3 className={cn("text-lg font-semibold", colors.text.primary)}>No projects found</h3>
            <p className={cn("text-sm", colors.text.secondary)}>
              Try a different combination of filters or search keywords to uncover more of our recent work.
            </p>
          </div>
        }
      />
    </section>
  )
}

interface FilterPillProps {
  label: string
  isActive: boolean
  onClick: () => void
}

function FilterPill({ label, isActive, onClick }: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0006AA]/40",
        isActive
          ? "border-[#0006AA]/50 bg-[#0006AA]/15 text-[#000043] shadow-[0_12px_30px_-18px_rgba(0,6,170,0.35)]"
          : "border-[#000043]/20 bg-white text-[#000043]/70 hover:-translate-y-0.5 hover:border-[#0006AA]/40 hover:bg-[#0006AA]/10 hover:text-[#0006AA] hover:shadow-[0_12px_30px_-20px_rgba(0,6,170,0.35)]",
      )}
    >
      {label}
    </button>
  )
}
