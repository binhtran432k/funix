import PropTypes from "prop-types";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

/**
 * @typedef OnCloseWrapper
 * @property {Function} onClose
 */

/** @type {React.FC<OnCloseWrapper>} */
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

/** @type {React.FC<React.PropsWithChildren>} */
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

/** @type {React.FC<React.PropsWithChildren<OnCloseWrapper>>} */
const Modal = (props) => {
  return createPortal(
    <>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>,
    portalElement,
  );
};

Backdrop.propTypes = {
  onClose: PropTypes.func,
};

ModalOverlay.propTypes = {
  children: PropTypes.node,
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Modal;
