import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://zertov.com/#pricing",
    name: "Pricing Plans",
    description: "Digital Marketing pricing plans - Startup, Pro, and Premium packages for all business needs",
    url: "https://zertov.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Digital Marketing Services",
      description: "Professional digital marketing services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Startup Plan",
          price: "299",
          priceCurrency: "USD",
          description: "Basic digital marketing package with 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "699",
          priceCurrency: "USD",
          description: "Advanced digital marketing package with 4 revisions",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "2049",
          priceCurrency: "USD",
          description: "Premium digital marketing package with unlimited revisions",
        },
      ],
    },
  }

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
        "https://instagram.com/zertov",
        "https://threads.com/zertov",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://zertov.com/#pricing",
        name: "Pricing Section",
        url: "https://zertov.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        {/* <LogoMarquee /> */}
        {/* <Pricing /> */}
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

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
