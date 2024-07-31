'use client'

import { useLang } from "@/hooks/useLang"
import styles from '@/styles/product-list-item/index.module.scss'

const ProductComposition = ({composition}: {composition: string}) => {
    const {lang, translation} = useLang()

    return (
        <span className={styles.product__composition}>
            {translation[lang].catalog[composition]}
        </span>
    )
}

export default ProductComposition