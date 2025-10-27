"use client"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { AppverseFooter } from "@/components/appverse-footer"
import { ServicesHighlight } from "@/components/services-highlight"
import Script from "next/script"
import { SmoothScrollProvider } from "@/components/animations/smooth-scroll-provider"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://zertov.com/",
    name: "Zertov | Digital Marketing Agency",
    description:
      "From product launches to full-scale campaigns, Zertov delivers digital marketing solutions that's fast, consistent, and built to wow your audience.",
    url: "https://zertov.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Zertov",
      url: "https://zertov.com",
      sameAs: [
        "https://twitter.com/zertov",
        "https://www.youtube.com/@zertov",
        "https://instagram.com/zertovagency",
        "https://threads.com/zertov",
      ],
    },
  }

  return (
    <>
      <SiteHeader />
      <SmoothScrollProvider>
        <main className="min-h-dvh bg-white text-neutral-900">
          <Hero />
          <ServicesHighlight />
          {/* <LogoMarquee /> */}
        </main>
        <AppverseFooter />
      </SmoothScrollProvider>

      {/* JSON-LD structured data */}
      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
