import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectsLoading() {
  return (
    <div className="min-h-dvh bg-white pb-24 pt-32 text-neutral-900">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <Skeleton className="h-6 w-40 rounded-full bg-neutral-200/40" />
          <Skeleton className="mt-4 h-10 w-2/3 rounded-full bg-neutral-200/40" />
          <Skeleton className="mt-6 h-11 w-full rounded-full bg-neutral-200/40" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`project-skeleton-${index}`}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <Skeleton className="h-48 w-full rounded-2xl bg-neutral-200/40" />
              <Skeleton className="mt-6 h-4 w-24 rounded-full bg-neutral-200/40" />
              <Skeleton className="mt-3 h-8 w-3/4 rounded-full bg-neutral-200/40" />
              <Skeleton className="mt-3 h-16 w-full rounded-2xl bg-neutral-200/40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
