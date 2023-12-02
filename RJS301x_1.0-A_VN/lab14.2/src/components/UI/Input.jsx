import PropTypes from "prop-types";
import { forwardRef, memo, useId } from "react";
import classes from "./Input.module.css";

/**
 * @typedef InputProps
 * @property {string} label
 * @property {React.InputHTMLAttributes} input
 */

/** @type {ReturnType<typeof forwardRef<HTMLInputElement, InputProps>>} */
const Input = memo(
  forwardRef(function Input(props, ref) {
    const id = `input${useId()}`;
    return (
      <div className={classes.input}>
        <label htmlFor={id}>{props.label}</label>
        <input {...props.input} id={id} ref={ref} />
      </div>
    );
  }),
);

Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
};

export default Input;
