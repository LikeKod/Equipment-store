'use client'
import { useLang } from '@/hooks/useLang'

const Header = () => {
  const { lang, translation } = useLang()
  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger'>
          {translation[lang].header.menu_btn}
        </button>
      </div>
    </header>
  )
}

export default Header
