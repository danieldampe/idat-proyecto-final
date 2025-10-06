export interface Product {
  readonly id: number
  readonly title: string
  readonly description?: string
  readonly images: string[]
  readonly price: number
}

export interface ProductInCart extends Product {
  quantity: number
}
