import { prisma } from '@/data/lib/prisma'

export async function CategoriesAll() {
  const result = await prisma.category.findMany({})

  return result
}
