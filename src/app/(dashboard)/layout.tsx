import { MenuDashboard } from '@/components/menuDashboard'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full min-h-screen flex">
      <MenuDashboard />
      {children}
    </div>
  )
}
