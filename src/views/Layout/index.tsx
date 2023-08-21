import { Fragment } from 'react'
import Header from '../../components/Header/Header';

type Props = {
  headerTitle: string,
  headerBackgroundImg: string,
  itemsTotal: number,
  onCartButtonClick: () => void
}

const Layout = ({
  headerTitle,
  headerBackgroundImg,
  itemsTotal,
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
    </Fragment>
  )
}

export default Layout;