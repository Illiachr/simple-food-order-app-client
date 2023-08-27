import { ReactNode } from 'react';
import classes from './PopupOverlay.module.css';

type Props = {
  children: ReactNode
};

const PopupOverlay = ({ children }: Props) => {
  return (
    <div className={classes.popup}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default PopupOverlay;
