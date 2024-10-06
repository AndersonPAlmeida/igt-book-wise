'use client'
import { BookHighlighted } from '@/components/bookHighlighted'
import { CardBookPopular } from '@/components/cardBookPopular'
// import { CardBookPopular } from '@/components/cardBookPopular'
import { CardLatestUpdates } from '@/components/cardLatestUpdates'
import { LoadingBooks, LoadingReviews } from '@/components/loadings/loadingHome'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { useHome } from '@/data/hooks/useHome'
import { ChartLineUp, CaretRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function Home() {
  const { ratingsRecents, ratingsAvgBook } = useHome()

  return (
    <div className="flex-grow pl-10">
      <header className="mt-20 mb-10 flex gap-3 items-center">
        <ChartLineUp size={32} weight="bold" className="text-green-100" />{' '}
        <h1 className="text-2xl font-bold">Início</h1>
      </header>

      <main className="flex-1 flex gap-3 justify-between">
        {ratingsRecents.length === 0 && ratingsAvgBook.length === 0 ? (
          <>
            <section className="flex-1 max-w-[608px]">
              <LoadingReviews />
            </section>
            <section className="w-80 max-lg:hidden">
              <LoadingBooks />
            </section>
          </>
        ) : (
          <>
            <section className="flex-1 max-w-[608px]">
              <p>Avaliações mais recentes</p>
              <div className="flex gap-4 flex-wrap mt-4">
                {ratingsRecents.map((rating) => (
                  <CardLatestUpdates
                    key={rating.id}
                    ratingInformation={rating}
                  />
                ))}
              </div>
            </section>
            <section className="w-80 max-lg:hidden">
              <div className="flex justify-between items-center mb-4">
                <p>Livros populares</p>
                <Link
                  href={'/explorer'}
                  className="flex items-center gap-2 text-purple-100"
                >
                  Ver todos <CaretRight size={16} weight="bold" />
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                {ratingsAvgBook.map((ratingAvgBook) => (
                  <Dialog key={ratingAvgBook.id}>
                    <DialogTrigger asChild>
                      <div className="w-auto max-w-[370px]">
                        <CardBookPopular
                          bookInformation={ratingAvgBook}
                          variantImage="home"
                          variant="home"
                        />
                      </div>
                    </DialogTrigger>

                    <BookHighlighted bookHighlighted={ratingAvgBook} />
                  </Dialog>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}
