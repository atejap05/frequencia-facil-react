import classes from "../../css/styles.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
  return <div className={`${classes.backdrop} ${props.className}`} />;
};

const ModalOverlay = props => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop className={props.classNameBackdrop} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.classNameOverlay}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
