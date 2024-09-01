'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Rating } from '../models/Rating'
import { Book } from '../models/Book'

interface ContextHomeProps {
  children: ReactNode
}

interface ContextHomeType {
  ratingsRecents: Rating[]
  ratingsAvgBook: Book[]
}

export const ContextHome = createContext<ContextHomeType>({} as ContextHomeType)

async function searchData() {
  const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE
  const [ratingsResponse, ratingsAvgResponse] = await Promise.all([
    fetch(`${URL_BASE}/api/ratings`),
    fetch(`${URL_BASE}/api/ratings-avg`),
  ])

  const ratingsRecentsSearch: Rating[] = await ratingsResponse.json()
  const ratingsAvgBooksSearch: Book[] = await ratingsAvgResponse.json()

  return { ratingsRecentsSearch, ratingsAvgBooksSearch }
}

export function ContextHomeProvider({ children }: ContextHomeProps) {
  const [ratingsRecents, setRatingsRecents] = useState<Rating[]>([])
  const [ratingsAvgBook, setRatingsAvgBook] = useState<Book[]>([])

  useEffect(() => {
    async function fetchData() {
      const { ratingsRecentsSearch, ratingsAvgBooksSearch } = await searchData()
      setRatingsRecents(ratingsRecentsSearch)
      setRatingsAvgBook(ratingsAvgBooksSearch)
    }

    fetchData()
  }, [])

  return (
    <ContextHome.Provider
      value={{
        ratingsRecents,
        ratingsAvgBook,
      }}
    >
      {children}
    </ContextHome.Provider>
  )
}
