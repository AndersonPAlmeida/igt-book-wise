import { RatingRecent } from '@/backend/ratingPrisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const searchRatingsRecent = await RatingRecent()

  return NextResponse.json(searchRatingsRecent)
}
