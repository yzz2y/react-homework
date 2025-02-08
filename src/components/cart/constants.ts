export interface CartItems {
  id: number;
  name: string;
  price: number;
  stock: number;
  quantity: number;
}

export const ITEMS_LIST = [
  { id: 1, name: '1A 우유 900mL', price: 1880, stock: 4, quantity: 1 },
  { id: 2, name: '맛있는 콩나물 500g', price: 1280, stock: 3, quantity: 1 },
  { id: 3, name: '고소한 두부 1kg', price: 2280, stock: 2, quantity: 1 },
];
