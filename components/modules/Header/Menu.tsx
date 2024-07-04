import { AllowLangs } from '@/constants/lang'
import { setLang } from '@/context/lang'
import { $menuIsOpen, closeMenu } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'
import { useUnit } from 'effector-react'
import { useState } from 'react'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyerList, setShowBuyerList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translation } = useLang()

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <button
        className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
        onClick={handleCloseMenu}
      />
      <h1>Menu</h1>
    </nav>
  )
}

export default Menu
