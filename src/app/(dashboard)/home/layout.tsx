import { ContextHomeProvider } from '@/data/contexts/ContextHome'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="max-w-[1440px] m-auto">
      <ContextHomeProvider>{children}</ContextHomeProvider>
    </div>
  )
}
