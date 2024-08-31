import { Book } from './Book'
import { User } from './User'

export interface Rating {
  id: string
  rate: number
  description: string
  created_at: Date
  book_id: string
  user_id: string
  user: User
  book: Book
}
