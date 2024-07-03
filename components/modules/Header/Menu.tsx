import { $menuIsOpen } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { useUnit } from '@/node_modules/effector-react/index'
import { useState } from 'react'

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyerList, setShowBuyerList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translation } = useLang()

  return <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
    <h1>Menu</h1>
  </nav>
}

export default Menu;