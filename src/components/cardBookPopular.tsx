import Image from 'next/image'

interface CardBookPopularProps {
  imageSrc: string
  classification: string
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
    <div className="bg-gray-700 flex items-center gap-5 p-5 rounded h-32 transition duration-700 hover:bg-gray-600">
      <Image
        src={imageSrc}
        width={64}
        height={94}
        alt="capa do livro"
        className="rounded-lg"
      />
      <div className="flex flex-col justify-between  h-full">
        <span>
          <p className="text-base font-bold">{title}</p>
          <p className="text-gray-400">{author}</p>
        </span>
        <span>{classification}</span>
      </div>
    </div>
  )
}
