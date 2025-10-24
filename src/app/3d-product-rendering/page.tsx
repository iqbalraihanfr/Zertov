import React from "react";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Product Rendering - Coming Soon",
  description: "Professional 3D product rendering services are coming soon. Stay tuned for our upcoming 3D visualization solutions.",
};

export default function Page() {
  const words = [
    {
      text: "3D",
      className: "text-white",
    },
    {
      text: "Product",
      className: "text-white",
    },
    {
      text: "Rendering",
      className: "text-lime-400",
    },
    {
      text: "Coming",
      className: "text-lime-400",
    },
    {
      text: "Soon",
      className: "text-lime-400",
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
      designation: "+1 (555) 123-4567",
      image: "/icons/favicon-white.svg",
      href: "https://wa.link/65mf3i",
    },
    {
      id: 3,
      name: "Location",
      designation: "Miami, FL",
      image: "/icons/favicon-white.svg",
      href: "#",
    },
  ];

  return (
    <>
      {/* SEO Schema for 3D Product Rendering Coming Soon Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "3D Product Rendering - Coming Soon - Zertov",
            description: "Professional 3D product rendering services are coming soon. Stay tuned for our upcoming 3D visualization solutions.",
            url: "https://zertov.com/3d-product-rendering",
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
                words="We're developing cutting-edge 3D product rendering services that will bring your products to life with photorealistic quality. Our team is working on advanced visualization techniques that will revolutionize how you showcase your products online."
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              />
            </div>

            {/* Contact Information with Animated Tooltips */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-lime-400">Get in Touch</h3>
              <div className="flex justify-center items-center gap-6">
                <AnimatedTooltip items={tooltipItems} />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="bg-lime-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-lime-300 hover:scale-105 transition-all duration-300"
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="border-lime-400 text-lime-400 font-semibold px-8 py-3 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
              >
                <Link href="https://wa.link/65mf3i">
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
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-neutral-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-lime-400">
              What's Coming
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Photorealistic Rendering",
                  description: "High-quality 3D product renders that look indistinguishable from real photographs, perfect for e-commerce and marketing.",
                  icon: "🎨",
                },
                {
                  title: "360° Product Views",
                  description: "Interactive 360-degree product visualization that allows customers to explore every angle of your products.",
                  icon: "🔄",
                },
                {
                  title: "Custom Lighting & Materials",
                  description: "Advanced lighting setups and material properties that showcase your products in the best possible way.",
                  icon: "💡",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 hover:border-lime-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
