'use client'

import {
  Binoculars,
  ChartLineUp,
  SignIn,
  User,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MenuDashboard() {
  const pathname = usePathname()

  return (
    <div className="p-5 place">
      <aside
        className="
            bg-book-wise-aside h-screen max-h-[988px] w-[232px] rounded-xl
            flex flex-col justify-between items-center
            px-12 py-8
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
        <div>
          <button className="flex gap-3 items-center text-gray-200 text-base font-bold hover:text-gray-100">
            Fazer login{' '}
            <SignIn size={20} weight="bold" className="text-green-100" />
          </button>
        </div>
      </aside>
    </div>
  )
}
