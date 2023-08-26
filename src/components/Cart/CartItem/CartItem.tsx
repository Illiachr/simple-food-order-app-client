import { useContext } from 'react';
import { ICartItem } from '../../../types/cartTypes';
import Button from '../../UI/Button/Button';
import classes from './CartItem.module.css';
import CartContext from '../../../store/context/CartContext';

type Props = {
  data: ICartItem;
};

const CartItem = ({ data }: Props) => {
  const { addCartItem, removeCartItem } = useContext(CartContext);

  const onAdd = () => {
    addCartItem(data);
  };

  const onRemove = () => {
    removeCartItem(data);
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{data.name}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>{data.price}</div>
          <div className={classes.amount}>x {data.amount}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <Button text="+" onClick={onAdd} />
        <Button text="-" onClick={onRemove} />
      </div>
    </li>
  );
};

export default CartItem;
