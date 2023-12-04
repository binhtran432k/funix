import Input from "@/components/UI/Input";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";

/**
 * @typedef MealItemFormProps
 * @property {string} id
 * @property {(amount: number) => void} onAddToCart
 */

/** @type {React.FC<MealItemFormProps>} */
const MealItemForm = (props) => {
  const [isValidAmount, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  /** @type {React.FormEventHandler} */
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      5 < enteredAmountNumber
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ Add</button>
      {!isValidAmount && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

MealItemForm.propTypes = {
  id: PropTypes.string,
  onAddToCart: PropTypes.func,
};

export default MealItemForm;
