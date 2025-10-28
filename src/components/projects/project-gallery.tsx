"use client"

import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react"
import Image from "next/image"
import { Expand, ChevronLeft, ChevronRight } from "lucide-react"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { brandColors, colors } from "@/lib/utils/colors"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const primary = brandColors.zaffre
  const secondary = brandColors.cetaceanBlue

  const hasImages = images.length > 0

  useEffect(() => {
    if (!carouselApi) return

    const updateIndex = () => setSelectedIndex(carouselApi.selectedScrollSnap())
    updateIndex()
    carouselApi.on("select", updateIndex)
    return () => {
      carouselApi.off("select", updateIndex)
    }
  }, [carouselApi])

  const goTo = useCallback(
    (index: number) => {
      if (!carouselApi) return
      const boundedIndex = ((index % images.length) + images.length) % images.length
      carouselApi.scrollTo(boundedIndex)
    },
    [carouselApi, images.length],
  )

  const lightboxImage = useMemo(() => images[selectedIndex], [images, selectedIndex])

  if (!hasImages) {
    return null
  }

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border p-4 shadow-sm",
          colors.background.card,
          colors.border.primary,
        )}
      >
        <Carousel
          opts={{ loop: images.length > 1 }}
          setApi={(api) => setCarouselApi(api)}
          className="relative"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={`${image}-${index}`}>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="group relative block overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2"
                  style={{ "--tw-ring-color": primary } as CSSProperties}
                >
                  <Image
                    src={image}
                    alt={`${title} image ${index + 1}`}
                    width={1200}
                    height={800}
                    className="h-[360px] w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.015]"
                    priority={index === 0}
                  />
                  <span
                    className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] backdrop-blur"
                    style={{ color: `${secondary}CC` }}
                  >
                    {index + 1} / {images.length}
                  </span>
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    <Expand className="h-4 w-4" />
                    View full
                  </span>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 ? (
            <>
              <CarouselPrevious
                className="left-2 hidden -translate-y-1/2 bg-white shadow hover:bg-white md:flex"
                style={{ color: secondary }}
              />
              <CarouselNext
                className="right-2 hidden -translate-y-1/2 bg-white shadow hover:bg-white md:flex"
                style={{ color: secondary }}
              />
            </>
          ) : null}
        </Carousel>
      </div>

      {images.length > 1 ? (
        <div className="flex flex-wrap gap-2">
          {images.map((image, index) => {
            const isActive = index === selectedIndex
            return (
              <button
                key={`thumb-${image}-${index}`}
                type="button"
                onClick={() => goTo(index)}
                className={cn(
                  "relative overflow-hidden rounded-2xl border transition duration-300 focus-visible:outline-none focus-visible:ring-2",
                  isActive ? "shadow-md" : "hover:border-transparent",
                )}
                style={
                  {
                    borderColor: isActive ? primary : `${secondary}26`,
                    "--tw-ring-color": primary,
                  } as CSSProperties
                }
              >
                <Image
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  width={140}
                  height={96}
                  className="h-20 w-28 object-cover"
                />
              </button>
            )
          })}
        </div>
      ) : null}

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className="max-w-5xl border-none bg-transparent p-0 shadow-none outline-none sm:max-w-6xl"
          showCloseButton
        >
          <div className="relative rounded-3xl border border-white/20 bg-black/80 p-4 shadow-2xl">
            <div className="relative overflow-hidden rounded-2xl bg-black">
              <Image
                src={lightboxImage}
                alt={`${title} enlarged view`}
                width={1600}
                height={1000}
                className="h-[60vh] w-full object-contain"
              />
              {images.length > 1 ? (
                <>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => goTo(selectedIndex - 1)}
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Previous image</span>
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => goTo(selectedIndex + 1)}
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Next image</span>
                  </Button>
                </>
              ) : null}
            </div>
            {images.length > 1 ? (
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/70">
                <span>
                  {selectedIndex + 1} / {images.length}
                </span>
                <span className="font-medium text-white">Swipe or use arrows</span>
              </div>
            ) : (
              <div className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-white/70">Artwork preview</div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
