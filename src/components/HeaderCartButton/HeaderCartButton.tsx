import { useContext } from 'react';
import CartIcon from '../Icon/CartIcon/CartIcon';
import Button from '../UI/Button/Button';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/context/CartContext';
import { ICartItem } from '../../types/cartTypes';

type Props = {
  onClick: () => void
};

const calcCartItems = (items: Array<ICartItem>) => {
  const calcHandler = (total: number, item: ICartItem) => {
    total = total + item.amount;
    return total;
  };
  const totalItems = items.reduce(calcHandler, 0);
  return totalItems;
};

const HeaderCartButton = ({ onClick }: Props) => {
  const { cartItems } = useContext(CartContext);
  const itemsTotal = calcCartItems(cartItems);

  return (
    <Button className={classes.button} onClick={onClick}>
      <CartIcon className={classes.icon} />
      Cart
      {itemsTotal > 0 && <span className={classes.badge}>{itemsTotal}</span>}
    </Button>
  );
};

export default HeaderCartButton;
