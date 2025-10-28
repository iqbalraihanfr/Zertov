"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, Tag, ChevronDown, CircleFadingPlus, Package, Code, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { colors } from "@/lib/utils/colors"

const LINK_ITEMS = [
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/our-team", label: "Our Team", icon: Tag },
]

const SERVICE_ITEMS = [
  {
    href: "/projects",
    label: "Web Development",
    icon: Code,
    description: "Custom web experiences built for conversions.",
  },
  {
    href: "/projects",
    label: "Digital Marketing",
    icon: Package,
    description: "Campaign strategy and always-on performance.",
  },
  {
    href: "/projects",
    label: "Social Media Management",
    icon: CircleFadingPlus,
    description: "Daily content production and community ops.",
  },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  const isLanding = pathname === "/"

  const desktopLinkClass = (href: string) => {
    const isActive = pathname.startsWith(href)
    return cn(
      "relative text-sm font-medium transition-colors",
      isLanding ? "text-white/70 hover:text-white" : "text-[#111111]/70 hover:text-[#0006AA]",
      !isLanding && isActive && "text-[#0006AA]",
      isLanding && isActive && "text-white",
    )
  }

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div
          className={cn(
            "flex h-14 items-center justify-between rounded-full border px-6 transition duration-300",
            isLanding
              ? "border-white/15 bg-black/40 text-white shadow-[0_12px_30px_-20px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
              : "border-[#0006AA]/15 bg-white/90 text-[#111111] shadow-[0_18px_40px_-24px_rgba(0,6,170,0.35)] backdrop-blur-lg",
          )}
        >
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src={isLanding ? "/icons/favicon-white.svg" : "/icons/favicon-blue.svg"}
              alt="Zertov logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className={cn("text-2xl font-semibold tracking-wide", isLanding ? "text-white" : colors.text.primary)}>
              Zertov
            </span>
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-6 text-sm md:flex",
              isLanding ? "text-white/80" : "text-[#111111]/70",
            )}
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent text-sm font-medium transition-colors focus:bg-transparent data-[state=open]:text-[#0006AA]",
                      isLanding ? "text-white/80 hover:text-white" : "text-[#111111]/70 hover:text-[#0006AA]",
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      "rounded-xl border p-4 shadow-xl backdrop-blur-xl",
                      isLanding ? "border-white/10 bg-black/85" : "border-[#0006AA]/15 bg-white",
                    )}
                  >
                    <ul className="grid w-[280px] gap-3">
                      {SERVICE_ITEMS.map((item) => {
                        const Icon = item.icon
                        return (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="group flex items-start gap-3 rounded-xl border p-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0006AA]/60"
                                style={{
                                  borderColor: isLanding ? "rgba(255,255,255,0.08)" : "rgba(0,6,170,0.08)",
                                  background: isLanding ? "rgba(255,255,255,0.05)" : "rgba(0,6,170,0.04)",
                                }}
                              >
                                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#0006AA] transition-colors group-hover:text-[#000043]" />
                                <div>
                                  <div
                                    className={cn(
                                      "text-sm font-semibold transition-colors",
                                      isLanding ? "text-white" : colors.text.primary,
                                      "group-hover:text-[#0006AA]",
                                    )}
                                  >
                                    {item.label}
                                  </div>
                                  <p
                                    className={cn(
                                      "mt-1 text-xs leading-relaxed",
                                      isLanding ? "text-white/60" : colors.text.secondary,
                                    )}
                                  >
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {LINK_ITEMS.map((link) => {
              const isActive = pathname.startsWith(link.href)
              return (
                <Link key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
                  {link.label}
                  {!isLanding && isActive ? (
                    <span className="absolute left-0 right-0 -bottom-2 mx-auto h-0.5 rounded-full bg-[#ffffff]" />
                  ) : null}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex">
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-[#0006AA] via-[#000043] to-[#0006AA] px-6 py-2.5 font-medium text-white shadow-[0_14px_30px_-18px_rgba(0,6,170,0.65)] transition-all hover:scale-[1.02] hover:shadow-[0_18px_32px_-16px_rgba(0,6,170,0.75)]"
            >
              <Link href="#contact">Chat With Us</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "border px-0 transition-colors",
                    isLanding
                      ? "border-white/20 bg-black/60 text-white hover:bg-black/70"
                      : "border-[#0006AA]/20 bg-white/90 text-[#111111] hover:bg-white",
                  )}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex w-64 flex-col border-[#0006AA]/15 bg-white/95 p-0 text-[#111111]"
              >
                <div className="flex items-center gap-1.5 border-b border-[#0006AA]/15 px-4 py-4">
                  <Image src="/icons/favicon-blue.svg" alt="Zertov logo" width={24} height={24} className="h-6 w-6" />
                  <span className="text-lg font-semibold tracking-wide text-[#111111]">Zertov</span>
                </div>

                <nav className="mt-2 flex flex-col gap-1 text-[#111111]/80">
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 transition-colors hover:bg-[#0006AA]/5 hover:text-[#0006AA]">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-5 w-5 items-center justify-center text-[#000043]/60">
                          <CircleFadingPlus className="h-4 w-4" />
                        </span>
                        <span className="text-sm">Services</span>
                      </div>
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", servicesOpen ? "rotate-180" : "")}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="ml-4 flex flex-col border-l-2 border-[#0006AA]/30 bg-[#0006AA]/5">
                        {SERVICE_ITEMS.map((service) => {
                          const Icon = service.icon
                          return (
                            <Link
                              key={service.label}
                              href={service.href}
                              className="flex items-center gap-3 pl-8 pr-4 py-2.5 text-sm transition-colors hover:bg-[#0006AA]/10 hover:text-[#0006AA]"
                            >
                              <Icon className="h-4 w-4 text-[#0006AA]" />
                              <span className="text-sm">{service.label}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {LINK_ITEMS.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    const Icon = link.icon
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[#0006AA]/10 hover:text-[#0006AA]",
                          !isLanding && isActive ? "text-[#0006AA]" : undefined,
                        )}
                      >
                        <span className="inline-flex h-5 w-5 items-center justify-center text-[#000043]/60">
                          {Icon ? <Icon className="h-4 w-4" /> : null}
                        </span>
                        <span className="text-sm">{link.label}</span>
                      </Link>
                    )
                  })}
                </nav>

                <div className="mt-auto border-t border-[#0006AA]/15 p-4">
                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-[#0006AA] via-[#000043] to-[#0006AA] px-6 py-2.5 font-medium text-white shadow-[0_12px_28px_-18px_rgba(0,6,170,0.65)] transition-all hover:scale-[1.02]"
                  >
                    <Link href="https://wa.me/6285123796985">Get a Quote</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
