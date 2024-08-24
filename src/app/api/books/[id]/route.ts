import { BookUnique } from '@/backend/booksPrisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params
  const searchBook = await BookUnique(id)

  return NextResponse.json(searchBook)
}
