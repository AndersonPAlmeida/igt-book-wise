import { CardBookPopular } from '@/components/cardBookPopular'
import {
  ChartLineUp,
  Binoculars,
  User,
  CaretRight,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full min-h-screen flex">
      <div className="p-5 place">
        <aside
          className="
            bg-book-wise-aside h-full w-60 rounded-xl
            flex flex-col justify-between items-center
            px-12 py-8
        "
        >
          <div className="flex flex-col justify-between items-center gap-16">
            <Image
              src={'/icon/LogoComplete.svg'}
              width={232}
              height={58}
              alt={'Logo completa'}
            />
            <ul>
              <li className="flex gap-3 items-center">
                <ChartLineUp size={24} /> Início
              </li>
              <li className="flex gap-3 items-center my-6">
                <Binoculars size={24} />
                Explorar
              </li>
              <li className="flex gap-3 items-center">
                <User size={24} />
                Perfil
              </li>
            </ul>
          </div>
          <div>Perfil e botão de sair/ logar</div>
        </aside>
      </div>
      <div className="flex-grow">
        <header className="mt-20 mb-10 first-letter:flex gap-3 items-center">
          <ChartLineUp size={32} weight="bold" className="text-green-100" />{' '}
          <h1 className="text-2xl font-bold">Início</h1>
        </header>
        <main className="flex-grow flex gap-3 pr-4 lg:gap-16 ">
          <section className="flex-grow">
            <p>Avaliações mais recentes</p>
          </section>
          {/* <section className="w-80 max-lg:w-72 max-lg:hidden"> usar quando o código estiver pronto */}
          <section className="w-80 max-lg:w-72">
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
                  classification="5"
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
