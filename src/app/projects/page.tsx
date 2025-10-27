import type { Metadata } from "next"
import Script from "next/script"

import { AppverseFooter } from "@/components/appverse-footer"
import { ProjectFilter } from "@/components/projects/project-filter"
import { SiteHeader } from "@/components/site-header"
import { SmoothScrollProvider } from "@/components/animations/smooth-scroll-provider"
import { getProjectCategories, projects } from "@/lib/data/projects"

export const metadata: Metadata = {
  title: "Projects | Zertov",
  description:
    "Explore Zertov projects across AI, product design, branding, and immersive experiences. Discover how we craft bold digital moments for ambitious teams.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Zertov",
    description:
      "Explore Zertov projects across AI, product design, branding, and immersive experiences. Discover how we craft bold digital moments for ambitious teams.",
    url: "https://zertov.com/projects",
    images: [
      {
        url: "https://zertov.com/images/zrtv-pattern.png",
        width: 1200,
        height: 630,
        alt: "Zertov project showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Zertov",
    description:
      "Explore Zertov projects across AI, product design, branding, and immersive experiences. Discover how we craft bold digital moments for ambitious teams.",
  },
}

export const dynamic = "force-static"

const projectCategories = getProjectCategories()

export default function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://zertov.com/projects",
    name: "Zertov Projects",
    description:
      "A curated list of Zertov projects spanning AI, brand experiences, product launches, and enterprise transformations.",
    url: "https://zertov.com/projects",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "CreativeWork",
        position: index + 1,
        url: `https://zertov.com/projects/${project.slug}`,
        name: project.title,
        description: project.description,
      })),
    },
  }

  return (
    <>
      <SiteHeader />
      <SmoothScrollProvider>
        <main className="min-h-dvh bg-white pb-24 pt-32 text-neutral-900">
          <div className="container mx-auto max-w-6xl px-6 md:px-8">
            <ProjectFilter categories={projectCategories} projects={projects} />
          </div>
        </main>
        <AppverseFooter />
      </SmoothScrollProvider>

      <Script
        id="projects-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
