import { IProductCounterProps } from '@/types/goods'

const ProductCounter = ({ className, count }: IProductCounterProps) => (
  <div className={className}>
    <button className='btn-reset'>
      <span>{count}</span>
    </button>
  </div>
)

export default ProductCounter
