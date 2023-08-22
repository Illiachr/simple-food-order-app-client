import { Fragment } from 'react'
import Header from '../../components/Header/Header';
import { TMeals } from '../../types/mealsTypes';
import Meals from '../../components/Meals/Meals/Meals';

type Props = {
  headerTitle: string,
  headerBackgroundImg: string,
  itemsTotal: number,
  mealsData: TMeals,
  onCartButtonClick: () => void
}

const Layout = ({
  headerTitle,
  headerBackgroundImg,
  itemsTotal,
  mealsData,
  onCartButtonClick
}: Props) => {
  return (
    <Fragment>
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