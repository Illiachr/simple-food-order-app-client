import { MouseEvent, ReactNode } from 'react';
import classes from './Backdrop.module.css';

type Props = {
  setVisibility: (visibility: boolean) => void,
  children?: ReactNode
}

const Backdrop = ({ setVisibility, children }: Props) => {
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setVisibility(false);
  };
  return (
    <div className={classes.backdrop} onClick={onClick}>{children}</div>
  );
};

export default Backdrop;
