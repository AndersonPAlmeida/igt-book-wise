import { ContextProfileProvider } from '@/data/contexts/ContextProfile'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full">
      <ContextProfileProvider>{children}</ContextProfileProvider>
    </div>
  )
}
