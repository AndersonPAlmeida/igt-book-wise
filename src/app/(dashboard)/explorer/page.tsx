'use client'
import { ButtonFilter } from '@/components/buttonFilter'
import {
  Binoculars,
  Books,
  MagnifyingGlass,
} from '@phosphor-icons/react/dist/ssr'
import { CardBookPopular } from '@/components/cardBookPopular'
import { useLibrary } from '@/data/hooks/useLibrary'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { BookHighlighted } from '@/components/bookHighlighted'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  LoadingBooks,
  LoadingTags,
} from '@/components/loadings/loadingExplorer'
import { useEffect } from 'react'

const searcBookSchema = z.object({
  search: z.string(),
})

type SearcBookData = z.infer<typeof searcBookSchema>

export default function Explore() {
  const { filteredBooks, categories, tags, tagSelected, setTextSearch } =
    useLibrary()
  const { register, watch } = useForm<SearcBookData>({
    resolver: zodResolver(searcBookSchema),
  })

  function handleSelectTag(tag: string) {
    tagSelected(tag)
  }

  const searchBook = watch('search')

  useEffect(() => {
    setTextSearch(searchBook)
  }, [searchBook, setTextSearch])

  return (
    <div className="flex-1 flex flex-col">
      <header className="mt-20 mb-10 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Binoculars size={32} weight="bold" className="text-green-100" />{' '}
          <h1 className="text-2xl font-bold">Explorar</h1>
        </div>
        <div className="flex items-center bg-transparent border border-gray-500 w-96 px-5 py-3 rounded group transition-colors duration-200 focus-within:border-green-200">
          <input
            type="text"
            id="searchBookOrAuthor"
            className="bg-transparent outline-none flex-1 caret-green-200 caret-
            placeholder:text-gray-400"
            placeholder="Buscar livro ou autor"
            {...register('search')}
          />
          <MagnifyingGlass
            size={20}
            className="text-gray-500 transition-colors duration-200 group-focus-within:text-green-200"
          />
        </div>
      </header>
      {filteredBooks.length === 0 && categories.length === 0 ? (
        <>
          <LoadingTags />
          <LoadingBooks />
        </>
      ) : (
        <>
          <section className="flex gap-3 mb-10 flex-wrap">
            {categories.map((category) => (
              <ButtonFilter
                key={category.id}
                nameButtonFilter={category.name}
                selected={category.id === tags}
                onClick={() => handleSelectTag(category.id)}
              />
            ))}
          </section>
          <section className="flex-1 flex flex-wrap items-center justify-center gap-5">
            {filteredBooks.length === 0 ? (
              <div className=" flex flex-col items-center justify-center mt-8">
                <h1 className="text-3xl font-bold">
                  Nenhum resultado encontrado
                </h1>
                <Books size={64} weight="fill" className="text-green-100" />
              </div>
            ) : (
              filteredBooks.map((book) => (
                <Dialog key={book.id}>
                  <DialogTrigger asChild>
                    <div className="w-auto max-w-[370px]">
                      <CardBookPopular
                        bookInformation={book}
                        variantImage="explorer"
                        variant="explorer"
                      />
                    </div>
                  </DialogTrigger>

                  <BookHighlighted bookHighlighted={book} />
                </Dialog>
              ))
            )}
          </section>
        </>
      )}
    </div>
  )
}
