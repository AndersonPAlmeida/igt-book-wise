import { Star } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

interface RatingProps {
  classification: number
}

export function Rating({ classification }: RatingProps) {
  const filledStars = Array(classification).fill(
    <Star size={16} weight="fill" />,
  )

  const emptyStars = Array(5 - classification).fill(<Star size={16} />)

  const stars = [...filledStars, ...emptyStars]

  return <div className="flex gap-1 text-purple-100">{stars}</div>
}
