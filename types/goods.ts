import { ICartItem } from "./cart"

export interface ILoadOneProductFx {
  productId: string
  category: string
}

export interface IProductSizesItemProps {
  currentSize: [string, boolean]
  selectedSize: string
  setSelectedSize: (arg0: string) => void
  currentCartItems: ICartItem[]
}

export interface IProductCounterProps {
  className: string
  count: number
}

export interface IAddToCartBtnProps {
  text: string
  className?: string
}