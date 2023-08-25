import { Fragment, useState } from 'react';
import Header from '../../components/Header/Header.tsx';
import { TMeals } from '../../types/mealsTypes.tsx';
import Meals from '../../components/Meals/Meals/Meals.tsx';
import Cart from '../../components/Cart/Cart.tsx';
import { ICartItem } from '../../types/cartTypes.ts';

type Props = {
  headerTitle: string,
  headerBackgroundImg: string,
  itemsTotal: number,
  mealsData: TMeals,
  cartItems: Array<ICartItem>
}

const Layout = ({
  headerTitle,
  headerBackgroundImg,
  itemsTotal,
  mealsData,
  cartItems
}: Props) => {

  const [popupVisible, setPopupVisible] = useState(false);

  const onCartButtonClick = () => {
    setPopupVisible(true);
  };


  return (
    <Fragment>
      { popupVisible && <Cart setVisibility={setPopupVisible} cartItems={cartItems}/>}
      <Header
        title={headerTitle}
        image={headerBackgroundImg}
        itemsTotal={itemsTotal}
        onCartButtonClick={onCartButtonClick}
      />
      <main>
        <Meals mealsData={mealsData} />
      </main>
    </Fragment>
  )
}

export default Layout;