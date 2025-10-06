import { Nav } from './components/Nav'
import { Route, Switch, useLocation } from 'wouter'
import { Shop } from './pages/Shop'
import { Product } from './pages/Product'
import { useEffect } from 'react'

const App: React.FC = () => {
  const [pathname] = useLocation()

  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [pathname])

  return (
    <>
      <Nav />
      <Switch>
        <Route path='/' component={Shop} />
        <Route path='/products/:id' component={Product} />
        <Route>404: No such page!</Route>
      </Switch>
    </>
  )
}

export default App
