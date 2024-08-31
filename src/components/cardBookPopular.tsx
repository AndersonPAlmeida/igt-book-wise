import { RatingDisplay } from './Rating'
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { ImageCover } from './avatarCoverBook'

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
  imageSrc: string
  classification: number
  title: string
  author: string
  variantImage: 'explorer' | 'home'
}

export function CardBookPopular({
  imageSrc,
  classification,
  title,
  author,
  variantImage,
  variant,
}: CardBookPopularProps) {
  return (
    <div className={twMerge(CardBookVariants({ variant }))}>
      <ImageCover imageSrc={imageSrc} variant={variantImage} />
      <div className="flex flex-col justify-between h-full flex-1">
        <span>
          <p className="text-base font-bold ">{title}</p>
          <p className="text-gray-400">{author}</p>
        </span>
        <span>
          <RatingDisplay classification={classification} />
        </span>
      </div>
    </div>
  )
}
