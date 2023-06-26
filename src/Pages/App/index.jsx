import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import {Home} from '../Home'
import {MyAccount} from '../MyAccount'
import {MyOrder} from '../MyOrder'
import {MyOrders} from '../MyOrders'
import {NotFound} from '../NotFound'
import {SingIn} from '../SingIn'
import { Navbar } from '../../Components/NavBar'
import { ShoppingContextProvider } from '../../Context'
import './App.css'
import { Layout } from '../../Components/Layout'

const AppRoutes = () => {
  let routes = [
    {path:'/', element: <Home />},
    {path:'/my-account', element: <MyAccount />},
    {path:'/my-order', element: <MyOrder />},
    {path:'/my-orders', element: <MyOrders />},
    {path:'/my-orders/last', element: <MyOrder />},
    {path:'/my-orders/:id', element: <MyOrder />},
    {path:'/sign-in', element: <SingIn />},
    {path:'/*', element: <NotFound />},
  ]

  const allRoutesApp = useRoutes(routes)
  return allRoutesApp
}

function App() {
  return (
    <ShoppingContextProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
          <CheckoutSideMenu showMarkIcon = {true} />
        </Layout>
      </BrowserRouter>
    </ShoppingContextProvider>
  )
}

export default App
