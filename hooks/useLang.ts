'use client'
import { $lang } from '@/context/lang/state'
import translationsJson from '@/public/translations/translations.json'
import { useUnit } from 'effector-react'

export const useLang = () => {
  const lang = useUnit($lang)
  const translation = translationsJson

  return { lang, translation }
}
