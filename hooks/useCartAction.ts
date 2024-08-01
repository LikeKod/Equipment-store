import { $currentProduct } from '@/context/goods'
import { useUnit } from '@/node_modules/effector-react/index'
import { useState } from 'react'

export const useCartAction = () => {
  const product = useUnit($currentProduct)
  const [selectedSize, setSelectedSize] = useState('')

  return {product, setSelectedSize, selectedSize}
}
