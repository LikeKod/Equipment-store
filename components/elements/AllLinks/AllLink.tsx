'use client'
import { useLang } from '@/hooks/useLang'
import Link from '@/node_modules/next/link'
import styles from '@/styles/main-page/index.module.scss'

const AllLink = ({ link }: { link?: string }) => {
  const { lang, translation } = useLang()

  return (
    <Link href={link || `/catalog`} className={styles.all}>
      <span />
      {translation[lang].common.all_link}
    </Link>
  )
}

export default AllLink