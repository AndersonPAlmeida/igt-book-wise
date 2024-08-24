import { CategoriesOnBooks } from './CategoriesOnBook'

export interface Category {
  id: string
  name: string

  books: CategoriesOnBooks[]
}
