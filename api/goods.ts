import { createEffect } from "@/node_modules/effector/index";
import toast from "@/node_modules/react-hot-toast/dist/index";
import { ILoadOneProductFx } from "@/types/goods";
import api from './apiinstance';

export const loadOneProductFx = createEffect(
    async ({productId, category}: ILoadOneProductFx) => {
        try {
            const {data} = await api.post('/api/goods/one', {productId, category})

            if(data?.message === 'Wrong product id') {
                return {productItem: {errorMessage: 'Wrong product id'}}
            }

            return data
        } catch(error) {
            toast.error((error as Error).message)
        }
    }
)