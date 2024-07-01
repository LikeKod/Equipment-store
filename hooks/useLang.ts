'use client'

import { $lang } from '@/context/lang'
import { useUnit } from '@/node_modules/effector-react/index'
import translationJson from '../public/translation/translation.json'

export const useLang = () => {
  const lang = useUnit($lang)
  const translation = translationJson

  return { lang, translation }
}
