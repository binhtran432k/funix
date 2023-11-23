import PropTypes from "prop-types";
import { ExpenseItem } from "./ExpenseItem";

/**
 * @type {React.FC<{ items: unknown[] }>}
 */
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2>No expenses found.</h2>;
  }

  return (
    <div className="ExpensesList">
      {props.items.map((expense) => (
        <ExpenseItem {...expense} key={expense.id} />
      ))}
    </div>
  );
};

ExpensesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export { ExpensesList };
