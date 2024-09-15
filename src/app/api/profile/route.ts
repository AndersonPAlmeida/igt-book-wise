import { ProfileRatings } from '@/backend/ProfilePrisma'
import { authOptions } from '@/data/lib/auth'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' })
  }
  // const ratingsUserSession = await ProfileRatings(session.user.id)

  const ratingsUserSession = await ProfileRatings(
    '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
  )
  return NextResponse.json(ratingsUserSession)
}
