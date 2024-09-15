'use client'
import { RatingDisplay } from '@/components/Rating'
import { useProfile } from '@/data/hooks/useProfile'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass, User } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const searcReviewBookSchema = z.object({
  search: z.string(),
})

type SearcReviewBookData = z.infer<typeof searcReviewBookSchema>

export default function Profile() {
  const { filteredRatingsBookOfProfile } = useProfile()
  const { register } = useForm<SearcReviewBookData>({
    resolver: zodResolver(searcReviewBookSchema),
  })

  return (
    <div className="flex-grow flex flex-col">
      <p>{JSON.stringify(filteredRatingsBookOfProfile, null, 2)}</p>
      <header className="mt-20 mb-10 flex gap-3 items-center">
        <User size={32} weight="bold" className="text-green-100" />{' '}
        <h1 className="text-2xl font-bold">Perfil</h1>
      </header>
      <main className="flex gap-10">
        <section className="flex-1 flex flex-col gap-8 ">
          <div className="flex items-center bg-transparent border border-gray-500 w-full px-5 py-3 rounded group transition-colors duration-200 focus-within:border-green-200">
            <input
              type="text"
              id="searchBookOrAuthor"
              className="bg-transparent outline-none flex-1 caret-green-200 caret-
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
            <div>
              <span className="text-gray-200">Há 2 dias</span>
              <div className="mt-2 bg-gray-700 rounded-lg p-6 flex flex-col gap-6">
                <section className="flex gap-6 h-32">
                  <figure className="rounded w-24 h-full relative">
                    <Image
                      src={'/book/a-revolucao-dos-bixos.png'}
                      fill={true}
                      alt="Capa do livro avaliado"
                    />
                  </figure>
                  <div className="flex flex-col justify-between h-full flex-1">
                    <span>
                      <p className="text-base font-bold ">
                        A revolução dos bixos
                      </p>
                      <p className="text-gray-400">George Orwell</p>
                    </span>
                    <span>
                      <RatingDisplay classification={1} />
                    </span>
                  </div>
                </section>
                <p className="text-gray-300">
                  Tristique massa sed enim lacinia odio. Congue ut faucibus nunc
                  vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae
                  fringilla ut et suspendisse enim suspendisse vitae. Leo non
                  eget lacus sollicitudin tristique pretium quam. Mollis et
                  luctus amet sed convallis varius massa sagittis. Proin sed
                  proin at leo quis ac sem. Nam donec accumsan curabitur amet
                  tortor quam sit. Bibendum enim sit dui lorem urna amet elit
                  rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet
                  integer pellentesque.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="min-w-72 bg-green-200">b</section>
      </main>
    </div>
  )
}
