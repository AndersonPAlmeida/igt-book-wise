'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Book } from '../models/Book'
import { Category } from '../models/Category'

interface ContextLibraryProps {
  children: ReactNode
}

interface ContextLibraryType {
  books: Book[]
  categories: Category[]
}

export const ContextLibrary = createContext({} as ContextLibraryType)

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
  const [categories, setCategories] = useState<Category[]>([
    { id: '', name: 'Tudo' },
  ])

  useEffect(() => {
    async function fetchData() {
      const { booksSearch, categoriesSearch } = await searchData()
      setBooks(booksSearch)
      setCategories((state) => [...state, ...categoriesSearch])
    }

    fetchData()
  }, [])

  return (
    <ContextLibrary.Provider value={{ books, categories }}>
      {children}
    </ContextLibrary.Provider>
  )
}
