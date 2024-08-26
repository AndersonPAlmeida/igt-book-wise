import { CardBookPopular } from '@/components/cardBookPopular'
import { CardLatestUpdates } from '@/components/cardLatestUpdates'
import { ChartLineUp, CaretRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex-grow pl-10">
      <header className="mt-20 mb-10 flex gap-3 items-center">
        <ChartLineUp size={32} weight="bold" className="text-green-100" />{' '}
        <h1 className="text-2xl font-bold">Início</h1>
      </header>

      <main className="flex-1 flex gap-3 justify-between">
        <section className="flex-1 max-w-[608px]">
          <p>Avaliações mais recentes</p>
          <div className="flex gap-4 flex-wrap mt-4">
            {Array.from({ length: 2 }, (_, index) => (
              <div key={index} className="min-w-[324px]">
                <CardLatestUpdates
                  author="Robert C.Martin"
                  classification="5"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate consequatur ab expedita reiciendis pariatur repudiandae facere libero aut sit, vero labore consequuntur sequi quos praesentium officia cum. Vero, dolor."
                  imageBookSrc="/book/arquitetura-limpa.png"
                  imageProfileSrc="/book/arquitetura-limpa.png"
                  profileAuthor="Robert C.Martin"
                  timeInterval="há 2 dias"
                  title="Arquitetura Limpa"
                />
              </div>
            ))}
          </div>
        </section>
        <section className="w-80 max-lg:hidden">
          <div className="flex justify-between items-center mb-4">
            <p>Livros populares</p>
            <Link
              href={'/'}
              className="flex items-center gap-2 text-purple-100"
            >
              Ver todos <CaretRight size={16} weight="bold" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {Array.from({ length: 5 }, (_, index) => (
              <CardBookPopular
                key={index}
                imageSrc="/book/arquitetura-limpa.png"
                author="Robert C.Martin"
                title="Arquitetura Limpa"
                classification={5}
                variantImage="home"
                variant="home"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
