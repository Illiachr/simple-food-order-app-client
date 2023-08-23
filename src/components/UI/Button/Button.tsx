import { ReactNode } from "react";
import classes from './Button.module.css';

type Props = {
  text?: string,
  children?: ReactNode,
  className?: string,
  onClick: () => void
};

const Button = ({text, className, children, onClick}: Props) => {
  const cls = [classes.button];
  if (className) {
    cls.push(className)
  }
  return (
    <button className={cls.join(' ')} onClick={onClick}>
      {text || children}
      </button>
  )
};

export default Button;
