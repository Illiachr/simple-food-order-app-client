import { TMeals } from '../../../types/mealsTypes';
import Card from '../../UI/Card/Card';
import MealItem from '../MealsItem/MealItem';
import classes from './AvailableMeals.module.css';

type Props = {
  mealsData: TMeals
};

const AvailableMeals = ({ mealsData }: Props) => {
  const mealsList = mealsData.map((meal) => (<MealItem key={meal.id} meal={meal}/>));
  return (
    <section className={classes.meals}>
      <Card>
        {mealsData.length > 0 ? (<ul>{mealsList}</ul>) : <h2>Loading ...</h2>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
