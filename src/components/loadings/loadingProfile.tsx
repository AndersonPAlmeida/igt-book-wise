import { Skeleton } from '../ui/skeleton'

export function LoadingCardProfile() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="w-full h-64 rounded-lg" />
      ))}
    </>
  )
}

export function LoadingProfileUser() {
  return (
    <section className="w-72 flex flex-col gap-8 first-letter:items-center">
      <div className="flex flex-col gap-6 items-center border border-transparent border-l-gray-700 pb-4">
        <Skeleton className="size-20 rounded-full" />
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="w-44 h-3 rounded-full" />
          <Skeleton className="w-44 h-3 rounded-full" />
        </div>
        <div className="w-10 h-2 bg-gradient-horizontal rounded-full"></div>
        <div className="flex flex-col gap-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex gap-5 h-12 items-center">
              <Skeleton className="size-8 rounded-lg" />
              <div className="flex flex-col h-full justify-between">
                <Skeleton className="w-44 h-3 rounded-full" />
                <Skeleton className="w-44 h-3 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
