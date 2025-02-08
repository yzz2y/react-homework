import { tm } from '@/utils/tw-merge';
import CartItem from './cart-item';
import { CartItems } from './constants';

interface CartItemListProps {
  cartItems: CartItems[];
  updateQuantity: (id: number, newQuantity: number) => void;
}

function CartItemList({ cartItems, updateQuantity }: CartItemListProps) {
  return (
    <div
      className={tm('flex flex-col items-start gap-[34.124px] w-full')}
    >
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
      ))}
    </div>
  );
}

export default CartItemList;
