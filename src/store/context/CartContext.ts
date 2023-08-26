import { createContext } from 'react';
import { ICartContext, ICartItem } from '../../types/cartTypes';

const DEFAULT_CTX = {
  cartItems: [],
  totalAmount: 0,
  addCartItem: (item: ICartItem) => { console.log(item); },
  removeCartItem: (item: ICartItem) => { console.log(item); }
};

const CartContext = createContext<ICartContext>(DEFAULT_CTX);

export default CartContext;
