import PropTypes from "prop-types";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpenses.css";
import { useState } from "react";

/**
 * @typedef NewExpensesProp
 * @property {(expense) => void} onAddExpense
 */

/** @type {React.FC<NewExpensesProp>} */
const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => setIsEditing(true);

  const stopEditingHandler = (isAdd, ...args) => {
    setIsEditing(false);
    isAdd && props.onAddExpense(...args);
  };

  const renderedComponent = (() => {
    if (!isEditing) {
      return (
        <button className="btn-add-expense" onClick={startEditingHandler}>
          Add New Expense
        </button>
      );
    } else {
      return (
        <ExpenseForm
          onAddExpense={stopEditingHandler.bind(null, true)}
          onCancel={stopEditingHandler.bind(null, false)}
        />
      );
    }
  })();

  return <div className="NewExpenses">{renderedComponent}</div>;
};

NewExpenses.propTypes = {
  onAddExpense: PropTypes.func,
};

export { NewExpenses };
