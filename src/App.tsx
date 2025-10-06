import { Nav } from './components/Nav'
import { Shop } from './pages/Shop'
import { Product } from './pages/Product'
import { Routes, Route } from 'react-router'
import { ScrollToTop } from './components/ScrollToTop'

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
