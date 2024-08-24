import { CategoriesAll } from '@/backend/categoriesPrisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const searchCategories = await CategoriesAll()

  return NextResponse.json(searchCategories)
}
