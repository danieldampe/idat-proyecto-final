import { create } from 'zustand'
import type { Product, ProductInCart } from '../types'
import { useProducts } from './useProducts'
import { persist } from 'zustand/middleware'

interface CartState {
  cart: ProductInCart[]
  getSubtotal: () => Product['price']
  getQuantity: () => number
  getProductFromCart: (productId: Product['id']) => {
    product: ProductInCart
    index: number
  } | {
    product: null
    index: -1
  }
  addProductToCart: (productId: Product['id']) => void
  removeProductFromCart: (productId: Product['id']) => void
  increaseQuantity: ({ productId, increase }: {
    productId: ProductInCart['id']
    increase?: ProductInCart['quantity']
  }) => void
  decreaseQuantity: ({ productId, decrease }: {
    productId: ProductInCart['id']
    decrease?: ProductInCart['quantity']
  }) => void
  clearCart: () => void
}

const { getProductById } = useProducts()

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      getSubtotal: () => get().cart.reduce((acc, { quantity, price }) => acc + (quantity * price), 0),
      getQuantity: () => get().cart.reduce((acc, { quantity }) => acc + quantity, 0),
      getProductFromCart: productId => {
        const productInCartIndex = get().cart.findIndex(product => product.id === productId)
        if (productInCartIndex !== -1) {
          return {
            product: { ...get().cart[productInCartIndex] },
            index: productInCartIndex
          }
        }
        return { product: null, index: productInCartIndex }
      },
      addProductToCart: productId => set(state => {
        const productToAdd = getProductById(productId)
        const isProductInCart = get().getProductFromCart(productId).index !== -1
        if (!isProductInCart && productToAdd !== null) {
          return {
            cart: [
              ...state.cart,
              {
                ...productToAdd,
                quantity: 1
              }
            ]
          }
        }
        return { cart: state.cart }
      }),
      removeProductFromCart: productId => set(state => {
        const { product: productToRemove } = get().getProductFromCart(productId)
        if (productToRemove !== null) {
          return {
            cart: state.cart.filter(product => product.id !== productToRemove.id)
          }
        }
        return { cart: state.cart }
      }),
      increaseQuantity: ({ productId, increase = 1 }) => set(state => {
        const { product, index } = get().getProductFromCart(productId)
        if (product !== null) {
          const newCart = structuredClone(state.cart)
          newCart[index].quantity += increase
          return { cart: newCart }
        }
        return { cart: state.cart }
      }),
      decreaseQuantity: ({ productId, decrease = 1 }) => set(state => {
        const { product, index } = get().getProductFromCart(productId)
        if (product !== null) {
          const newCart = structuredClone(state.cart)
          newCart[index].quantity -= decrease
          return { cart: newCart }
        }
        return { cart: state.cart }
      }),
      clearCart: () => set({ cart: [] })
    }),
    {
      name: 'cart-storage'
    }
  )
)
