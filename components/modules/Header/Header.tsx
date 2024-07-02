'use client'
import { useLang } from '@/hooks/useLang'
import Logo from '@/components/elements/Logo/Logo';
import Link from 'next/link';

const Header = () => {
  const { lang, translation } = useLang()
  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger'>
          {translation[lang].header.menu_btn}
        </button>
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button className='btn-reset header__links__item__btn btn--search'></button>
          </li>
          <li className='header__links__item'>
            <Link href='/favorites' className='header__links__item__btn btn--search--favorites'/>
          </li>
          <li className='header__links__item'>
            <Link href='/comparison' className='header__links__item__btn btn--search--compare'/>
          </li>
          <li className='header__links__item'>
            <Link href='/cart' className='header__links__item__btn btn--search--cart'/>
          </li>
          <li className='header__links__item'>
            <Link href='/profile' className='header__links__item__btn btn--search--profile'/>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
