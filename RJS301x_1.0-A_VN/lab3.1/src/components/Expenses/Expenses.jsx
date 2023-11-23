import { ExpenseFilter } from "./ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

/** @type {import("./ExpenseItem").ExpenseProp[]} */
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const Expenses = () => {
  return (
    <div className="Expenses">
      <ExpenseFilter />
      {expenses.map((expense) => (
        <ExpenseItem {...expense} key={expense.id} />
      ))}
    </div>
  );
};

export { Expenses };
