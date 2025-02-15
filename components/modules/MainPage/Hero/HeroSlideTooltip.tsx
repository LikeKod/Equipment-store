
import Image from '@/node_modules/next/image'
import styles from '@/styles/main-page/index.module.scss'
import { IHeroSlideTooltip } from '@/types/main-page'

const HeroSlideTooltip = ({ title, image }: IHeroSlideTooltip) => (
  <div className={`${styles.hero__slider__slide__popup} slide-popup`}>
    <span className={styles.hero__slider__slide__popup__arrow} />
    <Image
      className={styles.hero__slider__slide__popup__img}
      src={image}
      alt={title}
    />
    <p className={styles.hero__slider__slide__popup__inner}>
      <b className={styles.hero__slider__slide__popup__title}>{title}</b>
      <span className={styles.hero__slider__slide__popup__price}>760 ₽</span>
    </p>
  </div>
)

export default HeroSlideTooltip