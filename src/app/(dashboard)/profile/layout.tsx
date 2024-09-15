import { ContextProfileProvider } from '@/data/contexts/ContextProfile'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <ContextProfileProvider>{children}</ContextProfileProvider>
    </div>
  )
}
