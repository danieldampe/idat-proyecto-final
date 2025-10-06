import type { Product } from '../types'
import { useCart } from '../hooks/useCart'
import { Link } from 'react-router'

interface ProductCardI extends Product {
  square?: boolean
}

export const ProductCard: React.FC<ProductCardI> = ({ id, title, images, description, price, square }) => {
  const { addProductToCart, getProductFromCart } = useCart()
  const isProductInCart = getProductFromCart(id).index !== -1
  const handlerClick = (): void => addProductToCart(id)

  return (
    <article className='space-y-2 hover:[&_.price]:opacity-0 hover:[&_.shop-now]:opacity-100 hover:[&_.show]:opacity-100'>
      <Link className={`img-container relative block ${square === true ? 'aspect-video md:aspect-square' : ''}`} to={`/products/${id}`}>
        <img src={images[0]} alt={title} />
        <img className='show absolute top-0 left-0 opacity-0 transition-opacity' src={images[1]} alt={title} />
      </Link>
      <footer className='text-darkblue'>
        <div className='flex justify-between items-start gap-x-12'>
          <p className='text-lg md:text-xl font-semibold tracking-wider uppercase'>{title}</p>
          <div className='relative min-w-max [&>*]:transition-opacity'>
            <p className='price'>{price} US$</p>
            <button disabled={isProductInCart} className='shop-now opacity-0 absolute top-1/2 right-0 -translate-y-1/2 w-max py-1 px-4 bg-darkblue rounded-full text-xs uppercase font-semibold text-white disabled:brightness-50' onClick={handlerClick}>Shop now</button>
          </div>
        </div>
        {description === undefined ? null : <p className='text-sm font-light'>{description}</p>}
      </footer>
    </article>
  )
}
