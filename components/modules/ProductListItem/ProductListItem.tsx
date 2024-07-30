import ProductAvailable from '@/components/elements/ProductAvaliable/ProductAvaliable'
import ProductItemActionBtn from '@/components/elements/ProductItemActionBtn/ProductItemActionBtn'
import ProductSubtitle from '@/components/elements/ProductSubtitle/ProductSubtitle'
import { setCurrentProduct } from '@/context/goods'
import { showQuickViewModal } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { addOverflowHiddenToBody, formatPrice } from '@/lib/utils/common'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import { IProductListItemProps } from '@/types/modules'
import stylesForAd from '../../../styles/ad/index.module.scss'
import styles from '../../../styles/product-list-item/index.module.scss'
import ProductLabel from './ProductLabel'

const ProductListItem = ({ item, title }: IProductListItemProps) => {
  const { lang, translation } = useLang()
  const isTitleForNew = title === translation[lang].main_page.new_title
  const isMedia800 = useMediaQuery(800)

  const handleShowQuickViewModal = () => {
    addOverflowHiddenToBody()
    showQuickViewModal()
    setCurrentProduct(item)
  }

  return (
    <>
      {item.characteristics.collection === 'line' &&
      item.type === 't-shirts' ? (
        <li className={styles.list__item_add}>
          <Link
            href={`/catalog/${item.category}/${item._id}`}
            className={styles.list__item_add__inner}
          >
            <span className={`${stylesForAd.ad} ${styles.list__item_ad__ad}`}>
              {translation[lang].common.ad}
            </span>
            <ProductSubtitle
              subtitleClassName={styles.list__item_ad__subtitle}
              subtitleRectClassName={styles.list__item_ad__subtitle__rect}
            />
            <div className={styles.list__item_ad__img}>
              <Image
                src={item.images[0]}
                alt={item.name}
                width={224}
                height={275}
              />
            </div>
            <p className={styles.list__item_ad__title}>
              <span>
                {translation[lang].main_page.tShirt} «Line»{' '}
                {
                  translation[lang].main_page[
                    item.images[0].split('/img/').join('').split('-')[0]
                  ]
                }
              </span>
              <span>{formatPrice(+item.price)} ₽</span>
            </p>
          </Link>
        </li>
      ) : (
        <li className={styles.list__item}>
          {title ? (
            <span
              className={`${styles.list__item__label} ${
                isTitleForNew
                  ? styles.list__item__new
                  : styles.list__item__bestseller
              }`}
            >
              {isTitleForNew
                ? translation[lang].main_page.is_new
                : translation[lang].main_page.is_bestseller}
            </span>
          ) : !item.isNew && !item.isBestseller ? (
            ''
          ) : (
            <ProductLabel isBestseller={item.isBestseller} isNew={item.isNew} />
          )}<div className={styles.list__item__actions}>
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
            callback={handleAddToComparison}
          />
          {!isMedia800 && (
            <ProductItemActionBtn
              text={translation[lang].product.quick_view}
              iconClass='actions__btn_quick_view'
              callback={handleShowQuickViewModal}
            />
          )}
        </div>
        <Link
          href={`/catalog/${item.category}/${item._id}`}
          className={styles.list__item__img}
        >
          <Image src={item.images[0]} alt={item.name} fill />
        </Link>
        <div className={styles.list__item__inner}>
          <h3 className={styles.list__item__title}>
            <Link href={`/catalog/${item.category}/${item._id}`}>
              {item.name}
            </Link>
          </h3>
          <ProductAvailable
            vendorCode={item.vendorCode}
            inStock={+item.inStock}
          />
          <span className={styles.list__item__price}>
            {formatPrice(+item.price)} ₽
          </span>
        </div>
        {productsWithoutSizes.includes(item.type) ? (
          <button
            onClick={addToCart}
            className={`btn-reset ${styles.list__item__cart} ${
              isProductInCart ? styles.list__item__cart_added : ''
            }`}
            disabled={addToCartSpinner}
            style={addToCartSpinner ? { minWidth: 125, height: 48 } : {}}
          >
            {addToCartSpinner ? (
              <FontAwesomeIcon icon={faSpinner} spin color='#fff' />
            ) : isProductInCart ? (
              translation[lang].product.in_cart
            ) : (
              translation[lang].product.to_cart
            )}
          </button>
        ) : (
          <button
            className={`btn-reset ${styles.list__item__cart}`}
            onClick={addToCart}
          >
            {translation[lang].product.to_cart}
          </button>
        )}
        </li>
      )}
    </>
  )
}

export default ProductListItem