import "./App.css";
import { Expenses, NewExpenses } from "./components";

export const App = () => {
  return (
    <div className="App">
      <NewExpenses />
      <Expenses />
    </div>
  );
};
