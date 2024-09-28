import { UserUnique } from '@/backend/userPrisma'
import { authOptions } from '@/data/lib/auth'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } },
// ) {
//   const { id } = params
//   const searchUser = await UserUnique(id)

//   return NextResponse.json(searchUser)
// }

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' })
  }

  const { id } = session.user
  const searchUser = await UserUnique(id)

  return NextResponse.json(searchUser)
}
