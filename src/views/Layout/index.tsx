import { Fragment, useContext, useState } from 'react';
import { IMeal } from '../../types/mealsTypes.ts';
import Header from '../../components/Header/Header.tsx';
import Meals from '../../components/Meals/Meals/Meals.tsx';
import Cart from '../../components/Cart/Cart.tsx';
import CartContext from '../../store/context/CartContext.ts';

type Props = {
  headerTitle: string,
  headerBackgroundImg: string,
  mealsData: Array<IMeal>,
  overlaysElemId: string
}

const Layout = ({
  headerTitle,
  headerBackgroundImg,
  mealsData,
  overlaysElemId
}: Props) => {

  const { cartItems } = useContext(CartContext);
  const [popupVisible, setPopupVisible] = useState(false);

  const onCartButtonClick = () => {
    setPopupVisible(true);
  };


  return (
    <Fragment>
      { popupVisible
        && 
        <Cart
          overlaysElemId={overlaysElemId}
          setVisibility={setPopupVisible}
          cartItems={cartItems}
        />}
      <Header
        title={headerTitle}
        image={headerBackgroundImg}
        itemsTotal={cartItems.length}
        onCartButtonClick={onCartButtonClick}
      />
      <main>
        <Meals mealsData={mealsData} />
      </main>
    </Fragment>
  );
};

export default Layout;
