import { useLang } from "@/hooks/useLang"
import { IProductSubtitleProps } from "@/types/elements"
import styles from '../../../styles/productSubtitle/index.module.scss'

const ProductSubtitle = ({subtitleClassName, subtitleRectClassName}: IProductSubtitleProps) => {

    const {lang, translation} = useLang()
    const descriptionSlicePosition = lang === 'ru' ? 5 : 2

    return (
        <div className={`${styles.product_subtitle__subtitle} ${subtitleClassName}`}>
        <div className={`${styles.product_subtitle__subtitle__rect} ${subtitleRectClassName}`}>
          <span>
            {translation[lang].main_page.hero_description.slice(
              0,
              descriptionSlicePosition
            )}
          </span>
          <br />
          <span>
            {translation[lang].main_page.hero_description.slice(
              descriptionSlicePosition
            )}
          </span>
        </div>
      </div>
    )
}

export default ProductSubtitle