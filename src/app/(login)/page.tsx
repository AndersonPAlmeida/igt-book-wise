import { Button } from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <div className="w-full h-full max-w-[600px] bg-book-wise bg-cover bg-center rounded-xl overflow-hidden max-[860px]:max-w-[860px] max-[860px]:bg-bottom">
        <div className="w-full h-full bg-purple-200 bg-opacity-60 flex justify-center items-center">
          <Image
            src="/icon/LogoComplete.svg"
            width={232}
            height={58}
            alt="Logo completa"
          />
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center flex-col gap-10">
        <div>
          <h1 className="text-2xl font-bold">Boas vindas</h1>
          <p className="text-base">Faça seu login ou acesse como visitante.</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
          <Button Img="/icon/google.svg">Entrar com Google</Button>
          <Button Img="/icon/Github.svg">Entrar com GitHub</Button>
          <Link href="/home">
            <Button Img="/icon/RocketLaunch.svg">Entrar como Visitante</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
