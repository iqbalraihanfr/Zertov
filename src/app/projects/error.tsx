"use client"

import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProjectsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Projects page error:", error)
  }, [error])

  return (
    <div className="min-h-dvh bg-white pb-24 pt-32 text-neutral-900">
      <div className="container mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center md:px-8">
        <div className="rounded-full border border-amber-200/60 bg-amber-50 p-5">
          <AlertTriangle className="h-10 w-10 text-amber-500" />
        </div>
        <h1 className="text-3xl font-semibold">We can&apos;t load the projects right now</h1>
        <p className="text-sm text-neutral-500">
          Something went wrong on our side. Please try reloading the page or come back in a moment.
        </p>
        <Button
          onClick={reset}
          className="rounded-full border border-indigo-100 bg-indigo-50 px-6 py-2 text-indigo-600 hover:border-indigo-200 hover:bg-indigo-100"
        >
          Try again
        </Button>
      </div>
    </div>
  )
}
