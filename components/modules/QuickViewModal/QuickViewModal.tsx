import ProductAvailable from '@/components/elements/ProductAvaliable/ProductAvaliable'
import ProductItemActionBtn from '@/components/elements/ProductItemActionBtn/ProductItemActionBtn'
import { closeQuickViewModal } from '@/context/modals'
import { useCartAction } from '@/hooks/useCartAction'
import { useLang } from '@/hooks/useLang'
import { useProductImages } from '@/hooks/useProductImages'
import { formatPrice, removeOverflowHiddenFromBody } from '@/lib/utils/common'
import styles from '@/styles/quick-view-modal/index.module.scss'
import ProductColor from '../ProductListItem/ProductColor'
import ProductComposition from '../ProductListItem/ProductComposition'
import ProductSizesItem from '../ProductListItem/ProductSizesItem'
import ProductSizeTableBtn from '../ProductListItem/ProductSizeTableBtn'
import QuickViewModalSlider from './QuickViewModalSlider'
import AddToCartBtn from '../ProductListItem/AddToCartBtn'
import ProductCounter from '../ProductListItem/ProductCounter'

const QuickViewModal = () => {
  const { lang, translation } = useLang()
  const { product, selectedSize, setSelectedSize } = useCartAction()
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
        <QuickViewModalSlider images={images} />
      </div>
      <div className={styles.modal__right}>
        <h3 className={styles.modal__right__title}>{product.name}</h3>
        <div className={styles.modal__right__price}>
          {formatPrice(+product.price)} ₽
        </div>
        <div className={styles.modal__right__info}>
          <ProductAvailable
            vendorCode={product.vendorCode}
            inStock={+product.inStock}
          />
          <ProductColor color={product.characteristics.color} />
          {product.characteristics?.composition && (
            <ProductComposition
              composition={product.characteristics.composition}
            />
          )}
          {Object.keys(product.sizes).length ? (
            <div className={styles.modal__right__info__size}>
              <div className={styles.modal__right__info__size__inner}>
                <span className={stylesForProduct.product__size_title}>
                  {translation[lang].catalog.size}
                </span>
                <ProductSizeTableBtn
                  sizes={product.sizes}
                  type={product.type}
                  className={`sizes-table-btn ${styles.modal__right__info__sizes_btn}`}
                />
              </div>
              <ul className={`list-reset ${styles.modal__right__info__sizes}`}>
                {Object.entries(product.sizes).map(([key, value], i) => (
                  <ProductSizesItem
                    key={i}
                    currentSize={[key, value]}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    currentCartItems={[]}
                  />
                ))}
              </ul>
            </div>
          ) : (
            ''
          )}
          <div className={styles.modal__right__bottom}>
            <span className={stylesForProduct.product__count_title}>
              {translation[lang].product.count}
            </span>
            <div className={styles.modal__right__bottom__inner}>
              {!!selectedSize ? (
                <ProductCounter
                  className={`counter ${styles.modal__right__bottom__counter}`}
                />
              ) : (
                <div
                  className={`counter ${styles.modal__right__bottom__counter}`}
                  style={{ justifyContent: 'center' }}
                >
                  <span>
                    {translation[lang].product.total_in_cart}{' '}
                  </span>
                </div>
              )}
              <AddToCartBtn
                className={styles.modal__right__bottom__add}
                text={translation[lang].product.to_cart}
              />
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default QuickViewModal
