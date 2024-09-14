import { ContextHomeProvider } from '@/data/contexts/ContextHome'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <ContextHomeProvider>{children}</ContextHomeProvider>
    </div>
  )
}
