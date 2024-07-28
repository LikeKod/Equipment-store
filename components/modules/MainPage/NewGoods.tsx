import { getNewProductsFx } from '@/api/main-page'
import { $newProducts } from '@/context/goods'
import { useLang } from '@/hooks/useLang'
import { useUnit } from '@/node_modules/effector-react/index'
import MainPageSection from './MainPageSection'

const NewGoods = () => {
  const goods = useUnit($newProducts)
  const spinner = useUnit(getNewProductsFx.pending)
  const { lang, translation } = useLang()

  return (
    <MainPageSection
      title={translation[lang].main_page.new_title}
      goods={goods}
      spinner={spinner}
    />
  )
}


export default NewGoods