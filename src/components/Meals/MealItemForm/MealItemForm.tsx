import { ChangeEvent, useState } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

type Props = {
  inputId: string
  onSubmit: () => void
}

const MealItemForm = ({ inputId, onSubmit }: Props) => {
  const [amount, setAmount] = useState(1);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmount(Number(value));
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
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
      <Button text="+ Add" onClick={() => {}} />
    </form>
  )
};

export default MealItemForm;
