import { tm } from '@/utils/tw-merge';

interface CartTotalProps {
  totalPrice: number;
}

function CartTotal({ totalPrice }: CartTotalProps) {
  return (
    <div className={tm('flex flex-col items-end gap-5 w-full')}>
      <div className={tm('w-full h-px bg-[#4D4D4D]')}></div>
      <span
        className={tm(
          'text-[#4D4D4D] text-center text-[20px] font-bold tracking-[-0.4px]'
        )}
      >
        구매총액 : {totalPrice.toLocaleString()}원
      </span>
    </div>
  );
}

export default CartTotal;
