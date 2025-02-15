import { useLang } from '@/hooks/useLang'
import styles from '@/styles/product-list-item/index.module.scss'
import { IProductLabelProps } from '@/types/modules'

const ProductLabel = ({ isNew, isBestseller }: IProductLabelProps) => {
  const { lang, translation } = useLang()

  const bestsellerLabel = (
    <span
      className={`${styles.list__item__label} ${styles.list__item__bestseller}`}
    >
      {translation[lang].main_page.is_bestseller}
    </span>
  )
  const newLabel = (
    <span
      className={`${styles.list__item__label} ${styles.list__item__new}`}
      style={{ left: isNew && isBestseller ? (lang === 'ru' ? 60 : 100) : 16 }}
    >
      {translation[lang].main_page.is_new}
    </span>
  )
  const allLabel = (
    <div className={styles.list__item__label__all}>
      {newLabel}
      {bestsellerLabel}
    </div>
  )

  if (isNew && isBestseller) {
    return allLabel
  }

  if (isBestseller) {
    return bestsellerLabel
  }

  return newLabel
}

export default ProductLabel