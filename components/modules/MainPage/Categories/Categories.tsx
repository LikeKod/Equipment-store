'use client'

import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import img1 from '@/public/img/categories-img-1.png'
import img2 from '@/public/img/categories-img-2.png'
import img3 from '@/public/img/categories-img-3.png'
import img4 from '@/public/img/categories-img-4.png'
import styles from '../../../../styles/main-page/index.module.css'

const Categories = () => {
  const { lang, translation } = useLang()
  const isMedia490 = useMediaQuery(490)

  const images = [
    { src: img1, id: 1, title: translation[lang].main_page.category_cloth },
    {
      src: img2,
      id: 2,
      title: translation[lang].main_page.category_accessories,
    },
    {
      src: img3,
      id: 3,
      title: translation[lang].main_page.category_souvenirs,
    },
    { src: img4, id: 4, title: translation[lang].main_page.category_office },
  ]

  return (
    <section className={styles.categories}>
      <div className={`container ${styles.categories__container}`}>
        <h2 className={`site-title ${styles.categories__title}`}>
          {translation[lang].main_page.category_title}
        </h2>
        <div className={styles.categories__inner}>

        </div>
      </div>
    </section>
  )
}

export default Categories
