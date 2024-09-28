'use client'

import { ContextUserProvider } from '@/data/contexts/ContextUser'
import { SessionProvider } from 'next-auth/react'

export default function SessionProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <ContextUserProvider>{children}</ContextUserProvider>
    </SessionProvider>
  )
}
