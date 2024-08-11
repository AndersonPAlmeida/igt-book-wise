export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="grid grid-cols-2 min-h-[calc(100vh-40px)]">
      {children}
    </section>
  )
}
