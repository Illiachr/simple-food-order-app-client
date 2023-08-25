import Layout from './views/Layout';
import mealsImg from './assets/meals.jpg';
import { useEffect, useState } from 'react';
import { TMeals } from './types/mealsTypes';
import { ICartItem } from './types/cartTypes';

const MEALS_MOCK_URL = './src/store/mock/mock-data.json';
const MOCK_CART_ITEMS = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}];

function App() {
  const [meals, setMeals] = useState<TMeals>([]);
  const [cartItems, setCartItems] = useState<Array<ICartItem>>(MOCK_CART_ITEMS);

  const getMeals = async(url: string): Promise<TMeals> => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    (async () => {
      const meals = await getMeals(MEALS_MOCK_URL);
      setMeals(meals);
    })();
  }, []);

  const cartClickHandler = () => {
  };

  return (
    <Layout
      headerTitle="OrderYourMeals"
      headerBackgroundImg={mealsImg}
      itemsTotal={3}
      onCartButtonClick={cartClickHandler}
      mealsData={meals}
      cartItems={cartItems}
    />
  );
}

export default App;
