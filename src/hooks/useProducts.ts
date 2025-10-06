import type { Product } from '../types'
import productsFromData from '../assets/data.json'

interface ProductsI {
  products: Product[]
  getProductById: (productId: Product['id']) => Product | null
}

export const useProducts = (): ProductsI => {
  const products = productsFromData

  const getProductById: ProductsI['getProductById'] = productId => {
    const product = products.find(product => product.id === productId)
    return product ?? null
  }

  return { products, getProductById }
}
