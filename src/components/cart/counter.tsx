import { tm } from '@/utils/tw-merge';

interface CounterProps {
  quantity: number;
  stock: number;
  onChange: (newQuantity: number) => void;
}

function Counter({ quantity, stock, onChange }: CounterProps) {
  const handleDecrease = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < stock) {
      onChange(quantity + 1);
    }
  };

  return (
    <div
      className={tm(
        'inline-flex justify-center items-center', 
        'p-1 px-2 rounded-[18px]', 
        'border border-[#B3B3B3]', 
        'bg-[#EEE]'
      )}
    >
      <button
        type="button"
        className={tm(
          'flex justify-center items-center', 
          'w-4 h-4',
          'rounded-full',
          'group'
        )}
        disabled={quantity === 1}
        onClick={handleDecrease}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="2"
          viewBox="0 0 6 2"
          fill="none"
        >
          <path
            id="-"
            d="M5.43457 0.727539H0.56543V1.27246H5.43457V0.727539Z"
            fill="#999"
            className="group-hover:fill-black group-disabled:fill-[#B3B3B3]"
          />
        </svg>
      </button>
      <span
        className={tm(
          'flex flex-col justify-center items-center',
          'h-6 px-0.5'
        )}
      >
        {quantity}
      </span>
      <button
        type="button"
        className={tm(
          'flex justify-center items-center', 
          'w-4 h-4',
          'group'
        )}
        disabled={quantity === stock ? true : false}
        onClick={handleIncrease}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <path
            id="+"
            d="M3.72754 7.68262H4.29004V4.27246H7.68262V3.70996H4.29004V0.317383H3.72754V3.70996H0.317383V4.27246H3.72754V7.68262Z"
            fill="#999"
            className="group-hover:fill-black group-disabled:fill-[#B3B3B3]"
          />
        </svg>
      </button>
    </div>
  );
}

export default Counter;
