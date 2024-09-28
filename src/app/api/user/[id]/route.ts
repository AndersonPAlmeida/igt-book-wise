import { UserUnique } from '@/backend/userPrisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const searchUser = await UserUnique(id)

  return NextResponse.json(searchUser)
}
