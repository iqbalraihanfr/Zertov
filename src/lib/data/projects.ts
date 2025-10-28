import { Project } from "@/lib/types/project"

export const projects: Project[] = [
  {
    slug: "legowo-handcrafted-toys",
    title: "Legowo.id Handcrafted Toys",
    description:
      "Story-led storefront for Legowo, an Indonesian UMKM crafting educational wooden toys that celebrate local culture and imaginative play.",
    category: ["E-commerce", "Retail"],
    status: "Completed",
    thumbnail: "/projects/legowo/lplegowo.png",
    images: ["/projects/legowo/lplegowo.png", "/projects/legowo/aboutlegowo.png", "/projects/legowo/produklegowo.png"],
    tags: ["nextjs", "tailwindcss", "analytics"],
    metrics: {
      productShowcase: "Modular catalog highlighting handcrafted toy lines",
      storytelling: "Narrative-rich about section for the founding family",
      conversionHub: "Persistent WhatsApp & Instagram CTAs for fast enquiries",
    },
    highlightsIntro:
      "We reimagined Legowo’s brand presence into a clean, mobile-first marketplace that balances product discovery with the family’s craftsmanship story.",
    links: {
      website: "https://legowo.id",
    },
    dates: {
      published: "2025-07-22",
    },
  },
  {
    slug: "brand-identity-sprint",
    title: "Brand Identity Sprint",
    description:
      "A rapid-fire identity exploration where we crafted six logo systems for emerging Indonesian SMEs, ready for packaging, social, and retail touchpoints.",
    category: ["Branding", "Visual Identity"],
    status: "Completed",
    thumbnail: "/projects/logobrand/renoyugede.png",
    images: [
      "/projects/logobrand/renoyugede.png",
      "/projects/logobrand/renoyu.png",
      "/projects/logobrand/feelit.png",
      "/projects/logobrand/coklat.png",
      "/projects/logobrand/LogoBakso.png",
      "/projects/logobrand/m.png",
    ],
    tags: ["branding", "design"],
    metrics: {
      logosDelivered: "6 SME-ready identity suites",
      turnaround: "14-day discovery-to-delivery sprint",
      deliverables: "Logo stacks, palette specs, merch-ready exports",
    },
    highlightsIntro:
      "Working from quick interviews and moodboards, we built a shared system: concept sketches, typographic explorations, palette studies, and final assets packaged for both print and digital rollouts.",
    links: {
      // caseStudy: "mailto:hello@zertov.com?subject=Brand%20Identity%20Sprint",
    },
    dates: {
      published: "2025-10-15",
    },
  },
  // {
  //   slug: "neura-vision-suite",
  //   title: "Neura Vision Suite",
  //   description:
  //     "Computer vision toolkit powering automated quality inspection with real-time feedback loops and anomaly detection.",
  //   category: ["AI", "Enterprise"],
  //   status: "In Progress",
  //   thumbnail: "/placeholder.jpg",
  //   images: ["/placeholder.jpg"],
  //   tags: ["react", "nextjs", "typescript"],
  //   metrics: {
  //     accuracy: "98.2%",
  //     throughput: "120 frames/sec",
  //   },
  //   highlightsIntro:
  //     "We engineered a modular CV pipeline that keeps factory floors agile with human-friendly dashboards and adaptive retraining.",
  //   links: {
  //     website: "https://example.com/neura-vision",
  //   },
  //   dates: {
  //     start: "2024-01-12",
  //     updated: "2024-05-01",
  //   },
  // },
  // {
  //   slug: "flux-brand-experience",
  //   title: "Flux Brand Experience",
  //   description:
  //     "Immersive microsite and interactive narrative for a rising consumer electronics brand with responsive storytelling.",
  //   category: ["Branding", "Marketing"],
  //   status: "Completed",
  //   thumbnail: "/placeholder-logo.png",
  //   images: ["/placeholder-logo.png", "/placeholder.jpg"],
  //   tags: ["react", "tailwindcss", "javascript"],
  //   metrics: {
  //     sessionDuration: "3.5 min",
  //     conversion: "18% lift",
  //   },
  //   highlightsIntro:
  //     "Flux invites visitors into an evolving product universe, using motion and narrative pacing to reveal a bold new brand voice.",
  //   links: {
  //     website: "https://example.com/flux",
  //     demo: "https://example.com/flux/demo",
  //   },
  //   dates: {
  //     start: "2023-05-08",
  //     end: "2023-08-20",
  //     published: "2023-09-01",
  //   },
  // },
  // {
  //   slug: "lumen-saas-dashboard",
  //   title: "Lumen SaaS Dashboard",
  //   description:
  //     "Modular analytics dashboard for product-led teams with real-time insights, retention tracking, and automated alerts.",
  //   category: ["Product", "SaaS"],
  //   status: "Completed",
  //   thumbnail: "/placeholder.svg",
  //   images: ["/placeholder.svg", "/placeholder.jpg"],
  //   tags: ["nextjs", "typescript", "tailwindcss"],
  //   metrics: {
  //     retention: "84%",
  //     activeUsers: "12k MAU",
  //   },
  //   highlightsIntro:
  //     "We rethought analytics for product-led growth, building a design system that keeps teams focused on meaningful signals.",
  //   links: {
  //     website: "https://example.com/lumen",
  //     github: "https://github.com/example/lumen",
  //   },
  //   dates: {
  //     start: "2022-10-02",
  //     end: "2023-02-15",
  //   },
  // },
  // {
  //   slug: "ara-tech-expo",
  //   title: "ARA Tech Expo",
  //   description:
  //     "Experiential event hub for ExpoIT ARA 5.0 showcasing multi-day schedules, speaker bios, and live streaming integrations.",
  //   category: ["Events", "Marketing"],
  //   status: "Completed",
  //   thumbnail: "/placeholder-user.jpg",
  //   images: ["/placeholder-user.jpg"],
  //   tags: ["react", "tailwindcss", "analytics"],
  //   metrics: {
  //     attendees: "5,000+ visitors",
  //     livestream: "3 concurrent stages",
  //   },
  //   highlightsIntro:
  //     "ARA Tech Expo became a living hub where speakers, schedules, and streams connected visitors before, during, and after the event.",
  //   links: {
  //     website: "https://example.com/ara-expo",
  //   },
  //   dates: {
  //     start: "2023-06-01",
  //     end: "2023-08-05",
  //     published: "2023-08-05",
  //   },
  // },
  // {
  //   slug: "astra-digital-commerce",
  //   title: "Astra Digital Commerce",
  //   description:
  //     "Commerce architecture modernization with composable services, unified checkout, and adaptive product discovery.",
  //   category: ["E-commerce", "Enterprise"],
  //   status: "In Progress",
  //   thumbnail: "/placeholder-logo.svg",
  //   images: ["/placeholder-logo.svg", "/placeholder.jpg"],
  //   tags: ["nextjs", "typescript", "analytics"],
  //   metrics: {
  //     uptime: "99.98%",
  //     skuCount: "35k+",
  //   },
  //   highlightsIntro:
  //     "We are modularizing commerce layers so Astra can ship experiments quickly while keeping enterprise reliability intact.",
  //   links: {
  //     website: "https://example.com/astra",
  //   },
  //   dates: {
  //     start: "2024-03-01",
  //     updated: "2024-09-12",
  //   },
  // },
  // {
  //   slug: "zertov-insights",
  //   title: "Zertov Insights",
  //   description:
  //     "Thought leadership editorial hub for sharing research, whitepapers, and behind-the-scenes stories from the Zertov team.",
  //   category: ["Editorial", "Branding"],
  //   status: "Upcoming",
  //   thumbnail: "/images/zrtv-pattern.png",
  //   images: ["/images/zrtv-pattern.png"],
  //   tags: ["nextjs", "tailwindcss", "mdx"],
  //   metrics: {
  //     articles: "24 planned",
  //   },
  //   highlightsIntro:
  //     "Zertov Insights will bridge research and storytelling, surfacing field notes, experiments, and long-form ideas from our studio.",
  //   links: {
  //     website: "https://example.com/zertov-insights",
  //   },
  //   dates: {
  //     start: "2024-10-01",
  //   },
  // },
  // {
  //   slug: "atlas-ops-suite",
  //   title: "Atlas Ops Suite",
  //   description:
  //     "Operational intelligence suite delivering predictive maintenance, resource planning, and proactive alerts for logistics.",
  //   category: ["Enterprise", "Operations"],
  //   status: "Completed",
  //   thumbnail: "/placeholder-logo.svg",
  //   images: ["/placeholder-logo.svg", "/placeholder.jpg"],
  //   tags: ["react", "typescript", "analytics"],
  //   metrics: {
  //     downtimeReduction: "32%",
  //     deployments: "14 regions",
  //   },
  //   highlightsIntro:
  //     "Atlas empowers ops teams to anticipate instead of react, translating predictive signals into actionable maintenance plays.",
  //   links: {
  //     website: "https://example.com/atlas-ops",
  //   },
  //   dates: {
  //     start: "2022-01-15",
  //     end: "2022-11-30",
  //   },
  // },
]

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug)

export const getProjectCategories = () => {
  const categorySet = new Set<string>()
  for (const project of projects) {
    project.category.forEach((entry) => categorySet.add(entry))
  }
  return Array.from(categorySet).sort((a, b) => a.localeCompare(b))
}
