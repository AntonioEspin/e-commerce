import {XMarkIcon} from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { shoppingContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
  const {openProductDetails, handleCloseProductDetails, productToShow} = useContext(shoppingContext)

  return (
    <aside className={`${openProductDetails ? 'flex': 'hidden'} producto-detail flex-col bg-white border border-black rounded fixed right-0 w-[360px] z-10`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <XMarkIcon className='w-6 h-6 cursor-pointer' onClick={handleCloseProductDetails} />
      </div>
      <figure className='px-6'>
        <img 
          className='w-ful h-full rounded-lg'
          src={productToShow.images ? productToShow.images[0]: ''}
          alt={productToShow.title} 
        />
      </figure>
      <div className='flex flex-col p-6'>
        <p className='font-medium text-2xl mb-4'>${productToShow.price}</p>
        <p className='font-medium text-md mb-2'>{productToShow.title}</p>
        <p className='font-light text-sm'>{productToShow.description}</p>
      </div>
    </aside>
  )
}

export {ProductDetail}