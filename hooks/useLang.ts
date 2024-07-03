'use client'

import { $lang } from '@/context/lang'
import translationJson from '../public/translation/translation.json'
import { useUnit } from 'effector-react'

export const useLang = () => {
  const lang = useUnit($lang)
  const translation = translationJson

  return { lang, translation }
}
