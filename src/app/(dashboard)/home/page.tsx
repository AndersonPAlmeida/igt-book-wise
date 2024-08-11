import { ChartLineUp } from '@phosphor-icons/react'
import Image from 'next/image'

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
              <li className="flex items-center">
                <ChartLineUp size={24} />
                Início
              </li>
              <li>Explorar</li>
              <li>Perfil</li>
            </ul>
          </div>
          <div>Perfil e botão de sair/ logar</div>
        </aside>
      </div>
      <div>Livros</div>
    </div>
  )
}
