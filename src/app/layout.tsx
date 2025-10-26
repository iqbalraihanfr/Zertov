import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Wix_Madefor_Display } from "next/font/google"
import Script from "next/script"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/sonner"
// import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const wixMadefor = Wix_Madefor_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-wix-madefor"
})

export const metadata: Metadata = {
  title: "Zertov | Digital Marketing Agency",
  description:
    "Zertov is a digital marketing agency that helps businesses grow their online presence and reach their target audience.",
  keywords: ["digital marketing", "marketing agency", "marketing services", "marketing solutions", "marketing strategies", "marketing consulting", "marketing planning", "marketing implementation", "marketing execution", "marketing management", "marketing consulting", "marketing planning", "marketing implementation", "marketing execution", "marketing management"],
  authors: [{ name: "Zertov", url: "https://zertov.com" }],
  creator: "Zertov",
  publisher: "Zertov",
  openGraph: {
    title: "Zertov | Digital Marketing Agency",
    description: "Zertov is a digital marketing agency that helps businesses grow their online presence and reach their target audience.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={wixMadefor.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />

        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/WixMadeforDisplay.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Dynamic Favicon Script */}
        <Script id="dynamic-favicon" strategy="beforeInteractive">
          {`
            function updateFavicon() {
              const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const faviconHref = darkMode ? '/icons/zertov-white.svg' : '/icons/favicon-dark.svg';
              let link = document.querySelector("link[rel~='icon']");
              if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.getElementsByTagName('head')[0].appendChild(link);
              }
              link.href = faviconHref;
            }
            updateFavicon();
            // Listen for changes in theme
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
          `}
        </Script>

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body>
        <Suspense fallback={null}>
          <div className="fixed inset-0 z-0 bg-white">
            {/* <Plasma color="#0006aa" speed={1.6} direction="forward" scale={0.7} opacity={0.4} mouseInteractive={false} /> */}
          </div>
          <div className="relative z-10">{children}</div>
        </Suspense>

        {/* Vercel Speed Insights and Analytics components */}
          {/* <SpeedInsights /> */}
          <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
