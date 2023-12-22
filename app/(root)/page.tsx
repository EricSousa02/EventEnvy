import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection'
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button'
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain ">
        <div className='bg-primary-50 bg-hero-bg bg-cover py-5 md:py-10 dark:bg-dark-2'>
          <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="h1-bold dark:text-light-1">
                Celebre seus <span className="bg-gradient-to-r from-primary-500 to-primary-secondary text-transparent bg-clip-text">Eventos</span> em nossa plataforma.
              </h1>

              <p className="p-regular-20 md:p-regular-24 dark:text-light-1">Desperte a magia dos momentos especiais! Na nossa plataforma, transformamos seus eventos em experiências inesquecíveis.</p>
              <Button size="lg" asChild className="button w-full sm:w-fit">
                <Link href="#events">
                  Explore Agora
                </Link>
              </Button>
            </div>

            <Image
              src="/assets/images/hero.png"
              alt="hero"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
          </div>
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12 dark:bg-dark-1">
        <h2 className="h2-bold dark:text-light-1">Diversão em<br /> Milhares de Eventos</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="Nenhum evento encontrado"
          emptyStateSubtext="Volte mais tarde"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  )
}
