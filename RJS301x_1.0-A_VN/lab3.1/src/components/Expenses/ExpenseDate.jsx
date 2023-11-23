import PropTypes from "prop-types";
import "./ExpenseDate.css";

/**
 * @typedef ExpenseDateProp
 * @property {Date} date
 */

/**
 * @type {React.FC<ExpenseDateProp>}
 */
const ExpenseDate = (props) => {
  const location = "en-US";
  const month = props.date.toLocaleString(location, { month: "long" });
  const day = props.date.toLocaleString(location, { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="ExpenseDate">
      <div className="expense-month">{month}</div>
      <div className="expense-year">{year}</div>
      <div className="expense-day">{day}</div>
    </div>
  );
};

ExpenseDate.propTypes = {
  date: PropTypes.objectOf(Date),
};

export { ExpenseDate };
