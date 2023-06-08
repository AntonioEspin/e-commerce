import { useContext } from "react"
import { shoppingContext } from "../../Context"

/* eslint-disable react/prop-types */
const Card = ({category, images, price, title}) => {

  const {count, setCount} = useContext(shoppingContext)

  return (
    <div className='bg-white w-56 h-60 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis'>
      <figure className=' relative w-full h-4/5 mb-2'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={images[0]} alt={title} />
        <span
          className='absolute top-0 right-0 w-6 h-6 rounded-full bg-white flex justify-center items-center m-2 p-1 cursor-pointer'
          onClick={()=>setCount(count + 1)}
        >+</span>
      </figure>
      <p className='flex justify-between items-center'>
        <span className=' text-sm font-light'>{title.substring(0,20)}</span>
        <span className='text-lg font-bold'>${price}</span>
      </p>
    </div>
  )
}

export {Card}