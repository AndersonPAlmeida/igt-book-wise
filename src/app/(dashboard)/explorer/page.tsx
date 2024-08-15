import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

export default function Explore() {
  return (
    <div className="flex-grow">
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
    </div>
  )
}
