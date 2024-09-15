import { MenuDashboard } from '@/components/menuDashboard'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full min-h-screen flex pr-4">
      <MenuDashboard />
      {children}
    </div>
  )
}
