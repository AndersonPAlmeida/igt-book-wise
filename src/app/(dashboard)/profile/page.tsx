'use client'
import { CardProfile } from '@/components/cardProfile'
import { useProfile } from '@/data/hooks/useProfile'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass, User } from '@phosphor-icons/react/dist/ssr'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const searcReviewBookSchema = z.object({
  search: z.string(),
})

type SearcReviewBookData = z.infer<typeof searcReviewBookSchema>

export default function Profile() {
  const { filteredRatingsBookOfProfile, setTextSearch } = useProfile()
  const { register, watch } = useForm<SearcReviewBookData>({
    resolver: zodResolver(searcReviewBookSchema),
  })

  setTextSearch(watch('search'))

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
            {filteredRatingsBookOfProfile.map((profile) => {
              return <CardProfile key={profile.id} profileView={profile} />
            })}
          </div>
        </section>
        <section className="w-72 bg-green-200">b</section>
      </main>
    </div>
  )
}
