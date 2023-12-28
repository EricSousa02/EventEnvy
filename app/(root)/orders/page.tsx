import Search from '@/components/shared/Search'
import { getOrdersByEvent } from '@/lib/actions/order.actions'
import { formatDateTime, formatPrice } from '@/lib/utils'
import { SearchParamProps } from '@/types'
import { IOrderItem } from '@/lib/database/models/order.model'

const Orders = async ({ searchParams }: SearchParamProps) => {
  const eventId = (searchParams?.eventId as string) || ''
  const searchText = (searchParams?.query as string) || ''

  const orders = await getOrdersByEvent({ eventId, searchString: searchText })

  return (
    <>
      <section className="dark:bg-dark-2 dark:text-light-1 bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left ">Pedidos</h3>
      </section>

      <section className="wrapper mt-8">
        <Search placeholder="Procurar nome do comprador..." />
      </section>

      <section className="wrapper overflow-x-auto">
        <div className="rounded-lg overflow-hidden">
          <table className="w-full border-collapse border-grey-500 dark:text-light-1">
            <thead>
            <tr className="p-medium-14 border-b dark:border-grey-500 text-primary-50 bg-dark-2 dark:text-dark-2 dark:bg-gradient-to-r from-primary-500 to-primary-secondary">
                <th className="min-w-[200px] flex-1 py-3 pr-4 pl-1 text-left">Titulo do Evento</th>
                <th className="min-w-[150px] py-3 text-left">Comprador</th>
                <th className="min-w-[100px] py-3 text-left">Criado</th>
                <th className="min-w-[100px] py-3 text-right pr-1">Valor</th>
              </tr>
            </thead>
            <tbody>
              {orders && orders.length === 0 ? (
                
                <tr className="border-none rounded-lg overflow-hidden">
                  <td colSpan={5} className="py-4 text-center text-gray-500 dark:bg-dark-2 bg-primary-50">
                    Não foram encontrados pedidos.
                  </td>
                </tr>
              ) : (
                <>
                  {orders &&
                    orders.map((row: IOrderItem, index: number) => (
                      <tr
                        key={row._id}
                        className={`p-regular-14 lg:p-regular-16 dark:border-grey-500 ${
                          index !== orders.length - 1 ? 'border-b ' : ''
                        }dark:bg-dark-2 bg-primary-50 rounded-lg `}
                        style={{ boxSizing: 'border-box' }}
                      >
                        <td
                          className="min-w-[200px] flex-1 md:px-1 py-4 md:pr-4"
                          data-label="Titulo do Evento" 
                        >
                          {row.eventTitle}
                        </td>
                        <td className="min-w-[150px] py-4" data-label="Comprador">
                          {row.buyer}
                        </td>
                        <td className="min-w-[100px] py-4" data-label="Criado">
                          {formatDateTime(row.createdAt).dateTime}
                        </td>
                        <td className="min-w-[100px] py-4 md:px-1 text-right" data-label="Valor">
                          {formatPrice(row.totalAmount)}
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Orders
