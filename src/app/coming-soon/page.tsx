import React from "react";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export default function ComingSoonPage() {
  const words = [
    {
      text: "Something",
      className: "text-white",
    },
    {
      text: "Amazing",
      className: "text-white",
    },
    {
      text: "is",
      className: "text-white",
    },
    {
      text: "Coming",
      className: "text-white",
    },
    {
      text: "Soon",
      className: "text-white",
    },
  ];

  const tooltipItems = [
    {
      id: 1,
      name: "Email Us",
      designation: "hello@zertov.com",
      image: "/icons/favicon-white.svg",
      href: "mailto:hello@zertov.com",
    },
    {
      id: 2,
      name: "WhatsApp",
      designation: "+62 851-2379-6985",
      image: "/icons/favicon-white.svg",
      href: "https://wa.me/6285123796985",
    },
    {
      id: 3,
      name: "Location",
      designation: "Surabaya, Indonesia",
      image: "/icons/favicon-white.svg",
      href: "#",
    },
  ];

  return (
    <>
      {/* SEO Schema for Coming Soon Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Coming Soon - Zertov",
            description: "Zertov is working on something amazing. Stay tuned for our upcoming features and services.",
            url: "https://zertov.com/coming-soon",
            mainEntity: {
              "@type": "Organization",
              name: "Zertov",
              url: "https://zertov.com",
              description: "Digital Marketing Agency specializing in 3D animation and visual content",
            },
          }),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        <SiteHeader />
        
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Typewriter Effect */}
            <div className="mb-8">
              <TypewriterEffect words={words} className="text-4xl md:text-6xl lg:text-7xl font-bold" />
            </div>

            {/* Text Generate Effect */}
            <div className="mb-12">
              <TextGenerateEffect 
                words="We're crafting something extraordinary for you. Our team is working tirelessly to bring you the most innovative digital marketing solutions and 3D animation services that will revolutionize your brand's online presence."
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              />
            </div>

            {/* Contact Information with Animated Tooltips */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
              <div className="flex justify-center items-center gap-6">
                <AnimatedTooltip items={tooltipItems} />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="bg-[#000043] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#000043]/80 hover:scale-105 transition-all duration-300"
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="border-[#000043] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#000043]/80 hover:text-white transition-all duration-300"
              >
                <Link href="https://wa.me/6285123796985" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-lime-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </section>

        {/* Features Preview Section */}
       

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
