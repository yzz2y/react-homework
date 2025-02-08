import { useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { CartItems, ITEMS_LIST } from './constants';
import CartItemList from './cart-item-list';
import CartTitle from './cart-title';
import CartTotal from './cart-total';

function Cart() {
  const [cartItems, setCartItems] = useState<CartItems[]>(ITEMS_LIST);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={tm(
        'flex flex-col items-start gap-[17.062px] p-[34.124px] min-w-[320px]', 
        'rounded-[13.65px]',
        'border-[10.237px] border-solid border-[#4D4D4D]',
        'bg-white'
      )}
    >
      <div
        className={tm('flex flex-col items-start gap-[34.124px] w-full')}
      >
        <CartTitle />
        <CartItemList cartItems={cartItems} updateQuantity={updateQuantity} />
        <CartTotal totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Cart;
