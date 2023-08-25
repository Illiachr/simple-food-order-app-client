import { ICartItem } from '../../types/cartTypes';
import Button from '../UI/Button/Button';
import CartItem from './CartItem/CartItem';
import classes from './Cart.module.css';
import Popup from '../UI/Popup/Popup';

type Props = {
  cartItems: Array<ICartItem>,
  setVisibility: () => void
}

const Cart = ({ cartItems, setVisibility }: Props) => {

  const cartItemsList = (
  <ul className={classes['cart-items']}>
    {!cartItems || cartItems.length === 0
      ? <div>Your Cart is empty. Wanna add some meal?</div>
      : cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          data={cartItem}
          onAdd={() => {}}
          onRemove={() => {}}
        />
      ))}
  </ul>
  );

  return (
    <Popup setVisibility={setVisibility}>
      {cartItemsList}
      <div className={classes.total}>
        <span>Total</span>
        <span>{cartItems.length}</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes['button-alt']} text='Cancel' onClick={() => {}} />
        { (cartItems && cartItems.length !== 0) && <Button className={classes.button} text='Order' onClick={() => {}} />}
      </div>
    </Popup>
  );
};

export default Cart;
