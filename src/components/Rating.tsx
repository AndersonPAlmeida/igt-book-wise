import { Star } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

interface RatingProps {
  classification: number
}

export function RatingDisplay({ classification }: RatingProps) {
  const filledStars = Array.from({ length: classification }).map((_, index) => (
    <Star key={`filled-${index}`} size={16} weight="fill" />
  ))

  const emptyStars = Array.from({ length: 5 - classification }).map(
    (_, index) => <Star key={`empty-${index}`} size={16} />,
  )

  const stars = [...filledStars, ...emptyStars]

  return <div className="flex gap-1 text-purple-100">{stars}</div>
}
