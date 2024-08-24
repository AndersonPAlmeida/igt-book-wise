import { Category } from './Category'
import { Rating } from './Rating'

export interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
  categories: Category[]
  ratings: Rating[]
}
