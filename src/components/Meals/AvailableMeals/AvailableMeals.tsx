import { TMeals } from '../../../types/mealsTypes';
import classes from './AvailableMeals.module.css';

type Props = {
  mealsData: TMeals
};

const AvailableMeals = ({ mealsData }: Props) => {
  const mealsList = mealsData.map((meal) => (<li key={meal.id}>{meal.name}</li>));
  return (
    <section className={classes.meals}>
      {mealsData.length > 0 ? (<ul>{mealsList}</ul>) : <h2>Loading ...</h2>}
    </section>
  )
}

export default AvailableMeals