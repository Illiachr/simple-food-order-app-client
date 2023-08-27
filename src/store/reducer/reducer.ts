import { EActionType, IAction, ICartState } from '../../types/reducerTypes.ts';

const CART_DEFAULT_STATE = {
  cartItems: [],
  totalAmount: 0
};

const actionHandlers = {
  [EActionType.ADD_ITEM]: (state: ICartState, action: IAction) => {
    const { cartItems, totalAmount } = state;
    const { val: cartItemData } = action;
    const updatedTotalAmount = totalAmount + cartItemData.price * cartItemData.amount;
    
    const existingCartItemIdx = cartItems.findIndex(item => item.id === cartItemData.id);
    let updatedCartItems;

    if (existingCartItemIdx >= 0) {
      const existingCartItem = cartItems[existingCartItemIdx];
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + cartItemData.amount
      };
      updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIdx] = updatedCartItem;
      return { cartItems: updatedCartItems, totalAmount: updatedTotalAmount };
    }

    updatedCartItems = [ action.val, ...cartItems];

    return { cartItems: updatedCartItems, totalAmount: updatedTotalAmount };
  },

  [EActionType.REMOVE_ITEM]: (state: ICartState, action: IAction) => {
    const { cartItems, totalAmount } = state;
    const { val: removedItem } = action;

    const updatedTotalAmount = totalAmount + removedItem.price * removedItem.amount;
    const updatedCartItems = cartItems.filter(item => item.id !== removedItem.id);

    return { cartItems: updatedCartItems, totalAmount: updatedTotalAmount };
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
