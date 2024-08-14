import Image from 'next/image'
import { Profile } from './profile'

interface CardLatestUpdatesProps {
  imageBookSrc: string
  imageProfileSrc: string
  classification: string
  title: string
  author: string
  description: string
  profileAuthor: string
  timeInterval: string
}

export function CardLatestUpdates({
  imageProfileSrc,
  classification,
  imageBookSrc,
  title,
  author,
  description,
  profileAuthor,
  timeInterval,
}: CardLatestUpdatesProps) {
  return (
    <div className="bg-gray-600 flex flex-col gap-8 p-5 rounded h-max max-w-xl transition duration-700 hover:bg-gray-500">
      <section className="flex justify-between items-start">
        <div className="flex gap-4">
          <Profile imageSrc={imageProfileSrc} />
          <div className="flex flex-col justify-between">
            <span className="text-base font-bold">{profileAuthor}</span>
            <span className="text-gray-400">{timeInterval}</span>
          </div>
        </div>
        <div>{classification}</div>
      </section>
      <section className="flex gap-5">
        <Image
          src={imageBookSrc}
          width={108}
          height={152}
          alt="capa do livro"
          className="rounded-md"
        />
        <div>
          <h2 className="text-base font-bold">{title}</h2>
          <span className="text-gray-400">{author}</span>
          <p className="text-gray-300">{description}</p>
        </div>
      </section>
    </div>
  )
}
