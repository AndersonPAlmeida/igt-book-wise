import { Skeleton } from '../ui/skeleton'

export function LoadingReviews() {
  return (
    <>
      <Skeleton className="w-full h-6 rounded-full" />
      <div className="flex gap-4 flex-wrap mt-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-72 rounded" />
        ))}
      </div>
    </>
  )
}

export function LoadingBooks() {
  return (
    <section className="w-80 max-lg:hidden">
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="w-[300px] h-6 rounded-full" />
      </div>

      <div className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="w-[300px] h-[130px] rounded" />
        ))}
      </div>
    </section>
    // <div className="flex justify-between items-center mb-4">
    //   <Skeleton className="w-full h-6 rounded-full" />
    //   {Array.from({ length: 3 }).map((_, index) => (
    //     <Skeleton key={index} className="w-[370px] h-[130px] rounded" />
    //   ))}
    // </div>
  )
}
