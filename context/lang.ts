'use client'

import { AllowLangs } from '@/constants/lang'
import { createDomain } from 'effector'

const lang = createDomain()

export const setLang = lang.createEvent<AllowLangs>()

export const $lang = lang
  .createStore(AllowLangs.RU)
  .on(setLang, (_, lang) => lang)
