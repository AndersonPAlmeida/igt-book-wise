'use client'

import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MenuDashboard() {
  const pathname = usePathname()

  return (
    <div className="p-5 place">
      <aside
        className="
            bg-book-wise-aside h-full w-60 rounded-xl
            flex flex-col justify-between items-center
            px-12 py-8 max-h-[calc(100vh-64px)]
        "
      >
        <div className="flex flex-col justify-between items-center gap-16">
          <Image
            src={'/icon/LogoComplete.svg'}
            width={232}
            height={58}
            alt={'Logo completa'}
          />
          <nav className="space-y-4 text-gray-400 text-base">
            <span className="flex items-center gap-4">
              <div
                className={`w-1 h-6 rounded-full ${
                  pathname === '/home'
                    ? 'bg-gradient-vertical'
                    : 'bg-transparent'
                }`}
              />
              <Link
                href="/home"
                className={`flex gap-3 items-center hover:text-gray-100 ${
                  pathname === '/home' ? 'text-gray-100' : 'text-gray-400'
                }`}
              >
                <ChartLineUp size={24} />
                Início
              </Link>
            </span>
            <span className="flex items-center gap-4">
              <div
                className={`w-1 h-6 rounded-full ${
                  pathname === '/explorer'
                    ? 'bg-gradient-vertical'
                    : 'bg-transparent'
                }`}
              />
              <Link
                href="/explorer"
                className={`flex gap-3 items-center hover:text-gray-100 ${
                  pathname === '/explorer' ? 'text-gray-100' : 'text-gray-400'
                }`}
              >
                <Binoculars size={24} />
                Explorar
              </Link>
            </span>
            <span className="flex items-center gap-4">
              <div
                className={`w-1 h-6 rounded-full ${
                  pathname === '/profile'
                    ? 'bg-gradient-vertical'
                    : 'bg-transparent'
                }`}
              />
              <Link
                href="/profile"
                className={`flex gap-3 items-center hover:text-gray-100 ${
                  pathname === '/profile' ? 'text-gray-100' : 'text-gray-400'
                }`}
              >
                <User size={24} />
                Perfil
              </Link>
            </span>
          </nav>
        </div>
        <div>Perfil e botão de sair/ logar</div>
      </aside>
    </div>
  )
}
