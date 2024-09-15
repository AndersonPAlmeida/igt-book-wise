import { ContextLibraryProvider } from '@/data/contexts/ContextLibrary'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full">
      <ContextLibraryProvider>{children}</ContextLibraryProvider>
    </div>
  )
}
