import { cn } from '@/data/lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-400/10', className)}
      {...props}
    />
  )
}

export { Skeleton }
