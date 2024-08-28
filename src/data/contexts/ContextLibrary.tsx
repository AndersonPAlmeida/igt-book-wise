'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Book } from '../models/Book'
import { Category } from '../models/Category'
import { Rating } from '../models/Rating'

interface ContextLibraryProps {
  children: ReactNode
}

interface ContextLibraryType {
  books: Book[]
  categories: Category[]
  tags: string
  filteredBooks: Book[]
  tagSelected: (newTag: string) => void
  sumRating: (evaluations: Rating[]) => number
}

export const ContextLibrary = createContext<ContextLibraryType>(
  {} as ContextLibraryType,
)

async function searchData() {
  const [booksResponse, categoriesResponse] = await Promise.all([
    fetch('http://localhost:3000/api/books'),
    fetch('http://localhost:3000/api/categories'),
  ])

  const booksSearch: Book[] = await booksResponse.json()
  const categoriesSearch: Category[] = await categoriesResponse.json()

  return { booksSearch, categoriesSearch }
}

export function ContextLibraryProvider({ children }: ContextLibraryProps) {
  const [books, setBooks] = useState<Book[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [tags, setTags] = useState<string>('')

  useEffect(() => {
    async function fetchData() {
      const { booksSearch, categoriesSearch } = await searchData()
      setBooks(booksSearch)
      setCategories([{ id: '', name: 'Tudo' }, ...categoriesSearch])
    }

    fetchData()
  }, [])

  function tagSelected(newTag: string) {
    if (newTag === tags) {
      setTags(tags)
    } else {
      setTags(newTag)
    }
  }

  const filteredBooks = tags
    ? books.filter((book) =>
        book.categories.some((category) => category.categoryId === tags),
      )
    : books

  const sumRating = (evaluations: Rating[]) => {
    return Math.floor(
      evaluations.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rate
      }, 0) / (evaluations.length || 1),
    )
  }

  return (
    <ContextLibrary.Provider
      value={{
        books,
        categories,
        tags,
        tagSelected,
        filteredBooks,
        sumRating,
      }}
    >
      {children}
    </ContextLibrary.Provider>
  )
}
