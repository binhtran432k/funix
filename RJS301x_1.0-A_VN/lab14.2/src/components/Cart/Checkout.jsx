import PropTypes from "prop-types";
import classes from "./Checkout.module.css";
import useForm from "@/hooks/use-form";

/** @param {string} val */
const notEmptyValidate = (val) => {
  if (val.trim().length === 0) {
    return "This field must not be empty.";
  }
};

/**
 * @param {string} val
 * @param {number} min
 */
const minValidate = (val, min) => {
  if (val.trim().length <= min) {
    return `This field must be greater than ${min} characters.`;
  }
};

/**
 * @typedef CheckoutProps
 * @property {React.MouseEventHandler} onClose
 * @property {() => void} onSubmitSuccess
 */

/** @type {React.FC<CheckoutProps>} */
const Checkout = (props) => {
  const {
    state,
    data,
    formIsValid,
    formIsSubmitable,
    checkHandler,
    resetHandler,
  } = useForm({
    name: notEmptyValidate,
    street: notEmptyValidate,
    postalCode: (val) => notEmptyValidate(val) || minValidate(val, 5),
    city: notEmptyValidate,
  });

  /** @type {React.FormEventHandler} */
  const submitHandler = (e) => {
    e.preventDefault();
    checkHandler();
    if (!formIsValid) {
      return;
    }
    alert(
      [
        `Name: ${state.name.value}`,
        `Street: ${state.street.value}`,
        `Postal Code: ${state.postalCode.value}`,
        `City: ${state.city.value}`,
      ].join("\n"),
    );
    props.onSubmitSuccess();
    resetHandler();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["form-control"]}>
        <label>
          Your Name
          <input type="text" {...data.name.props} />
        </label>
        {data.name.isInvalid && (
          <p className={classes.invalid}>{data.name.error}</p>
        )}
      </div>
      <div className={classes["form-control"]}>
        <label>
          Street
          <input type="text" {...data.street.props} />
        </label>
        {data.street.isInvalid && (
          <p className={classes.invalid}>{data.street.error}</p>
        )}
      </div>
      <div className={classes["form-control"]}>
        <label>
          Postal Code
          <input type="text" {...data.postalCode.props} />
        </label>
        {data.postalCode.isInvalid && (
          <p className={classes.invalid}>{data.postalCode.error}</p>
        )}
      </div>
      <div className={classes["form-control"]}>
        <label>
          City
          <input type="text" {...data.city.props} />
        </label>
        {data.city.isInvalid && (
          <p className={classes.invalid}>{data.city.error}</p>
        )}
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes["button--alt"]}
          onClick={props.onClose}
        >
          Cancel
        </button>
        <button className={classes.button} disabled={!formIsSubmitable}>
          Confirm
        </button>
      </div>
    </form>
  );
};

Checkout.propTypes = {
  onClose: PropTypes.func,
  onSubmitSuccess: PropTypes.func,
};

export default Checkout;
