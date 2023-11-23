import { useState } from "react";
import "./App.css";
import { Expenses, NewExpenses } from "./components";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpenses onAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export { App };
