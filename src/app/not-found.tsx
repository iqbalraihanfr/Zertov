import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { AppverseFooter } from '@/components/appverse-footer'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from '@/components/ui/text-reveal-card'
import { Home, Search, ArrowRight, Zap, Users, FileText, Compass, Sparkles } from 'lucide-react'

export default function NotFound() {
  const popularPages = [
    {
      href: '/',
      title: 'Home',
      description: 'Back to our main page',
      icon: Home,
      revealText: 'Welcome Home',
    },
    {
      href: '/3D-architecture-visualization-studio',
      title: '3D Architecture Studio',
      description: 'Explore our visualization services',
      icon: Zap,
      revealText: '3D Magic Awaits',
    },
    {
      href: '/About',
      title: 'About Us',
      description: 'Learn more about Zertov',
      icon: Users,
      revealText: 'Meet Our Team',
    },
    {
      href: '/faq',
      title: 'FAQ',
      description: 'Find answers to common questions',
      icon: FileText,
      revealText: 'Get Answers',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
        
      <SiteHeader />
      
      <main className="relative z-10">
        {/* Hero Section with Aceternity Highlight */}
        {/* <HeroHighlight containerClassName="h-[60vh] bg-black"> */}
          <div className="text-center px-4">
            {/* Animated 404 with Highlight */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold mb-4">
                <Highlight className="text-white">
                  404
                </Highlight>
              </h1>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <Highlight className="text-white">
                Lost in the Digital Void?
              </Highlight>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Even the best explorers sometimes take a wrong turn. 
              <Highlight className="text-blue-400">
                Let's get you back on track!
              </Highlight>
            </p>

            {/* Floating Icons */}
          </div>
        {/* </HeroHighlight> */}

        {/* Popular Pages with Text Reveal Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Highlight className="text-white">
                Popular Destinations
              </Highlight>
            </h2>
            <p className="text-gray-400 text-lg">
              Click and hover to discover what awaits you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {popularPages.map((page) => {
              const Icon = page.icon
              return (
                <TextRevealCard
                  key={page.href}
                  text={page.title}
                  revealText={page.revealText}
                  className="w-full"
                >
                  <TextRevealCardTitle>
                    <div className="flex items-center mb-4">
                      <Icon className="w-6 h-6 mr-3 text-blue-400" />
                      {page.title}
                    </div>
                  </TextRevealCardTitle>
                  <TextRevealCardDescription>
                    {page.description}
                  </TextRevealCardDescription>
                  
                  <Link href={page.href} className="mt-6 inline-block">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Explore Now
                    </Button>
                  </Link>
                </TextRevealCard>
              )
            })}
          </div>
        </div>
      </main>
      <AppverseFooter />
    </div>
  )
}
