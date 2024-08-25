import Image from 'next/image'
import { Rating } from './Rating'

interface CardBookPopularProps {
  imageSrc: string
  classification: number
  title: string
  author: string
}

export function CardBookPopular({
  imageSrc,
  classification,
  title,
  author,
}: CardBookPopularProps) {
  return (
    <div className="bg-gray-700 flex items-center gap-5 p-5 rounded  w-full transition duration-700 cursor-pointer hover:bg-gray-600">
      <Image
        src={imageSrc}
        width={108}
        height={152}
        alt="capa do livro"
        className="rounded-lg"
      />
      <div className="flex flex-col justify-between h-36">
        <span>
          <p className="text-base font-bold">{title}</p>
          <p className="text-gray-400">{author}</p>
        </span>
        <span>
          <Rating classification={classification} />
        </span>
      </div>
    </div>
  )
}

// w 318 h 184 => explorer
// w 324 h 130 => books popular
