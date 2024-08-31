import Image from 'next/image'
import { Profile } from './profile'
import { Rating } from '@/data/models/Rating'
import { RatingDisplay } from './Rating'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface CardLatestUpdatesProps {
  ratingInformation: Rating
}

export function CardLatestUpdates({
  ratingInformation,
}: CardLatestUpdatesProps) {
  return (
    <div className="w-full bg-gray-600 flex flex-col gap-8 p-5 rounded max-h-72 transition duration-700 hover:bg-gray-500">
      <section className="flex justify-between items-start">
        <div className="flex gap-4">
          <Profile imageSrc={`${ratingInformation.user.avatar_url}`} />
          <div className="flex flex-col justify-between">
            <span className="text-base font-bold">
              {ratingInformation.user.name}
            </span>
            <span className="text-gray-400">
              {formatDistanceToNow(ratingInformation.created_at, {
                locale: ptBR,
                addSuffix: true,
              }).replace(/^./, (str) => str.toUpperCase())}
            </span>
          </div>
        </div>
        <div>
          <RatingDisplay classification={ratingInformation.rate} />
        </div>
      </section>
      <section className="flex gap-5">
        <Image
          src={ratingInformation.book.cover_url}
          width={108}
          height={152}
          alt="capa do livro"
          className="rounded-md max-h-[152px]"
        />
        <div>
          <h2 className="text-base font-bold">{ratingInformation.book.name}</h2>
          <span className="text-gray-400">{ratingInformation.book.author}</span>
          <p className="text-gray-300 max-h-[112px] max-w-full text-ellipsis overflow-hidden">
            {ratingInformation.description}
          </p>
        </div>
      </section>
    </div>
  )
}
