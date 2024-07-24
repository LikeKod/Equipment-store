import { $bestsellerProducts } from '@/context/goods';
import { useUnit } from '@/node_modules/effector-react/index';

const BestsellerGoods = () => {
    const goods = useUnit($bestsellerProducts)

    return <div>
        
    </div>
}

export default BestsellerGoods;