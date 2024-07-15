import { useLang } from '@/hooks/useLang'
import styles from '../../../../styles/main-page/index.module.scss'

const Hero = () => {
  const { lang, translation } = useLang()
  return (
    <section className={styles.hero}>
      <h1 className='visually-hidden'>
        {translation[lang].main_page.hero_hidden_title}
      </h1>
      <div className={`container ${styles.hero__container}`}>
        <span className={styles.ad}>{translation[lang].common.ad}</span>
      </div>
    </section>
  )
}

export default Hero
