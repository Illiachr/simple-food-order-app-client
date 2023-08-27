import { ICartItem } from './cartTypes';

enum EActionType {
  'ADD_ITEM', 'REMOVE_ITEM'
}
interface IAction {
  type: EActionType,
  val: ICartItem
}

interface ICartState {
  cartItems: Array<ICartItem>,
  totalAmount: number
}

export type {
  IAction,
  ICartState
};

export {
  EActionType
};
