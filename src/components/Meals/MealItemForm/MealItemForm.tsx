import { ChangeEvent, SyntheticEvent, useContext, useState } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/context/CartContext';
import { IMeal } from '../../../types/mealsTypes';

type Props = {
  inputId: string,
  meal: IMeal
}

const MealItemForm = ({ inputId, meal }: Props) => {
  const [amount, setAmount] = useState(1);

  const { addCartItem } = useContext(CartContext);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmount(Number(value));
  };

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const { id, name, price } = meal;
    const item = { id, name, price, amount };
    console.log(item);
    addCartItem(item);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label='Amount'
        inputProps={
          {
            id: inputId,
            type:'number',
            value: amount,
            min: 1,
            max: 5,
            step: 1,
            onChange: inputChangeHandler
          }
        }
      />
      <button type='submit'>+ Add</button>
    </form>
  );
};

export default MealItemForm;
