interface ICartItem {
  'id': string,
  'name': string,
  'price': number,
  'amount': number
}

interface ICartContext {
  cartItems: Array<ICartItem>,
  totalAmount: number,
  addCartItem: (item: ICartItem) => void,
  removeCartItem: (item: ICartItem) => void
}

export type {
  ICartItem,
  ICartContext
};
