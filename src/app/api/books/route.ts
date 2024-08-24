import { BooksAll } from '@/backend/booksPrisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const searchBooks = await BooksAll()

  return NextResponse.json(searchBooks)
}
