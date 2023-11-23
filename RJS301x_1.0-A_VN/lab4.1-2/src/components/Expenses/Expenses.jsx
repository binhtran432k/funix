import PropTypes from "prop-types";
import { ExpenseFilter } from "./ExpenseFilter";
import "./Expenses.css";
import { ExpensesList } from "./ExpensesList";
import { useState } from "react";

/**
 * @typedef ExpensesProp
 * @property {import("./ExpenseItem").ExpenseProp[]} items
 */

/**
 * @type {React.FC<ExpensesProp>}
 */
const Expenses = (props) => {
  const [year, setYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div className="Expenses">
      <ExpenseFilter selected={year} onChangeFilter={filterChangeHandler} />
      <ExpensesList
        items={props.items.filter((x) => x.date.getFullYear() == year)}
      />
    </div>
  );
};

Expenses.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
};

export { Expenses };
