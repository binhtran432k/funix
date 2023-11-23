import PropTypes from "prop-types";
import { useState } from "react";
import "./ExpenseForm.css";

/**
 * @typedef ExpenseFormProp
 * @property {(expense) => void} onAddExpense
 */

/** @type {React.FC<ExpenseFormProp>} */
const ExpenseForm = (props) => {
  const [inputs, setInputs] = useState({
    title: "",
    amount: "",
    date: "",
  });

  /**
   * @param {InputEvent} e
   */
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  /**
   * @param {SubmitEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now().toString(),
      title: inputs.title,
      amount: Number(inputs.amount),
      date: new Date(inputs.date),
    };
    props.onAddExpense(newExpense);
    setInputs({ title: "", amount: "", date: "" });
  };

  return (
    <form className="ExpenseForm" onSubmit={handleSubmit}>
      <div className="expense-form__body">
        <div className="expense-form__group">
          <label>
            Title
            <input
              type="text"
              name="title"
              value={inputs.title}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="expense-form__group">
          <label>
            Amount
            <input
              type="number"
              name="amount"
              value={inputs.amount}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="expense-form__group">
          <label>
            Date
            <input
              type="date"
              name="date"
              value={inputs.date}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      <div className="expense-form__button-group">
        <button
          type="button"
          className="expense-form__button--cancel"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="expense-form__button">
          Add Expense
        </button>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onAddExpense: PropTypes.func,
  onCancel: PropTypes.func,
};

export { ExpenseForm };
