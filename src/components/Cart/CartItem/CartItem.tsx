import { ICartItem } from '../../../types/cartTypes';
import Button from '../../UI/Button/Button';
import classes from './CartItem.module.css';

type Props = {
  data: ICartItem,
  onAdd: () => void
  onRemove: () => void
}

const CartItem = ({ data, onAdd, onRemove }: Props) => {
  return (
    <div className={classes['cart-item']}>
      <div className="">{data.name}</div>
      <div className="">{data.description}</div>
      <div className="">{data.price}</div>
      <div className="">x {data.amount}</div>
      <Button text='Add' onClick={onAdd}/>
      <Button text='Remove' onClick={onRemove}/>
    </div>
  );
};

export default CartItem;
