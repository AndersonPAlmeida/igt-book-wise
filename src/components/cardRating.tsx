import Image from 'next/image'
import { RatingDisplay } from './Rating'
import { Rating } from '@/data/models/Rating'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface CardRatingProps {
  informationRating: Rating
}

export function CardRating({ informationRating }: CardRatingProps) {
  return (
    <div className="flex flex-col gap-5 bg-gray-700 rounded-lg p-6">
      <section className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 relative">
            <Image
              src={informationRating.user.avatar_url ?? ''}
              fill={true}
              alt="foto do perfil do avaliador"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold">
              {informationRating.user.name}
            </span>
            <span className="text-gray-400">
              {formatDistanceToNow(informationRating.created_at, {
                locale: ptBR,
                addSuffix: true,
              }).replace(/^./, (str) => str.toUpperCase())}
            </span>
          </div>
        </div>
        <div>
          <RatingDisplay classification={informationRating.rate} />
        </div>
      </section>
      <section>
        <p className="text-gray-300">{informationRating.description}</p>
      </section>
    </div>
  )
}
