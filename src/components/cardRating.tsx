import Image from 'next/image'
import { Rating } from './Rating'

export function CardRating() {
  return (
    <div className="flex flex-col gap-5 bg-gray-700 rounded-lg p-6">
      <section className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 relative">
            <Image
              src="/book/domain-driven-design.png"
              fill={true}
              alt="foto do perfil do avaliador"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold">Brandon Botosh</span>
            <span className="text-gray-400">Há 2 dias</span>
          </div>
        </div>
        <div>
          <Rating classification={4} />
        </div>
      </section>
      <section>
        <p className="text-gray-300">
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
          eget nec vitae sit vulputate eget
        </p>
      </section>
    </div>
  )
}
