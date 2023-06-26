import {XMarkIcon} from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { shoppingContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalProduct } from '../../utils'
import { Link } from 'react-router-dom'
// import './styles.css'

const CheckoutSideMenu = () => {
  const {openCheckoutSideMenu, handleCloseCheckoutSideMenu, productToCart, handleOrder} = useContext(shoppingContext)

  return (
    <aside className={`${openCheckoutSideMenu ? 'flex': 'hidden'} producto-detail flex-col bg-white border border-black rounded fixed right-0 w-[360px] z-10 h-[calc(100vh-68px)]`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <XMarkIcon className='w-6 h-6 cursor-pointer' onClick={handleCloseCheckoutSideMenu} />
      </div>
      <div className='overflow-y-scroll flex-1'>
        {
          productToCart?.map(product => (
            <OrderCard key={product.id} {...product} />
          ))
        }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className=' font-light'>Total:</span>
          <span className=' font-medium text-2xl'>${totalProduct(productToCart)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className=' bg-black text-white w-full py-6 rounded-lg' onClick={()=> handleOrder(productToCart, totalProduct)}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export {CheckoutSideMenu}