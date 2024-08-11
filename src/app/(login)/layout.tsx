export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section className="grid grid-cols-2 h-screen p-5">{children}</section>
}
