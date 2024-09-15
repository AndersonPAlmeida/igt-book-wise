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
  tags: string
  filteredBooks: Book[]
  tagSelected: (newTag: string) => void
  setTextSearch: (textSearch: string) => void
}

export const ContextLibrary = createContext<ContextLibraryType>(
  {} as ContextLibraryType,
)

async function searchData() {
  const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE
  const [booksResponse, categoriesResponse] = await Promise.all([
    fetch(`${URL_BASE}/api/books`),
    fetch(`${URL_BASE}/api/categories`),
  ])

  const booksSearch: Book[] = await booksResponse.json()
  const categoriesSearch: Category[] = await categoriesResponse.json()

  return { booksSearch, categoriesSearch }
}

export function ContextLibraryProvider({ children }: ContextLibraryProps) {
  const [books, setBooks] = useState<Book[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [tags, setTags] = useState<string>('')
  const [textSearchBookOrAuthor, setTextSearchBookorAuthor] =
    useState<string>('')

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

  function setTextSearch(textSearch: string) {
    setTextSearchBookorAuthor(textSearch)
  }

  const filteredBooksTags = tags
    ? books.filter((book) =>
        book.categories.some((category) => category.categoryId === tags),
      )
    : books

  const filteredBooks = textSearchBookOrAuthor
    ? filteredBooksTags.filter(
        (filteredBookTags) =>
          filteredBookTags.author.includes(textSearchBookOrAuthor) ||
          filteredBookTags.name.includes(textSearchBookOrAuthor),
      )
    : filteredBooksTags

  return (
    <ContextLibrary.Provider
      value={{
        books,
        categories,
        tags,
        tagSelected,
        setTextSearch,
        filteredBooks,
      }}
    >
      {children}
    </ContextLibrary.Provider>
  )
}
