import ProductSubtitle from '@/components/elements/ProductSubtitle/ProductSubtitle'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { formatPrice } from '@/lib/utils/common'
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
          )}
        </li>
      )}
    </>
  )
}
