import { prisma } from '@/data/lib/prisma'

export async function ProfileRatings(idUser: string) {
  const result = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: {
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
      },
    },
    where: {
      user_id: idUser,
    },
  })

  return result
}
