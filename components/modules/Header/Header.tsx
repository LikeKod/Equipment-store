'use client'
import Logo from '@/components/elements/Logo/Logo'
import { $searchModal, openMenu, openSearchModal } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { addOverflowHiddenToBody, handleCloseSearchModal } from '@/lib/utils/common'
import Link from 'next/link'
import Menu from './Menu'
import { useUnit } from 'effector-react'

const Header = () => {
  const { lang, translation } = useLang()
  const searchModal = useUnit($searchModal)

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
  }

  const handleOpenSearchModal = () => {
    openSearchModal()
    addOverflowHiddenToBody()
  }

  return (
    <header className='header'>
      <div className={`header__search-overlay ${searchModal ? 'overlay-active' : ''}`} onClick={handleCloseSearchModal} />
      <div className='container header__container'>
        <button onClick={handleOpenMenu} className='btn-reset header__burger'>
          {translation[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button className='btn-reset header__links__item__btn header__links__item__btn--search' onClick={handleOpenSearchModal} />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/comparison'
              className='header__links__item__btn header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/cart'
              className='header__links__item__btn header__links__item__btn--cart'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/profile'
              className='header__links__item__btn header__links__item__btn--profile '
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
