import type { Metadata } from "next"
import Script from "next/script"
import { SiteHeader } from "@/components/site-header"
import { SmoothScrollProvider } from "@/components/animations/smooth-scroll-provider"
import { OurTeam } from "@/components/ourteam"
import { AppverseFooter } from "@/components/appverse-footer"

export const metadata: Metadata = {
  title: "Our Team | Zertov",
  description:
    "Meet the multidisciplinary Zertov crew building cinematic brand experiences through motion, design, and web development.",
  alternates: {
    canonical: "/our-team",
  },
}

export const dynamic = "force-static"

export default function OurTeamPage() {
  const teamStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://zertov.com/our-team",
    name: "Zertov Team",
    description:
      "Explore the Zertov team and discover the strategists, storytellers, and creators behind our motion and marketing work.",
    url: "https://zertov.com/our-team",
    mainEntity: {
      "@type": "Organization",
      name: "Zertov",
      url: "https://zertov.com",
    },
  }

  return (
    <>
      <SiteHeader />
      <SmoothScrollProvider>
        <main className="min-h-dvh bg-white text-neutral-900">
          <OurTeam />
        </main>
        <AppverseFooter />
      </SmoothScrollProvider>

      <Script
        id="our-team-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamStructuredData) }}
      />
    </>
  )
}
