import { Nav } from './components/Nav'
import { Shop } from './pages/Shop'
import { Product } from './pages/Product'
import { Routes, Route } from 'react-router'

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
