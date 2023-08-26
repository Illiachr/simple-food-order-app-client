import { IMeal } from '../../../types/mealsTypes';
import MealItemForm from '../MealItemForm/MealItemForm';
import classes from './MealItem.module.css';

type Props = {
  meal: IMeal
}

const MealItem = ({ meal }: Props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{`$${meal.price.toFixed(2)}`}</div>
      </div>
      <div className="">
        <MealItemForm inputId={`qty_${meal.id}`} meal={meal} />
      </div>
    </li>
  );
};

export default MealItem;
