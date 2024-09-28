'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { User } from '../models/User'

interface ContextUserProps {
  children: ReactNode
}

interface ContextUserType {
  userInfo: User
}

export const ContextUser = createContext<ContextUserType>({} as ContextUserType)

async function searchData() {
  const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE
  const userResponse = await fetch(`${URL_BASE}/api/user`)

  const userResponseSearch: User = await userResponse.json()

  return userResponseSearch
}

export function ContextUserProvider({ children }: ContextUserProps) {
  const [userInfo, setUserInfo] = useState<User>({} as User)

  useEffect(() => {
    async function fetchData() {
      const userResponseSearch = await searchData()
      setUserInfo(userResponseSearch)
    }

    fetchData()
  }, [])

  return (
    <ContextUser.Provider
      value={{
        userInfo,
      }}
    >
      {children}
    </ContextUser.Provider>
  )
}
