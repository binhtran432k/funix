import PropTypes from "prop-types";
import "./ExpenseFilter.css";

/**
 * @typedef ExpenseFilterProp
 * @property {string} selected
 * @property {(selected) => void} onChangeFilter
 */

/**
 * @type {React.FC<ExpenseFilterProp>}
 */
const ExpenseFilter = (props) => {
  const handleChangeYear = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="ExpenseFilter">
      <div className="expense-filter__control">
        <label>
          Filter by year
          <select
            name="filter-year"
            value={props.selected}
            onChange={handleChangeYear}
          >
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

ExpenseFilter.propTypes = {
  selected: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export { ExpenseFilter };
