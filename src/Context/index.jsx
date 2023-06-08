/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const shoppingContext = createContext()

const ShoppingContextProvider = ({children}) => {

  const [count, setCount] = useState(0)

  return (
    <shoppingContext.Provider value={{
      count,
      setCount,
    }}>
      {children}
    </shoppingContext.Provider>
  )
}

export {shoppingContext, ShoppingContextProvider}