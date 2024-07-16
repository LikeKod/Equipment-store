'use client'

import { useLang } from '@/hooks/useLang'
import styles from '../../../../styles/main-page/index.module.scss'

const Hero = () => {
  const { lang, translation } = useLang()
  const descriptionSlicePosition = lang === 'ru' ? 5 : 2
  return (
    <section className={styles.hero}>
      <h1 className='visually-hidden'>
        {translation[lang].main_page.hero_hidden_title}
      </h1>
      <div className={`container ${styles.hero__container}`}>
        <span className={styles.ad}>{translation[lang].common.ad}</span>
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
        <h2 className={styles.hero__title}>
          <span
            className={`${styles.hero__title__subtitle} ${
              lang === 'ru' ? '' : styles.hero__title__subtitle_lang
            }`}
          >
            [ {translation[lang].main_page.hero_subtitle} ]
          </span>
          <span className={styles.hero__title__text}>
            {translation[lang].main_page.hero_title}
          </span>
        </h2>
      </div>
    </section>
  )
}

export default Hero
