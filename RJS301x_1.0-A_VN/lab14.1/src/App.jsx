import { useCallback } from "react";
import { useState } from "react";

const getControlClasses = (classes, invalid) => {
  return [classes, invalid && "invalid"].filter(Boolean).join(" ");
};

const App = () => {
  const [enteredInput, setEnteredInput] = useState({
    name: "",
    email: "",
  });
  const [enteredInputTouched, setEnteredInputTouched] = useState({
    name: false,
    email: false,
  });

  const nameInputIsInvalid =
    enteredInput.name.trim().length === 0 && enteredInputTouched.name;
  const emailInputIsInvalid =
    !enteredInput.email.includes("@") && enteredInputTouched.email;
  const formIsValid = !nameInputIsInvalid && !emailInputIsInvalid;

  const changeHandler = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEnteredInput((preInput) => ({
      ...preInput,
      [name]: value,
    }));
  }, []);

  const blurHandler = useCallback((e) => {
    const name = e.target.name;
    setEnteredInputTouched((preInputTouched) => ({
      ...preInputTouched,
      [name]: true,
    }));
  }, []);

  const submitHandler = useCallback((e) => {
    e.preventDefault();

    setEnteredInputTouched({ name: true, email: true });

    if (!formIsValid) {
      return;
    }

    setEnteredInput({ name: "", email: "" });
    setEnteredInputTouched({ name: false, email: false });
  }, []);

  const getInputProps = (name) => {
    return {
      name: name,
      value: enteredInput[name],
      onChange: changeHandler,
      onBlur: blurHandler,
    };
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <div className={getControlClasses("form-control", nameInputIsInvalid)}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" {...getInputProps("name")} />
          {nameInputIsInvalid && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={getControlClasses("form-control", emailInputIsInvalid)}>
          <label htmlFor="email">Your E-Mail</label>
          <input type="email" id="email" {...getInputProps("email")} />
          {emailInputIsInvalid && (
            <p className="error-text">Please enter an valid email.</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
