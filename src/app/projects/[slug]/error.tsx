"use client"

import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Project detail error:", error)
  }, [error])

  return (
    <div className="min-h-dvh bg-white pb-24 pt-32 text-neutral-900">
      <div className="container mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center md:px-8">
        <div className="rounded-full border border-amber-200/60 bg-amber-50 p-5">
          <AlertTriangle className="h-10 w-10 text-amber-500" />
        </div>
        <h1 className="text-3xl font-semibold">We couldn&apos;t open this project</h1>
        <p className="text-sm text-neutral-500">
          Give it another try or return to the projects gallery to explore more of our work.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            onClick={reset}
            className="rounded-full border border-indigo-100 bg-indigo-50 px-6 py-2 text-indigo-600 hover:border-indigo-200 hover:bg-indigo-100"
          >
            Try again
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-indigo-100 bg-white text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50"
          >
            <a href="/projects">Back to projects</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
