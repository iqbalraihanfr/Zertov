"use client"

import { useMemo, useState } from "react"
import { Search, Sparkles } from "lucide-react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Project } from "@/lib/types/project"

import { ProjectGrid } from "./project-grid"

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
      <div className="rounded-3xl border border-neutral-200 bg-white px-6 py-6 shadow-sm md:px-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.48em] text-indigo-500/70">Projects</p>
            <h2 className="mt-1 text-2xl font-semibold text-neutral-900 md:text-3xl">
              Crafted experiences for forward-thinking brands
            </h2>
          </div>
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <Input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search projects"
              className="rounded-full border border-neutral-200 bg-neutral-50 py-2 pl-11 pr-4 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-indigo-200 focus:ring-indigo-200"
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

        <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.45em] text-neutral-400">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          {totalProjects} {totalProjects === 1 ? "project" : "projects"} curated
        </div>
      </div>

      <ProjectGrid
        projects={filteredProjects}
        emptyState={
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-neutral-900">No projects found</h3>
            <p className="text-sm text-neutral-500">
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
        "rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] transition duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/60",
        isActive
          ? "border-indigo-300 bg-indigo-100 text-indigo-600 shadow-[0_12px_30px_-18px_rgba(79,70,229,0.45)]"
          : "border-neutral-200 bg-neutral-50 text-neutral-500 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-[0_12px_30px_-20px_rgba(129,140,248,0.4)]",
      )}
    >
      {label}
    </button>
  )
}
