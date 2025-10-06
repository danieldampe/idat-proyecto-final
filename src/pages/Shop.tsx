import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { ProductsGrid } from '../components/ProductsGrid'
import { useProducts } from '../hooks/useProducts'

export const Shop: React.FC = () => {
  const { products } = useProducts()

  useEffect(() => {
    document.title = 'Shop | Monogram Consoles and Modules | Monogram Creative Console'
  }, [])

  return (
    <>
      <Hero
        type='HERO'
        title='A Console for Every Workflow'
        lead='Discover the perfect console for yours.'
        url='https://monogramcc.com/static/9a0b554db1990565457610c5f83b3ad7/a464d/shop_cta_xl_896f6b8270.jpg'
      />
      <ProductsGrid
        id='next'
        gallery
        products={products.slice(0, 5)}
      />
      <Hero
        type='BANNER'
        title='Create Your Own Console'
        lead='Add-on to make it perfect.'
        url='https://monogramcc.com/static/fb6b98aa90bbce383e12a09c50936e96/3d304/shop-banner-module.jpg'
      />
      <ProductsGrid
        products={products.slice(5)}
      />
      <Footer />
    </>
  )
}
