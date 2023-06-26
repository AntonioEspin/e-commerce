import { useContext} from "react"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { shoppingContext } from "../../Context"

function Home() {

  const {items,filteredProducts, searchValue, setSearchValue, getFilteredProducts} = useContext(shoppingContext)

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value)
    getFilteredProducts(event.target.value)
  }

  const rendeProducts = () => {
    if (searchValue?.length > 0) {
      if (filteredProducts?.length > 0) {
       return (
          <section className='grid grid-cols-4 gap-4'>
            {filteredProducts?.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </section>
        )
      } else {
        return (
          <div>No encontramos resultados</div>
        )
      }      
    }else {
      return (
        <section className='grid grid-cols-4 gap-4'>
          {items?.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </section>
      )
    }
  }

  return (
    <>
      <div className='flex items-center justify-center relative w-80 font-bold mb-4'>
        <h1>Exclusive Products</h1>
      </div>
      <input
        type="text" 
        placeholder="Search product" 
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        value={searchValue}
        onChange={handleSearchValue}/>
      {rendeProducts()}
      <ProductDetail />
    </>
  )
}

export {Home}