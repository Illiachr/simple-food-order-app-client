import CartIcon from '../Icon/CartIcon/CartIcon';
import Button from '../UI/Button/Button';
import classes from './HeaderCartButton.module.css';

type Props = {
  itemsTotal: number,
  onClick: () => void
};

const HeaderCartButton = ({ itemsTotal, onClick }: Props) => {
  return (
    <Button className={classes.button} onClick={onClick}>
      <CartIcon className={classes.icon} />
      Cart
      {itemsTotal > 0 && <span className={classes.badge}>{itemsTotal}</span>}
    </Button>
  );
};

export default HeaderCartButton;
