import type { Metadata } from "next"
import Script from "next/script"
import { notFound } from "next/navigation"

import { AppverseFooter } from "@/components/appverse-footer"
import { ProjectDetail } from "@/components/projects/project-detail"
import { SiteHeader } from "@/components/site-header"
import { SmoothScrollProvider } from "@/components/animations/smooth-scroll-provider"
import { getProjectBySlug, projects } from "@/lib/data/projects"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamic = "force-static"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found | Zertov",
    }
  }

  const ogImages = [project.thumbnail, ...project.images.slice(0, 2)]
    .filter(Boolean)
    .map((image) => ({
      url: image.startsWith("http") ? image : `https://zertov.com${image}`,
      width: 1200,
      height: 630,
      alt: project.title,
    }))

  return {
    title: `${project.title} | Projects | Zertov`,
    description: project.description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Zertov`,
      description: project.description,
      url: `https://zertov.com/projects/${slug}`,
      images: ogImages,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Zertov`,
      description: project.description,
      images: ogImages.map((image) => image.url),
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://zertov.com/projects/${slug}`,
    name: project.title,
    description: project.description,
    url: `https://zertov.com/projects/${slug}`,
    keywords: project.tags.join(", "),
    image: project.images.map((image) => (image.startsWith("http") ? image : `https://zertov.com${image}`)),
    datePublished: project.dates.published,
    dateModified: project.dates.updated ?? project.dates.end ?? project.dates.start,
    inLanguage: "en",
  }

  return (
    <>
      <SiteHeader />
      <SmoothScrollProvider>
        <main className="min-h-dvh bg-white pb-24 pt-32 text-neutral-900">
          <div className="container mx-auto max-w-5xl px-6 md:px-8">
            <ProjectDetail project={project} />
          </div>
        </main>
        <AppverseFooter />
      </SmoothScrollProvider>

      <Script
        id={`project-${slug}-structured-data`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
