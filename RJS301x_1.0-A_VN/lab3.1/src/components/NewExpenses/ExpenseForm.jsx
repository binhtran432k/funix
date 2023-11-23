import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [inputs, setInputs] = useState({
    title: "",
    amount: "",
    date: "",
  });

  /**
   * @param {InputEvent} e
   */
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  /**
   * @param {SubmitEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs({ title: "", amount: "", date: "" });
  };

  return (
    <form className="ExpenseForm" onSubmit={handleSubmit}>
      <div className="expense-form__body">
        <div className="expense-form__group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
          />
        </div>
        <div className="expense-form__group">
          <label>Amount</label>
          <input
            type="text"
            name="amount"
            value={inputs.amount}
            onChange={handleChange}
          />
        </div>
        <div className="expense-form__group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="expense-form__button">
        Add Expense
      </button>
    </form>
  );
};

export { ExpenseForm };
