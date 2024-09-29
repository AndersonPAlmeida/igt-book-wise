'use client'
import { AvatarProfile } from '@/components/avatarProfile'
import { CardProfile } from '@/components/cardProfile'
import { InfoAvaliationsProfile } from '@/components/infoAvaliationsProfile'
import {
  LoadingCardProfile,
  LoadingProfileUser,
} from '@/components/loadings/loadingProfile'
import { useProfile } from '@/data/hooks/useProfile'
import { useUser } from '@/data/hooks/useUser'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  BookmarkSimple,
  BookOpen,
  Books,
  MagnifyingGlass,
  User,
  UserList,
  XCircle,
} from '@phosphor-icons/react/dist/ssr'
import { getYear } from 'date-fns'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const searcReviewBookSchema = z.object({
  search: z.string(),
})

type SearcReviewBookData = z.infer<typeof searcReviewBookSchema>

export default function Profile() {
  const { userInfo } = useUser()
  const {
    filteredRatingsBookOfProfile,
    setTextSearch,
    uniqueBooks,
    uniqueAuthors,
    pagesRead,
    categoryMostRead,
  } = useProfile()
  const { register, watch } = useForm<SearcReviewBookData>({
    resolver: zodResolver(searcReviewBookSchema),
  })
  const [isLoading, setIsLoading] = useState(true)
  const searchValue = watch('search')

  useEffect(() => {
    setTextSearch(searchValue)
  }, [searchValue, setTextSearch])

  useEffect(() => {
    if (filteredRatingsBookOfProfile.length === 0 && searchValue === '') {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [searchValue, filteredRatingsBookOfProfile, setIsLoading])

  return (
    <div className="flex-grow flex flex-col w-full">
      <header className="mt-20 mb-10 flex gap-3 items-center">
        <User size={32} weight="bold" className="text-green-100" />{' '}
        <h1 className="text-2xl font-bold">Perfil</h1>
      </header>
      <main className="flex gap-10">
        <section className="flex-1 flex flex-col gap-8">
          <div className="flex items-center bg-transparent border border-gray-500 px-5 py-3 rounded group transition-colors duration-200 focus-within:border-green-200">
            <input
              type="text"
              id="searchBookOrAuthor"
              className="bg-transparent outline-none w-full caret-green-200 caret-
            placeholder:text-gray-400"
              placeholder="Buscar livro avaliado"
              {...register('search')}
            />
            <MagnifyingGlass
              size={20}
              className="text-gray-500 transition-colors duration-200 group-focus-within:text-green-200"
            />
          </div>
          <div className="flex flex-col gap-6">
            {isLoading ? (
              <LoadingCardProfile />
            ) : filteredRatingsBookOfProfile.length === 0 && !isLoading ? (
              <div className="flex flex-col items-center gap-2">
                <XCircle size={80} weight="fill" className="text-green-100" />
                <span className="leading-6 text-gray-400">
                  Livro não avaliado
                </span>
              </div>
            ) : (
              filteredRatingsBookOfProfile.map((profile) => (
                <CardProfile key={profile.id} profileView={profile} />
              ))
            )}
          </div>
        </section>
        {!userInfo || Object.keys(userInfo).length === 0 ? (
          <LoadingProfileUser />
        ) : (
          <section className="w-72 flex flex-col gap-8 first-letter:items-center">
            <div className="flex flex-col gap-6 items-center border border-transparent border-l-gray-700 pb-4">
              <AvatarProfile
                variant="profilePage"
                imageSrc={userInfo.avatar_url}
              />
              <div className="flex flex-col items-center">
                <h4 className="font-bold text-xl leading-7">{userInfo.name}</h4>
                <span className="leading-6 text-gray-400">{`Membro desde ${getYear(new Date(userInfo.created_at))}`}</span>
              </div>
              <div className="w-10 h-2 bg-gradient-horizontal rounded-full"></div>
              <div className="flex flex-col gap-10">
                <InfoAvaliationsProfile
                  icon={BookOpen}
                  informationPrimary={pagesRead}
                  informationSecondary="Páginas lidas"
                />
                <InfoAvaliationsProfile
                  icon={Books}
                  informationPrimary={uniqueBooks.length}
                  informationSecondary="Livro(s) avaliado(s)"
                />
                <InfoAvaliationsProfile
                  icon={UserList}
                  informationPrimary={uniqueAuthors.length}
                  informationSecondary="Autore(s) lido(s)"
                />
                <InfoAvaliationsProfile
                  icon={BookmarkSimple}
                  informationPrimary={categoryMostRead.join(', ')}
                  informationSecondary="Categoria(s) mais lida"
                />
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
