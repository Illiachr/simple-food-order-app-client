import { ICartItem } from '../../types/cartTypes.ts';
import { EActionType } from '../../types/reducerTypes.ts';

const ACTIONS = {
  ADD_ITEM: (item: ICartItem) => ({ type: EActionType.ADD_ITEM, val: item}),
  REMOVE_ITEM: (item: ICartItem) => ({ type: EActionType.REMOVE_ITEM, val: item})
};

export default ACTIONS;
