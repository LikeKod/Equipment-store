import ProductItemActionBtn from '@/components/elements/ProductItemActionBtn/ProductItemActionBtn'
import { closeQuickViewModal } from '@/context/modals'
import { useCartAction } from '@/hooks/useCartAction'
import { useLang } from '@/hooks/useLang'
import { useProductImages } from '@/hooks/useProductImages'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import styles from '@/styles/quick-view-modal/index.module.scss'


const QuickViewModal = () => {
  const { lang, translation } = useLang()
  const { product } = useCartAction()
  const images = useProductImages(product)
  const {
    handleAddToComparison,
    isProductInComparison,
    addToComparisonSpinner,
  } = useComparisonAction(product)
  const {
    handleAddProductToFavorites,
    addToFavoritesSpinner,
    isProductInFavorites,
  } = useFavoritesAction(product)

  const handleCloseModal = () => {
    removeOverflowHiddenFromBody()
    closeQuickViewModal()
  }

  const addToCart = () => {
    setIsAddToFavorites(false)
    handleAddToCart(count)
  }

  return (
    <div className={styles.modal}>
      <button
        className={`btn-reset ${styles.modal__close}`}
        onClick={handleCloseModal}
      />
      <div className={styles.modal__actions}>
        <ProductItemActionBtn
          spinner={addToFavoritesSpinner}
          text={translation[lang].product.add_to_favorites}
          iconClass={`${
            addToFavoritesSpinner
              ? 'actions__btn_spinner'
              : isProductInFavorites
              ? 'actions__btn_favorite_checked'
              : 'actions__btn_favorite'
          }`}
          withTooltip={false}
          callback={handleAddProductToFavorites}
        />
        <ProductItemActionBtn
          spinner={addToComparisonSpinner}
          text={translation[lang].product.add_to_comparison}
          iconClass={`${
            addToComparisonSpinner
              ? 'actions__btn_spinner'
              : isProductInComparison
              ? 'actions__btn_comparison_checked'
              : 'actions__btn_comparison'
          }`}
          withTooltip={false}
          callback={handleAddToComparison}
        />
      </div>
      <div className={styles.modal__left}>
      </div>
    </div>
  )
}

export default QuickViewModal
