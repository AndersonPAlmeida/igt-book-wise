import { ContextLibraryProvider } from '@/data/contexts/ContextLibrary'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="max-w-[1440px] m-auto">
      <ContextLibraryProvider>{children}</ContextLibraryProvider>
    </div>
  )
}
