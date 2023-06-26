import { useContext } from "react"
import { shoppingContext } from "../../Context"
import { OrdersCard } from "../../Components/OrdersCard"
import { Link } from "react-router-dom"

function MyOrders() {
  const {order} = useContext(shoppingContext)
  return (
    <>
      <div className='flex items-center justify-center relative w-80'>
        <h1>My Orders</h1>
      </div>
      {
        order?.map((item, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard totalPrice={item.value} totalProducts={item.total} />
          </Link>
          ))
        }
    </>
  )
}

export {MyOrders}