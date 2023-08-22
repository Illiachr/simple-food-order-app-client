import Layout from "./views/Layout";
import mealsImg from './assets/meals.jpg';
import { useEffect, useState } from "react";
import { TMeals } from "./types/mealsTypes";

const MEALS_MOCK_URL = './src/store/mock/mock-data.json';

function App() {
  const [meals, setMeals] = useState<TMeals>([]);

  const getMeals = async(url: string): Promise<TMeals> => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    (async () => {
      const meals = await getMeals(MEALS_MOCK_URL);
      console.log(meals);
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
    />
  )
}

export default App
