import { Rating } from '../models/Rating'
import { useMemo } from 'react'

export const useSumRating = (evaluations: Rating[]) => {
  const sumRating = useMemo(() => {
    return Math.floor(
      evaluations.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rate
      }, 0) / (evaluations.length || 1),
    )
  }, [evaluations])

  return sumRating
}
