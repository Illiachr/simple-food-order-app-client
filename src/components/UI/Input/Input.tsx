import classes from './Input.module.css';

interface InputProps {
  id: string,
  type?: string,
  min?: number,
  max?: number,
  step?: number,
  value: string | number,
  onChange: (e: HTMLInputElement) => void
}

type Props = {
  label: string,
  inputProps: InputProps
}

const Input = ({ label, inputProps }: Props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} />
    </div>
  )
};

export default Input;
