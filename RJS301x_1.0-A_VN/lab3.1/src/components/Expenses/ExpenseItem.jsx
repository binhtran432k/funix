import PropTypes from "prop-types";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

/**
 * @typedef ExpenseProp
 * @property {string} id
 * @property {string} title
 * @property {number} amount
 * @property {Date} date
 * @property {(e: InputEvent) => void} onChangeTitle
 */

/**
 * @type {React.FC<ExpenseProp>}
 */
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const handleClick = () => {
    setTitle("Updated!");
  };

  return (
    <div className="ExpenseItem">
      <div className="expense-title-container">
        <ExpenseDate date={props.date} />
        <div className="expense-title">{title}</div>
      </div>
      <div className="expense-amount-container">
        <div className="expense-amount">${props.amount}</div>
        <button onClick={handleClick}>Change title</button>
      </div>
    </div>
  );
};

ExpenseItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.objectOf(Date),
  onChangeTitle: PropTypes.func,
};

export { ExpenseItem };
