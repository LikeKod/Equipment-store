'use client'

import { loadOneProductFx } from '@/api/goods'
import { getBestsellerProductsFx, getNewProductsFx } from '@/api/main-page'
import { createGate, Gate } from '@/node_modules/effector-react/index'
import { createDomain, Effect, forward, sample } from '@/node_modules/effector/index'
import { IProduct } from '@/types/common'
import { ILoadOneProductFx } from '@/types/goods'

const goods = createDomain()

export const MainPageGate = createGate()

export const setCurrentProduct = goods.createEvent<IProduct>()
export const loadOneProduct = goods.createEvent<ILoadOneProductFx>()

const goodsStoreInstance = (effect: Effect<void, [], Error>) =>
  goods
    .createStore([])
    .on(effect.done, (_, { result }) => result)
    .on(effect.fail, (_, { error }) => {
      console.log(error.message)
    })

const goodsSampleInstance = (
  effect: Effect<void, [], Error>,
  gate: Gate<unknown>
) =>
  sample({
    clock: gate.open,
    target: effect,
  })

export const $newProducts = goodsStoreInstance(getNewProductsFx)
export const $bestsellerProducts = goodsStoreInstance(getBestsellerProductsFx)

goodsSampleInstance(getNewProductsFx, MainPageGate)
goodsSampleInstance(getBestsellerProductsFx, MainPageGate)

export const $currentProduct = goods
  .createStore<IProduct>({} as IProduct)
  .on(setCurrentProduct, (_, product) => product)
  .on(loadOneProductFx.done, (_, {result}) => result.productItem)

forward({
  from: loadOneProduct,
  to: loadOneProductFx
})