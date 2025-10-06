import { useCart } from '../hooks/useCart'
import type { ProductInCart } from '../types'

type ControllerT = Pick<ProductInCart, 'id' | 'quantity' >

export const Controller: React.FC<ControllerT> = ({ id, quantity }) => {
  const { removeProductFromCart, increaseQuantity, decreaseQuantity } = useCart()
  const theresOnlyOne = quantity === 1
  const handlerClick = (): void => {
    if (theresOnlyOne) {
      removeProductFromCart(id)
    } else {
      decreaseQuantity({ productId: id })
    }
  }

  return (
    <div className='space-y-0.5'>
      <div className='flex items-center gap-x-0.5 [&>*]:px-1 [&>*]:border-2 [&>*]:border-darkblue [&_i]:translate-y-0.5'>
        <button onClick={handlerClick}>
          {theresOnlyOne
            ? <i className='bx bx-trash-x' />
            : <i className='bx bx-minus' />}
        </button>
        <p className='w-[3ch] text-center'>{quantity}</p>
        <button onClick={() => increaseQuantity({ productId: id })}>
          <i className='bx bx-plus' />
        </button>
      </div>
      <button disabled={theresOnlyOne} onClick={() => removeProductFromCart(id)} className='w-full px-1 border-2 border-darkblue disabled:opacity-75'>
        <i className='bx bx-trash-x translate-y-0.5' />
        Remove
      </button>
    </div>
  )
}
