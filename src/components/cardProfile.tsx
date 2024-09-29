import Image from 'next/image'
import { RatingDisplay } from './Rating'
import { Rating } from '@/data/models/Rating'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface CardProfileProps {
  profileView: Rating
}

export function CardProfile({ profileView }: CardProfileProps) {
  return (
    <div>
      <span className="text-gray-200">
        {formatDistanceToNow(profileView.created_at, {
          locale: ptBR,
          addSuffix: true,
        }).replace(/^./, (str) => str.toUpperCase())}
      </span>
      <div className="mt-2 bg-gray-700 rounded-lg p-6 flex flex-col gap-6 border-2 border-transparent hover:border-gray-500">
        <section className="flex gap-6 h-32">
          <figure className="rounded w-24 h-full relative">
            <Image
              src={profileView.book.cover_url}
              fill={true}
              alt={`Nome do livro avaliado ${profileView.book.name}`}
            />
          </figure>
          <div className="flex flex-col justify-between h-full flex-1">
            <span>
              <p className="text-base font-bold ">{profileView.book.name}</p>
              <p className="text-gray-400">{profileView.book.author}</p>
            </span>
            <span>
              <RatingDisplay classification={profileView.rate} />
            </span>
          </div>
        </section>
        <p className="text-gray-300">{profileView.description}</p>
      </div>
    </div>
  )
}
