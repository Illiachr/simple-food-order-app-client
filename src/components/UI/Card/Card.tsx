import { ReactNode } from 'react';
import classes from './Card.module.css';

type Props = {
  children: ReactNode,
  className?: string
};

const Card = ({ children, className }: Props) => {
  const cls = [classes.card];
  if (className) {
    cls.push(className);
  }
  return (
    <div className={cls.join(' ')}>{children}</div>
  );
};

export default Card;
