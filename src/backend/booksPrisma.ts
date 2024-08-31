import { prisma } from '@/data/lib/prisma'

export async function BooksAll() {
  const result = await prisma.book.findMany({
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

export async function BookUnique(idBookSearch: string) {
  const result = await prisma.book.findUnique({
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
    where: {
      id: idBookSearch,
    },
  })

  return result
}
