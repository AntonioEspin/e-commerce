/* eslint-disable react/prop-types */
import {XMarkIcon} from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { shoppingContext } from '../../Context'

const OrderCard = ({id ,images, title, price, showMarkIcon}) => {
  const {handleDeleteProducts} = useContext(shoppingContext)
  return (
    <div className='flex justify-between items-center px-6 mb-6 overflow-x-hidden text-ellipsis whitespace-nowrap'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={images} alt={title} />
        </figure>
        <p className="text-sm font-light">{title.substring(0,20)}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className="text-lg font-medium">${price}</p>
        {
          showMarkIcon &&
          <XMarkIcon onClick={()=>handleDeleteProducts(id)} className='h-6 w-6 text-black cursor-pointer'/>
        }
      </div>
    </div>
  )
}

export {OrderCard}