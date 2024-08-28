import { prisma } from '@/data/lib/prisma'

export async function BooksAll() {
  const result = await prisma.book.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: true,
    },
  })

  return result
}

export async function BookUnique(idSearch: string) {
  const result = await prisma.book.findUnique({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: true,
    },
    where: {
      id: idSearch,
    },
  })

  return result
}
