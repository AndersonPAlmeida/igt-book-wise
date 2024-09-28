'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Rating } from '../models/Rating'
import { Book } from '../models/Book'

interface ContextProfileProps {
  children: ReactNode
}

interface ContextProfileType {
  filteredRatingsBookOfProfile: Rating[]
  setTextSearch: (textSearch: string) => void
  uniqueBooks: Book[]
  uniqueAuthors: string[]
  pagesRead: number
  categoryMostRead: string[]
}

export const ContextProfile = createContext<ContextProfileType>(
  {} as ContextProfileType,
)

async function searchData() {
  const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE
  const profileResponse = await fetch(`${URL_BASE}/api/profile`)

  const profileSearch: Rating[] = await profileResponse.json()

  return { profileSearch }
}

export function ContextProfileProvider({ children }: ContextProfileProps) {
  const [profile, setProfile] = useState<Rating[]>([])
  const [textSearchBook, setTextSearchBookorAuthor] = useState<string>('')

  useEffect(() => {
    async function fetchData() {
      const { profileSearch } = await searchData()
      setProfile(profileSearch)
    }

    fetchData()
  }, [])

  function setTextSearch(textSearch: string) {
    setTextSearchBookorAuthor(textSearch)
  }

  const filteredRatingsBookOfProfile = textSearchBook
    ? profile.filter((profileUnique) =>
        profileUnique.book.name
          .toLocaleLowerCase()
          .includes(textSearchBook.toLocaleLowerCase()),
      )
    : profile

  const uniqueBooks = Array.from(
    new Map(profile.map((book) => [book.book.id, book.book])).values(),
  )

  const pagesRead = uniqueBooks.reduce(
    (accumulator, books) => accumulator + books.total_pages,
    0,
  )

  const categoryMostReadSearch = () => {
    const categoryMostReadRanking = new Map<string, number>()

    profile.forEach((profileUnique) => {
      profileUnique.book.categories.forEach((categoryOnBook) => {
        const categoryName = categoryOnBook.category.name

        categoryMostReadRanking.set(
          categoryName,
          (categoryMostReadRanking.get(categoryName) || 0) + 1,
        )
      })
    })

    let highestCount = 0
    let mostReadCategories: string[] = []

    categoryMostReadRanking.forEach((count, category) => {
      if (count > highestCount) {
        highestCount = count
        mostReadCategories = [category]
      } else if (count === highestCount) {
        mostReadCategories.push(category)
      }
    })

    return mostReadCategories
  }

  const categoryMostRead = categoryMostReadSearch()

  const uniqueAuthors = Array.from(
    new Map(uniqueBooks.map((book) => [book.author, book.author])).values(),
  )

  return (
    <ContextProfile.Provider
      value={{
        setTextSearch,
        filteredRatingsBookOfProfile,
        uniqueBooks,
        uniqueAuthors,
        pagesRead,
        categoryMostRead,
      }}
    >
      {children}
    </ContextProfile.Provider>
  )
}
