export type ProjectStatus = "In Progress" | "Completed" | "Upcoming" | "On Hold"

export interface ProjectMetrics {
  [key: string]: string | number
}

export interface ProjectLinks {
  [key: string]: string | undefined
  website?: string
  github?: string
  caseStudy?: string
  demo?: string
}

export interface ProjectDates {
  [key: string]: string | undefined
  start?: string
  end?: string
  published?: string
  updated?: string
}

export interface Project {
  slug: string
  title: string
  description: string
  category: string[]
  status: ProjectStatus
  thumbnail: string
  images: string[]
  tags: string[]
  metrics: ProjectMetrics
  links: ProjectLinks
  dates: ProjectDates
  highlightsIntro?: string
}
