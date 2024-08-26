'use client'
import { ButtonFilter } from '@/components/buttonFilter'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { CardBookPopular } from '@/components/cardBookPopular'
import { useLibrary } from '@/data/hooks/useLibrary'

export default function Explore() {
  const { filteredBooks, categories, tags, tagSelected, sumRating } =
    useLibrary()

  function handleSelectTag(tag: string) {
    tagSelected(tag)
  }

  return (
    <div className="flex-1">
      <header className="mt-20 mb-10 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Binoculars size={32} weight="bold" className="text-green-100" />{' '}
          <h1 className="text-2xl font-bold">Explorar</h1>
        </div>
        <div className="flex items-center bg-transparent border border-gray-500 w-96 px-5 py-3 rounded group transition-colors duration-200 focus-within:border-green-200">
          <input
            type="text"
            name="search of book or author"
            id="searchBookOrAuthor"
            className="bg-transparent outline-none flex-1 caret-green-200 caret-
            placeholder:text-gray-400"
            placeholder="Buscar livro ou autor"
          />
          <MagnifyingGlass
            size={20}
            className="text-gray-500 transition-colors duration-200 group-focus-within:text-green-200"
          />
        </div>
      </header>
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
      <section className=" flex gap-5 flex-wrap items-center justify-evenly">
        {filteredBooks.map((book) => (
          <div key={book.id} className="w-auto max-w-[370px]">
            <CardBookPopular
              imageSrc={`${book.cover_url}`}
              author={book.author}
              title={book.name}
              classification={sumRating(book.ratings)}
              variantImage="explorer"
              variant="explorer"
            />
          </div>
        ))}
      </section>
    </div>
  )
}
