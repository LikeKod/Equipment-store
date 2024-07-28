import { useLang } from '@/hooks/useLang'
import styles from '@/styles/product-list-item/index.module.scss'
import { IProductAvailableProps } from '@/types/elements'

const ProductAvailable = ({ vendorCode, inStock }: IProductAvailableProps) => {
  const isInStock = +inStock > 0
  const { lang, translation } = useLang()

  return (
    <div className={styles.product}>
      <span
        className={`${styles.product__stock} ${
          isInStock ? styles.product__stock__green : styles.product__stock__red
        }`}
      >
        {isInStock
          ? translation[lang].product.available
          : translation[lang].product.not_available}
      </span>
      <span className={styles.product__code}>
        {translation[lang].product.vendor_code}
        .: {vendorCode}
      </span>
    </div>
  )
}

export default ProductAvailable