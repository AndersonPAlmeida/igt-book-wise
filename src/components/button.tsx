import Image from 'next/image'

interface ButtonProps {
  Img: string
  children: React.ReactNode
}

export function Button({ Img, children }: ButtonProps) {
  return (
    <button
      className="flex items-center gap-5 bg-gray-600 hover:bg-gray-400 text-white text-lg min-w-96
      font-bold py-5 px-6 rounded-lg transition duration-700 focus:outline-none focus:shadow-outline"
      type="button"
    >
      <Image src={Img} alt="Google" width={32} height={32} />
      {children}
    </button>
  )
}
