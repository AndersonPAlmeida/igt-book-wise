'use client'
import { ButtonFilter } from '@/components/buttonFilter'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { CardBookPopular } from '@/components/cardBookPopular'
import { useLibrary } from '@/data/hooks/useLibrary'

export default function Explore() {
  const { categories } = useLibrary()

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
            selected={false}
          />
        ))}
        {/* {Array.from({ length: 8 }, (_, index) => (
          <ButtonFilter
            key={index}
            nameButtonFilter="Tudo"
            selected={index === 0}
          />
        ))} */}
      </section>
      <section className=" flex gap-5 flex-wrap items-center justify-evenly">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="min-w-[300px]">
            <CardBookPopular
              imageSrc="/book/arquitetura-limpa.png"
              author="Robert C.Martin"
              title="Arquitetura Limpa"
              classification="5"
            />
          </div>
        ))}
      </section>
    </div>
  )
}
