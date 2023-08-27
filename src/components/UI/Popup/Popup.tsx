import { Fragment, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Backdrop from './Backdrop/Backdrop';
import PopupOverlay from './PopupOverlay/PopupOverlay';

type Props = {
  overlaysElemId: string,
  children: ReactNode,
  setVisibility: (visibility: boolean) => void
}

const Popup = ({ overlaysElemId, setVisibility, children }: Props) => {
  const overlaysPortalElem = document.getElementById(overlaysElemId);
  return (
    <Fragment>
      {overlaysPortalElem && createPortal(<Backdrop setVisibility={setVisibility}/>, overlaysPortalElem)}
      {(overlaysPortalElem && children) && createPortal(<PopupOverlay>{children}</PopupOverlay>, overlaysPortalElem)}
    </Fragment>
  );
};

export default Popup;
