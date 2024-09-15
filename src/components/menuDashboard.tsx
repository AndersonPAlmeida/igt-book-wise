'use client'

import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react/dist/ssr'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AvatarProfile } from './avatarProfile'

export function MenuDashboard() {
  const pathname = usePathname()
  const { status, data } = useSession()

  return (
    <div className="h-screen p-4">
      <aside
        className="
            bg-book-wise-aside h-full w-[232px] rounded-xl
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
            {status === 'authenticated' && (
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
            )}
          </nav>
        </div>
        <div>
          <div className=" text-gray-200 text-base font-bold">
            {status === 'authenticated' ? (
              <span className="flex gap-3 items-center group">
                <AvatarProfile imageSrc={data.user?.avatar_url} />
                <button className="flex gap-3 items-center">
                  <p className="group-hover:text-gray-100">
                    {data?.user?.name?.split(' ')[0]}
                  </p>
                  <SignIn
                    size={20}
                    weight="bold"
                    className="text-green-100 group-hover:text-green-500"
                  />
                </button>
              </span>
            ) : (
              <button className="flex gap-3 items-center">
                <p className="group-hover:text-gray-100">Fazer login</p>
                <SignOut
                  size={20}
                  weight="bold"
                  className="text-red-600 group-hover:text-red-500"
                />
              </button>
            )}
          </div>
        </div>
      </aside>
    </div>
  )
}
