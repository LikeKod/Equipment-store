export interface IProduct {
  _id: string
  type: string
  category: string
  collection: string
  price: number
  name: string
  description: string
  characteristics: { [index: string]: string }
  images: string[]
  vendoreCode: string
  inStock: string
  isNew: boolean
  isBestseller: boolean
  vendorCode: string
  sizes: ISizes
  popularity: number
  errorMessage?: string
}

export interface ISizes {
  s: boolean
  l: boolean
  m: boolean
  xl: boolean
  xxl: boolean
}

export interface ISelectedSizes {
  sizes: ISizes
  type: string
  className?: string
}