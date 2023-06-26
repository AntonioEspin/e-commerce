import { useContext } from "react"
import { OrderCard } from "../../Components/OrderCard"
import { shoppingContext } from "../../Context"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

function MyOrder() {

  const {order} = useContext(shoppingContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = order?.length -1
  return (
    <>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Orders</h1>
      </div>
      <div className='overflow-y-scroll flex-1'>
        {
          order.length > 0 &&
          order?.[index]?.products.map(product => (
            <OrderCard key={product.id} showMarkIcon = {false} {...product} />
          ))
        }
      </div>
    </>
  )
}

export {MyOrder}