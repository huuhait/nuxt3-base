export type ProductSize = {
  name: string
  quantity: number
}

export type Product = {
  id: number
  name: string
  price: string
  image_src: string
  image_alt?: string
  description?: string
  sizes?: ProductSize[]
}

export type Cart = {
  product_id: number
  size: string
  quantity: number
}[]

export type Country = {
  name: string
  code: string
  timezone: string
  utc: string
  mobile_code: string
}
