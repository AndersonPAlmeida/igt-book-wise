import { BookmarkSimple, BookOpen } from '@phosphor-icons/react/dist/ssr'
import { ImageCover } from './avatarCoverBook'
import { Rating } from './Rating'
import { Separator } from './ui/separator'
import { Book } from '@/data/models/Book'
import { useLibrary } from '@/data/hooks/useLibrary'
import { CardRating } from './cardRating'

interface BookHighlightedProps {
  bookHighlighted: Book
}
export function BookHighlighted({ bookHighlighted }: BookHighlightedProps) {
  const { sumRating } = useLibrary()

  return (
    <div className="space-y-10">
      <div className="rounded-xl bg-gray-700 px-8 py-6 h-min w-full">
        {/* Informações do livro selecionado */}
        <section className="flex gap-8">
          <ImageCover
            imageSrc={bookHighlighted.cover_url}
            variant="bookHighlight"
          />
          <div className="flex flex-col justify-between h-[242px] flex-1">
            <span>
              <p className="text-base font-bold ">{bookHighlighted.name}</p>
              <p className="text-gray-400">{bookHighlighted.author}</p>
            </span>
            <span>
              <Rating classification={sumRating(bookHighlighted.ratings)} />
              <span>{`${bookHighlighted.ratings.length} avaliações`}</span>
            </span>
          </div>
        </section>
        <Separator className="my-4 bg-gray-600" />
        <section className="flex gap-14 items-center">
          <div className="flex gap-4 items-center">
            <BookmarkSimple size={24} className="text-green-100" />
            <div className="flex flex-col">
              <span>Categoria</span>
              <span className="text-base font-bold">
                {bookHighlighted.categories
                  .map((category) => category.category.name)
                  .join(', ')}
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <BookOpen size={24} className="text-green-100" />
            <div className="flex flex-col">
              <span>Páginas</span>
              <span className="text-base font-bold">
                {bookHighlighted.total_pages}
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="space-y-3">
        <section className="flex justify-between">
          <span className="text-gray-200">Avaliações</span>
          <span>
            <button className="text-base text-purple-100 font-bold">
              Avaliar
            </button>
          </span>
        </section>
        <CardRating />
        <CardRating />
        <CardRating />
      </div>
    </div>
  )
}
