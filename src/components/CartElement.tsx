import type { ProductInCart } from '../types'
import { Controller } from './Controller'

type CartElementT = Pick<ProductInCart, 'id' | 'title' | 'images' | 'quantity' | 'price'>

export const CartElement: React.FC<CartElementT> = ({ id, title, quantity, images, price }) => {
  return (
    <article className='flex justify-between items-center'>
      <div>
        <p className='text-xs font-semibold tracking-wider uppercase'>
          {title} <span className='text-darkpink'>({price} US$)</span>
        </p>
        <div className='w-24 aspect-square border-2 border-darkblue'>
          <img src={images[0]} alt={title} />
        </div>
      </div>
      <Controller id={id} quantity={quantity} />
    </article>
  )
}
