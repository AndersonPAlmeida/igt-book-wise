'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Rating } from '../models/Rating'

interface ContextProfileProps {
  children: ReactNode
}

interface ContextProfileType {
  filteredRatingsBookOfProfile: Rating[]
  setTextSearch: (textSearch: string) => void
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
    ? profile.filter(
        (profileUnique) => profileUnique.book.name === textSearchBook,
      )
    : profile

  return (
    <ContextProfile.Provider
      value={{
        setTextSearch,
        filteredRatingsBookOfProfile,
      }}
    >
      {children}
    </ContextProfile.Provider>
  )
}
