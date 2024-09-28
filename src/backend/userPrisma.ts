import { prisma } from '@/data/lib/prisma'

export async function UserUnique(idUserSearch: string) {
  const result = await prisma.user.findUnique({
    where: {
      id: idUserSearch,
    },
  })

  return result
}
