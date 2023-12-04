import PropTypes from "prop-types";
import { Button, Card } from "../";
import classes from "./ErrorModal.module.css";

/**
 * @typedef ErrorModalProps
 * @property {string} title
 * @property {string} message
 * @property {Function} onConfirm
 */

/**
 * @type {React.FC<ErrorModalProps>}
 */
const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <div className={classes.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={classes.content}>{props.message}</div>
        <div className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </div>
      </Card>
    </>
  );
};

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
};

export default ErrorModal;
