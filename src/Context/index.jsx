/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

const shoppingContext = createContext()

const ShoppingContextProvider = ({children}) => {

  // contador del carrito
  const [count, setCount] = useState(0)

  // Obtener valores de card para product detail
  const [productToShow, setProductToShow] = useState({})

  // Añadir productor a cart
  const [productToCart, setProductToCart] =useState([])

  // Añadir order
  const [order, setOrder] = useState([])

  // Search values Input
  const [searchValue, setSearchValue] = useState('')

  // manejador del product datail
  const [openProductDetails, setOpenProductDetails] = useState(false)
  const handleOpenProductDetails = () => setOpenProductDetails(true)
  const handleCloseProductDetails = () => setOpenProductDetails(false)

  // manejador del checkout side menu
  const [openCheckoutSideMenu, setOpenCheckoutSideMenu] = useState(false)
  const handleOpenCheckoutSideMenu = () => setOpenCheckoutSideMenu(true)
  const handleCloseCheckoutSideMenu = () => setOpenCheckoutSideMenu(false)

// Eliminar productos de sideCart

const handleDeleteProducts = (idProduct) => {
  const newProducts = [...productToCart]
  const updatedProducts = newProducts.filter((product) => product.id !== idProduct)

  setProductToCart(updatedProducts)
}

// Agregar todos los productos seleccionados a Order

const handleOrder = (products, totalSum) => {
  const allOrder = {
    date: '01.01.2023',
    products: products,
    total: products.length,
    value: totalSum(products)
  }

  setOrder([...order, allOrder])
  setProductToCart([])
  handleCloseCheckoutSideMenu()
  setCount(0)
}

// get products
const [items, setItems] = useState([])

  useEffect(()=>{
    const getFetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products')
        const data = await response.json()
        setItems(data)
      } catch(e) {
        console.log(e)
      }
    }
    getFetchData()
  },[])

  // products Filtered
  const [filteredProducts, setFilteredProducts] = useState([])

  const getFilteredProducts = (product) => {
      let newProducts = [...items]
      let filteredProducts = newProducts.filter(item => item.title.toLowerCase().includes(product.toLowerCase()))
      setFilteredProducts(filteredProducts)
  }

// filtered by category
  const filteredByCategory = (category) => {
    const categoryProduct = items.filter(item => item.category.name === category)
    setFilteredProducts(categoryProduct)
  }

  return (
    <shoppingContext.Provider value={{
      count,
      setCount,
      openProductDetails,
      handleOpenProductDetails,
      handleCloseProductDetails,
      setProductToShow,
      productToShow,
      productToCart,
      setProductToCart,
      openCheckoutSideMenu,
      handleOpenCheckoutSideMenu,
      handleCloseCheckoutSideMenu,
      handleDeleteProducts,
      order,
      setOrder,
      handleOrder,
      items,
      setItems,
      searchValue,
      setSearchValue,
      getFilteredProducts,
      filteredProducts,
      filteredByCategory
    }}>
      {children}
    </shoppingContext.Provider>
  )
}

export {shoppingContext, ShoppingContextProvider}