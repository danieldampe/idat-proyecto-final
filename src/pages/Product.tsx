import { useParams } from 'react-router'
import { useProducts } from '../hooks/useProducts'
import { useEffect, useRef } from 'react'
import { useCart } from '../hooks/useCart'
import { Accordion } from '../components/Accordion'
import { Footer } from '../components/Footer'
import { ProductCard } from '../components/ProductCard'
import { BannerCreatorApp } from '../components/BannerCreatorApp'

export const Product: React.FC = () => {
  const { id: idFromParams } = useParams()
  const { products, getProductById } = useProducts()
  const { increaseQuantity, addProductToCart, getProductFromCart } = useCart()
  const product = getProductById(Number(idFromParams))

  if (product === null) {
    return
  }

  const { id, title, images, price, description } = product
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    document.title = `${title} | Monogram Creative Console`
  })

  const handlerSubmit: React.FormEventHandler = evt => {
    evt.preventDefault()
    const { product: productFromCart } = getProductFromCart(product.id)
    const isProductInCart = productFromCart !== null
    const { current: form } = formRef
    if (form !== null) {
      const { quantity: amountToAdd } = Object.fromEntries(new FormData(form))

      if (isProductInCart) {
        increaseQuantity({ productId: id, increase: Number(amountToAdd) })
      } else {
        addProductToCart(id)
        increaseQuantity({ productId: id, increase: Number(amountToAdd) - 1 })
      }
    }
  }

  return (
    <>
      <main className='mt-20 text-darkblue'>
        <section className='px-5'>
          <div className='relative container md:flex md:items-start md:gap-x-10 md:[&>*]:basis-1/2'>
            <section className='hidden md:block md:sticky top-20'>
              <img src={images[0]} alt={title} />
            </section>
            <section className='space-y-2 md:px-0 lg:space-y-4'>
              <h1 className='text-2xl lg:text-3xl font-semibold tracking-wider uppercase'>{product.title}</h1>
              <div className='md:hidden'>
                <img src={images[0]} alt={title} />
              </div>
              <p className='text-xl lg:text-2xl font-semibold text-darkpink'>{price} US$</p>
              <form ref={formRef} className='flex gap-x-2' onSubmit={handlerSubmit}>
                <div className='w-20 py-1 px-4 rounded-full border-2 border-darkblue'>
                  <input className='w-full text-center' type='number' name='quantity' defaultValue={1} min={0} />
                </div>
                <input
                  className='grow lg:grow-0 py-1 px-6 bg-darkblue rounded-full text-xs uppercase font-semibold tracking-widest text-white cursor-pointer disabled:brightness-50'
                  type='submit'
                  value='Shop now'
                />
              </form>
              <Accordion content={description} />
            </section>
          </div>
        </section>
        <BannerCreatorApp />
        <section className='px-5'>
          <div className='container'>
            <h2 className='text-2xl md:text-3xl mb-4 font-semibold tracking-wider uppercase'>Also recommended</h2>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {products.slice(0, 5).map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
