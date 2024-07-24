import { createEffect } from '@/node_modules/effector/index'
import api from './apiinstance'

export const getNewProductsFx = createEffect(async () => {
  const { data } = await api.get('/api/goods/new')

  return data
})

export const getBestsellerProductsFx = createEffect(async () => {
  const { data } = await api.get('/api/goods/bestsellers')

  return data
})
