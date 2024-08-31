'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Category } from '../models/Category'
import { Rating } from '../models/Rating'

interface ContextHomeProps {
  children: ReactNode
}

interface ContextHomeType {
  ratings: Rating[]
  categories: Category[]
  tags: string
  tagSelected: (newTag: string) => void
  // sumRating: (evaluations: Rating[]) => number
}

export const ContextHome = createContext<ContextHomeType>({} as ContextHomeType)

async function searchData() {
  const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE
  const [ratingsResponse, categoriesResponse] = await Promise.all([
    fetch(`${URL_BASE}/api/ratings`),
    fetch(`${URL_BASE}/api/categories`),
  ])

  const ratingsSearch: Rating[] = await ratingsResponse.json()
  const categoriesSearch: Category[] = await categoriesResponse.json()

  return { ratingsSearch, categoriesSearch }
}

export function ContextHomeProvider({ children }: ContextHomeProps) {
  const [ratings, setRatings] = useState<Rating[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [tags, setTags] = useState<string>('')

  useEffect(() => {
    async function fetchData() {
      const { ratingsSearch, categoriesSearch } = await searchData()
      setRatings(ratingsSearch)
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

  return (
    <ContextHome.Provider
      value={{
        ratings,
        categories,
        tags,
        tagSelected,
      }}
    >
      {children}
    </ContextHome.Provider>
  )
}
