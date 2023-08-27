import { Fragment } from 'react';
import MealsSummary from '../MealsSummary/MealsSummary';
import AvailableMeals from '../AvailableMeals/AvailableMeals';
import { TMeals } from '../../../types/mealsTypes';

type Props = {
  mealsData: TMeals
};

const Meals = ({ mealsData }: Props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals mealsData={mealsData} />
    </Fragment>
  );
};

export default Meals;
