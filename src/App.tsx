import Layout from './views/Layout';
import mealsImg from './assets/meals.jpg';
import { IMeal } from './types/mealsTypes';
import { useEffect, useState } from 'react';
import CartContextProvider from './store/context/CartContextProvider';

const OVERLAYS_ID = 'overlays';
const MEALS_MOCK_URL = './src/store/mock/mock-data.json';

function App() {
  const [meals, setMeals] = useState<Array<IMeal>>([]);

  const getMeals = async (url: string): Promise<Array<IMeal>> => {
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

  return (
    <CartContextProvider>
      <Layout
        headerTitle="OrderYourMeals"
        headerBackgroundImg={mealsImg}
        mealsData={meals}
        overlaysElemId={OVERLAYS_ID}
      />
    </CartContextProvider>
  );
}

export default App;
