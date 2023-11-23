import { useState } from "react";
import "./ExpenseFilter.css";

/**
 * @type {React.FC}
 */
const ExpenseFilter = () => {
  const [year, setYear] = useState("2022");

  const handleChangeYear = (e) => {
    setYear(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="ExpenseFilter">
      <div className="expense-filter__control">
        <label>
          Filter by year
          <select name="filter-year" value={year} onChange={handleChangeYear}>
            {[2022, 2021, 2020, 2019].map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export { ExpenseFilter };
