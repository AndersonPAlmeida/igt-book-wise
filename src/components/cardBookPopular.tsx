import { RatingDisplay } from './Rating'
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { ImageCover } from './avatarCoverBook'
import { Book } from '@/data/models/Book'
import { useSumRating } from '@/data/hooks/useSumRating'

const CardBookVariants = cva(
  'bg-gray-700 flex items-center gap-5 p-5 rounded transition duration-700 cursor-pointer hover:bg-gray-600 w-[324px]',
  {
    variants: {
      variant: {
        explorer: 'h-[184px]',
        home: 'h-[130px]',
      },
    },
    defaultVariants: {
      variant: 'explorer',
    },
  },
)

interface CardBookPopularProps extends VariantProps<typeof CardBookVariants> {
  bookInformation: Book
  variantImage: 'explorer' | 'home'
}

export function CardBookPopular({
  bookInformation,
  variantImage,
  variant,
}: CardBookPopularProps) {
  const sumRating = useSumRating(bookInformation.ratings)

  return (
    <div className={twMerge(CardBookVariants({ variant }))}>
      <ImageCover imageSrc={bookInformation.cover_url} variant={variantImage} />
      <div className="flex flex-col justify-between h-full flex-1">
        <span>
          <p className="text-base font-bold ">{bookInformation.name}</p>
          <p className="text-gray-400">{bookInformation.author}</p>
        </span>
        <span>
          <RatingDisplay classification={sumRating} />
        </span>
      </div>
    </div>
  )
}
