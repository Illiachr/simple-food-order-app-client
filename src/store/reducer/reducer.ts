import { EActionType, IAction, ICartState } from '../../types/reducerTypes';

const CART_DEFAULT_STATE = {
  cartItems: [],
  totalAmount: 0
};

const actionHandlers = {
  [EActionType.ADD_ITEM]: (state: ICartState, action: IAction) => {
    const { cartItems, totalAmount } = state;
    const { val: newCartItem } = action;

    const updatedCartItems = [ action.val, ...cartItems];
    const updatedTotalAmount = totalAmount + newCartItem.price * newCartItem.amount;

    return { cartItems: updatedCartItems, totalAmount: updatedTotalAmount };
  },
  [EActionType.REMOVE_ITEM]: (state: ICartState, action: IAction) => {
    const { cartItems, totalAmount } = state;
    const { val: removedItem } = action;
    const updatedCartItems = cartItems.filter(item => item.id !== removedItem.id);
    return { cartItems: updatedCartItems, totalAmount };
  }
};

const cartStateReducer = (state: ICartState, action: IAction): ICartState => {  
  const handler = actionHandlers[action.type];
  if (handler) {
    const updateCartState = handler(state, action);
    return updateCartState;
  }

  return CART_DEFAULT_STATE;
};

export {
  CART_DEFAULT_STATE,
  cartStateReducer
};
