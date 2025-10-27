import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectLoading() {
  return (
    <div className="min-h-dvh bg-white pb-24 pt-32 text-neutral-900">
      <div className="container mx-auto max-w-5xl px-6 md:px-8">
        <Skeleton className="h-8 w-48 rounded-full bg-neutral-200/40" />
        <Skeleton className="mt-4 h-12 w-3/4 rounded-full bg-neutral-200/40" />
        <Skeleton className="mt-6 h-6 w-full rounded-full bg-neutral-200/40" />
        <Skeleton className="mt-10 h-[420px] w-full rounded-[2.5rem] bg-neutral-200/40" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <Skeleton className="h-48 w-full rounded-3xl bg-neutral-200/40" />
            <Skeleton className="h-48 w-full rounded-3xl bg-neutral-200/40" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-32 w-full rounded-3xl bg-neutral-200/40" />
            <Skeleton className="h-32 w-full rounded-3xl bg-neutral-200/40" />
          </div>
        </div>
      </div>
    </div>
  )
}
