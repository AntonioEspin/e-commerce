/* eslint-disable react/prop-types */
// import {XMarkIcon} from '@heroicons/react/24/outline'

const OrdersCard = ({totalPrice, totalProducts}) => {
  return (
    <div className='flex justify-between items-center mb-6 border border-black rounded-lg w-80 p-4'>
      <div className='flex justify-between w-80'>
        <div className='flex flex-col'>
          <span className='font-light'>01.01.2023</span>
          <span className='font-light'>{totalProducts}</span>
        </div>
        <span className='font-medium text-2xl'>${totalPrice}</span>
      </div>
    </div>
  )
}

export {OrdersCard}