import { useEffect, useState } from "react"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"

function Home() {

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

  return (
    <>
      <section className='grid grid-cols-4 gap-4'>
        {items?.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </section>
      <ProductDetail />
    </>
  )
}

export {Home}