import classes from "./Button.module.css";
import PropTypes from "prop-types";

/** @typedef {React.ButtonHTMLAttributes<HTMLButtonElement>} ReactButton */

/**
 * @typedef ButtonProps
 * @property {ReactButton["onClick"]} onClick
 * @property {ReactButton["type"]} type
 */

/** @type {React.FC<React.PropsWithChildren<ButtonProps>>} */
const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
