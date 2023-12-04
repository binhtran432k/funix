import PropTypes from "prop-types";
import classes from "./Input.module.css";
import { forwardRef } from "react";

/**
 * @typedef InputProps
 * @property {string} label
 * @property {React.InputHTMLAttributes} input
 */

/** @type {React.FC<InputProps>} */
const Input = forwardRef(function Input(props, ref) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
};

export default Input;
