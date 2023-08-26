import { Fragment } from 'react';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import classes from './Header.module.css';

type Props = {
  title: string,
  image: string,
  itemsTotal: number,
  onCartButtonClick: () => void
}

const Header = ({ title, image, itemsTotal, onCartButtonClick }: Props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{title}</h1>
        <HeaderCartButton itemsTotal={itemsTotal} onClick={onCartButtonClick} />
      </header>
      <img src={image} className={classes['main-image']} />
    </Fragment>
  );
};

export default Header;
