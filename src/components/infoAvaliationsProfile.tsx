import { ElementType } from 'react'

interface InfoAvaliationsProfileProps {
  icon: ElementType
  informationPrimary: string | number | string[]
  informationSecondary: string
}

export function InfoAvaliationsProfile({
  icon: Icon,
  informationPrimary,
  informationSecondary,
}: InfoAvaliationsProfileProps) {
  return (
    <div className="flex gap-5 h-12 items-center">
      <Icon className="size-8 text-green-100" />
      <div className="flex flex-col h-full justify-between">
        <span className="text-base leading-5 font-bold">
          {informationPrimary}
        </span>
        <span className="text-gray-300">{informationSecondary}</span>
      </div>
    </div>
  )
}
