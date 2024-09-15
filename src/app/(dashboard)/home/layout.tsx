import { ContextHomeProvider } from '@/data/contexts/ContextHome'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full">
      <ContextHomeProvider>{children}</ContextHomeProvider>
    </div>
  )
}
