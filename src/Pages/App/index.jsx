import { useRoutes, BrowserRouter } from 'react-router-dom'
import {Home} from '../Home'
import {MyAccount} from '../MyAccount'
import {MyOrder} from '../MyOrder'
import {MyOrders} from '../MyOrders'
import {NotFound} from '../NotFound'
import {SingIn} from '../SingIn'
import './App.css'

const AppRoutes = () => {
  let routes = [
    {path:'/', element: <Home />},
    {path:'/my-account', element: <MyAccount />},
    {path:'/my-order', element: <MyOrder />},
    {path:'/my-orders', element: <MyOrders />},
    {path:'/sign-in', element: <SingIn />},
    {path:'/*', element: <NotFound />},
  ]

  const allRoutesApp = useRoutes(routes)
  return allRoutesApp
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
