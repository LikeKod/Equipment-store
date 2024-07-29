import { $currentProduct } from '@/context/goods'
import { useUnit } from '@/node_modules/effector-react/index'

export const useCartAction = () => {
  const product = useUnit($currentProduct)

  return {product}
}
