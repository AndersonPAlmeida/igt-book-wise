import { Skeleton } from '../ui/skeleton'

export function LoadingTags() {
  return (
    <section className="flex gap-3 mb-10 flex-wrap">
      {Array.from({ length: 13 }).map((_, index) => (
        <Skeleton key={index} className="w-32 h-8 rounded-full" />
      ))}
    </section>
  )
}

export function LoadingBooks() {
  return (
    <section className="flex-1 flex flex-wrap items-center justify-center gap-5">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="w-[300px] h-[184px] rounded" />
      ))}
    </section>
  )
}
