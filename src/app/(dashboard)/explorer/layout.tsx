import { ContextLibraryProvider } from '@/data/contexts/ContextLibrary'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <ContextLibraryProvider>{children}</ContextLibraryProvider>
    </div>
  )
}
