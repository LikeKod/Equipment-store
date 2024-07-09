'use client'

import {
  closeCatalogMenu,
  closeMenu,
  openCatalogMenu,
  openMenu
} from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { addOverflowHiddenToBody } from '@/lib/utils/common'
import Link from '@/node_modules/next/link'
import CatalogMenu from '../Header/CatalogMenu'

const MobileNavbar = () => {
  const { lang, translation } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
    closeCatalogMenu()
  }

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenToBody('0')
    openCatalogMenu()
    closeMenu()
  }

  return (
    <>
      <CatalogMenu />
      <div className='mobile-navbar'>
        <Link href='/' className='mobile-navbar__btn'>
          {translation[lang].breadcrumbs.main}
        </Link>
        <button
          className='btn-reset mobile-navbar__btn'
          onClick={handleOpenCatalogMenu}
        >
          [translation[lang].breadcrumbs.catalog]
        </button>
        <Link href='/favorites' className='btn-reset mobile-navbar__btn'>
          {translation[lang].breadcrumbs.favorites}
        </Link>
        <Link href='/cart' className='btn-reset mobile-navbar__btn'>
          {translation[lang].breadcrumbs.cart}
        </Link>
        <button
          className='btn-reset mobile-navbar__btn'
          onClick={handleOpenMenu}
        >
          [translation[lang].common.more]
        </button>
      </div>
    </>
  )
}

export default MobileNavbar
