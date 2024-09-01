import { RatingBookAvg } from '@/backend/ratingPrisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const searchRatingsAvg = await RatingBookAvg()

  return NextResponse.json(searchRatingsAvg)
}
