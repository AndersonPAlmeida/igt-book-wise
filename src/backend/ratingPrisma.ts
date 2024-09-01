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

export async function RatingBookAvg() {
  const topBookRatings = await prisma.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true,
    },
    orderBy: {
      _avg: {
        rate: 'desc',
      },
    },
    take: 3,
  })

  const result = await prisma.book.findMany({
    where: {
      id: {
        in: topBookRatings.map((rating) => rating.book_id),
      },
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: {
        include: {
          user: true,
        },
      },
    },
  })

  return result
}
