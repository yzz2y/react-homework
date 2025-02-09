import { tm } from '@/utils/tw-merge';
import { CartItems } from './constants';
import Counter from './counter';

interface CartItemProps {
  item: CartItems;
  updateQuantity: (id: number, newQuantity: number) => void;
}

function CartItem({ item, updateQuantity }: CartItemProps) {
  return (
    <div className={tm(
      'flex items-center gap-3 p-2', 
      'w-full'
    )}>
      <img
        src={`/product-${item.id}.png`}
        alt={`${item.name} 이미지`}
        className={tm(
          'flex justify-center items-center', 
          'w-16 h-16'
        )}
      />
      <div className={tm('flex h-[42px] flex-col items-start gap-2 flex-1')}>
        <span
          className={tm(
            'text-[#4D4D4D] text-[20px] leading-[100%] tracking-[-0.4px]'
          )}
        >
          {item.name}
        </span>
        <span
          className={tm(
            'text-[#4D4D4D] text-[18px] font-extrabold leading-[100%] tracking-[-0.36px]'
          )}
        >
          {item.price.toLocaleString()}원
        </span>
      </div>
      <Counter
        quantity={item.quantity}
        stock={item.stock}
        onChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
      />
    </div>
  );
}

export default CartItem;
