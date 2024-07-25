import { useLang } from "@/hooks/useLang"
import Link from "@/node_modules/next/link"
import { IProductListItemProps } from "@/types/modules"
import stylesForAd from '../../../styles/ad/index.module.scss'
import styles from '../../../styles/product-list-item/index.module.scss'


const ProductListItem = ({item, title}: IProductListItemProps) => {

    const {lang, translation} = useLang()

    return(
        <>
            {item.characteristics.collection === 'line' && item.type ==='t-shirts' ? (
                <li className={styles.list__item_add}>
                    <Link href={{`/catalog/${item.category}/${item._id}`}} className={styles.list__item_add__inner}>
                        <span className={`${stylesForAd.ad} ${styles.list__item_ad__ad}`}>
                            {translation[lang].common.ad}
                        </span>
                    </Link>
                </li>
            ): (
                <></>
            )}
        </>
    )
}