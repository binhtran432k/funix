import PropTypes from "prop-types";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

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
  return (
    <div className="ExpenseItem">
      <div className="expense-title-container">
        <ExpenseDate date={props.date} />
        <div className="expense-title">{props.title}</div>
      </div>
      <div className="expense-amount">${props.amount}</div>
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
