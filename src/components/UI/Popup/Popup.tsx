import { Fragment, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Backdrop from './Backdrop/Backdrop';
import PopupOverlay from './PopupOverlay/PopupOverlay';

type Props = {
  children: ReactNode,
  setVisibility: () => void
}

const OVERLAYS_ID = 'overlays';
const overlaysPortalElem = document.getElementById(OVERLAYS_ID);

const Popup = ({ setVisibility, children }: Props) => {
  return (
    <Fragment>
      {overlaysPortalElem && createPortal(<Backdrop setVisibility={setVisibility}/>, overlaysPortalElem)}
      {(overlaysPortalElem && children) && createPortal(<PopupOverlay setVisibility={setVisibility}>{children}</PopupOverlay>, overlaysPortalElem)}
    </Fragment>
  );
};

export default Popup;
