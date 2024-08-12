import Image from 'next/image'

interface ProfileProps {
  imageSrc: string
}
export function Profile({ imageSrc }: ProfileProps) {
  return (
    <Image
      src={imageSrc}
      width={40}
      height={40}
      alt="Foto de perfil"
      className="rounded-full"
    />
  )
}
