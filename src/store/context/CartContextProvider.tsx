import { ReactNode, Reducer, useReducer } from 'react';
import CartContext from './CartContext.ts';
import { ICartItem } from '../../types/cartTypes.ts';
import { IAction, ICartState } from '../../types/reducerTypes.ts';
import { CART_DEFAULT_STATE, cartStateReducer } from '../reducer/reducer.ts';
import ACTIONS from '../reducer/actions.ts';

type Props = {
  children: ReactNode
};

const CartContextProvider = ({ children }: Props) => {

  const [cartState, dispatchCartState] = useReducer<Reducer<ICartState, IAction>>(cartStateReducer, CART_DEFAULT_STATE);

  const addCartItemHandler = (cartItem: ICartItem) => {
    console.log(cartItem);
    const action = ACTIONS.ADD_ITEM(cartItem);
    dispatchCartState(action);
  };
  
  const removeCartItemHandler = (cartItem: ICartItem) => {
    console.log(cartItem);
    const action = ACTIONS.REMOVE_ITEM(cartItem);
    dispatchCartState(action);
  };
  
  const cartContext = {
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
