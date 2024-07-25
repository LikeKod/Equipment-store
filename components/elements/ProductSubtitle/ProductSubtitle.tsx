import { useLang } from "@/hooks/useLang"
import styles from '../../../styles/productSubtitle/index.module.scss'

const ProductSubtitle = () => {

    const {lang, translation} = useLang()
    const descriptionSlicePosition = lang === 'ru' ? 5 : 2

    return (
        <div className={styles.hero__subtitle}>
        <div className={styles.hero__subtitle__rect}>
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