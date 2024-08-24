import { prisma } from '@/data/lib/prisma'

export async function BooksAll() {
  const result = await prisma.book.findMany()

  return result
}

export async function BookUnique(idSearch: string) {
  const result = await prisma.book.findUnique({
    where: {
      id: idSearch,
    },
  })

  return result
}
