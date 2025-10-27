"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Tag, HelpCircle, FileText, Info, ChevronDown, CircleFadingPlus, Package, Code, Briefcase } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"
import GradientText from "@/components/GradientText"

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false)

  const service = [
    {
      href: "/",
      label: "Web Development",
      icon: Code,
      description: "Custom web development for your business",
    },
    {
      href: "/",
      label: "Digital Marketing",
      icon: Package,
      description: "Digital marketing services for your business",
    },
    {
      href: "/",
      label: "Social Media Management",
      icon: CircleFadingPlus,
      description: "Social media management for your business",
    },
  ]

  const links = [
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/our-team", label: "Our Team", icon: Tag },
    // { href: "faq", label: "FAQ", icon: HelpCircle },
    // { href: "#blog", label: "Blog", icon: FileText },
    { href: "coming-soon", label: "About", icon: Info },
  ]

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <Image src="/icons/favicon-white.svg" alt="Zertov logo" width={40} height={40} className="h-10 w-10" />
            <span className="font-semibold tracking-wide text-white text-2xl">Zertov</span>
            {/* <GradientText  colors={["#0006aa",  "#000043", "#0006aa",]}
              animationSpeed={6}
              showBorder={false}
              className=" text-white text-2xl font-semibold tracking-wide">
                Zertov
              
              </GradientText> */}
          </Link>

          {/* Desktop Nav with Services Dropdown */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent text-white/90 hover:text-purple-300 data-[state=open]:text-purple-300
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent
                               data-[active=true]:bg-transparent"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-2 p-3 bg-gray-950/95 backdrop-blur-xl border border-gray-800 rounded-lg">
                      {service.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="group relative flex items-start gap-3 rounded-xl p-3 transition-all
                                         hover:bg-white/5 hover:ring-1 hover:ring-purple-300/60
                                         hover:shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_0_20px_rgba(168,85,247,0.15)]
                                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70"
                            >
                              <service.icon className="h-5 w-5 text-purple-300 mt-0.5 shrink-0 group-hover:text-purple-200" />
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-purple-300">
                                  {service.label}
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5">{service.description}</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-purple-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-[#000043] text-white font-medium rounded-4xl px-6 py-2.5
                         hover:bg-[#000043]/80 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="#contact">Chat With Us</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <Image src="/icons/zertov-white.svg" alt="Zertov logo" width={24} height={24} className="h-6 w-6" />
                  <span className="font-semibold tracking-wide text-white text-lg">Zertov</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                          <CircleFadingPlus className="h-4 w-4" />
                        </span>
                        <span className="text-sm">Services</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="flex flex-col bg-gray-900/50 border-l-2 border-purple-300/30 ml-4">
                        {service.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center gap-3 pl-8 pr-4 py-2.5 hover:bg-gray-900 hover:text-purple-300 transition-colors"
                          >
                            <service.icon className="h-4 w-4 text-purple-300/70" />
                            <span className="text-sm">{service.label}</span>
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full bg-[#000043] text-white font-medium rounded-lg px-6 py-2.5
                               hover:bg-[#000043]/80 hover:shadow-md hover:scale-[1.02]
                               transition-all"
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
