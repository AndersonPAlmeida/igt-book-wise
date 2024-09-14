import { MenuDashboard } from '@/components/menuDashboard'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="max-w-[1440px] m-auto w-full min-h-screen flex pr-4 pb-4">
      <MenuDashboard />
      {children}
    </div>
  )
}
