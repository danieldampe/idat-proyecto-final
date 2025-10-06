import type { Product } from '../types'
import { ProductCard } from './ProductCard'

interface ProductsGridI {
  id?: string
  gallery?: boolean
  products: Product[]
}

export const ProductsGrid: React.FC<ProductsGridI> = ({ id, products, gallery }) => {
  return (
    <section id={id} className='px-4 bg-white'>
      <div className={`container grid grid-cols-1 md:grid-cols-2 gap-6 ${gallery === true ? 'md:[&>*]:last:col-span-2 md:[&>*]:last:[&_.img-container]:h-[275px] lg:[&>*]:last:[&_.img-container]:h-[450px]' : 'md:[&_>_*_.img-container]:aspect-square lg:grid-cols-3'}`}>
        {products.map(product => (
          <ProductCard
            square={gallery !== true}
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  )
}
