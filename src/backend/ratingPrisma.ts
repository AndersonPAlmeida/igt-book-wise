import { prisma } from '@/data/lib/prisma'

export async function RatingRecent() {
  const result = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    take: 3,
    include: {
      user: true,
      book: true,
    },
  })

  return result
}
