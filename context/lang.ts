'use client'

import { AllowLangs } from '@/constants/lang'
import { createDomain } from '@/node_modules/effector/index'

const lang = createDomain()

export const setLang = lang.createEvent<AllowLangs>()

export const $lang = lang
  .createStore(AllowLangs.RU)
  .on(setLang, (_, lang) => lang)
