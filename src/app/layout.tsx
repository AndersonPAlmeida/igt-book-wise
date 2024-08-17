import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Home',
  description: 'Página inicial da biblioteca',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br">
      <link rel="icon" href="/icon/LogoIcon.svg" type="image/svg+xml" />
      <body className={`${nunito.className} max-w-[1440px] m-auto`}>
        {children}
      </body>
    </html>
  )
}
