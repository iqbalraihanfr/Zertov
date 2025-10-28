"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "We Build What You Imagine",
  copyright: "© 2025 — Zertov",
}

const addressLines = [
  "Surabaya, Indonesia.",
]

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/our-team" },
  // { label: "Contact", href: "#contact" },
]

const contactItems = [
  { label: "+62 851 2379 6985", href: "tel:+6285123796985", icon: Phone },
  { label: "zertovagency@gmail.com", href: "mailto:zertovagency@gmail.com", icon: Mail },
]

const socialLinks = [
  // { label: "Visit our YouTube", href: "https://www.youtube.com/@zertov", icon: Youtube },
  // { label: "Connect on LinkedIn", href: "https://www.linkedin.com/company/zertov", icon: Linkedin },
  { label: "Follow on Instagram", href: "https://instagram.com/zertovagency", icon: Instagram },
]

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <footer className="bg-[#F6F6F8] text-neutral-900">
      <div className="container mx-auto px-4 pb-12 pt-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center text-neutral-900">
              <Image
                src="/icons/logo-zertov-black.svg"
                alt="Zertov"
                width={128}
                height={128}
                className="h-32 w-32 md:h-16 md:w-16"
              />
              {/* <div className="flex flex-col">
                <span className="text-2xl font-semibold md:text-3xl">Zertov</span>
                <span className="text-xs uppercase tracking-[0.42em] text-neutral-500">Digital Studio</span>
              </div> */}
            </Link>
            <p className="text-xl font-semibold leading-snug text-neutral-900 lg:text-2xl">{content.tagline}</p>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-neutral-500">Address</h5>
            <address className="space-y-1 text-sm text-neutral-700 not-italic">
              {addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-neutral-500">Contact us</h5>
            <ul className="space-y-3 text-sm text-neutral-700">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 text-neutral-500" aria-hidden />
                  <a href={href} className="transition hover:text-neutral-950">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-neutral-500">Follow us</h5>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition hover:border-neutral-900 hover:text-neutral-900"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-300 pt-6 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p className="text-neutral-500">{content.copyright}</p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {navigationLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="hover:text-neutral-900">
                {label}
              </Link>
            ))}
            <Link href="/privacy" className="font-medium text-neutral-800 hover:text-neutral-950">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
