import Layout from "./views/Layout";
import mealsImg from './assets/meals.jpg';

function App() {
  const cartClickHandler = () => {
  };

  return (
    <Layout
      headerTitle="OrderYourMeals"
      headerBackgroundImg={mealsImg}
      itemsTotal={3}
      onCartButtonClick={cartClickHandler}
    />
  )
}

export default App
