import { MenuDashboard } from '@/components/menuDashboard'
import { ContextLibraryProvider } from '@/data/contexts/ContextLibrary'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full min-h-screen flex pr-4 pb-4">
      <MenuDashboard />
      <ContextLibraryProvider>{children}</ContextLibraryProvider>
    </div>
  )
}
