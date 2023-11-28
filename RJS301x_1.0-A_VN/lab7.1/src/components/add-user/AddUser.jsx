import PropTypes from "prop-types";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Button, Card, ErrorModal } from "../";
import classes from "./AddUser.module.css";

const DEFAULT_USER_INPUTS = {
  username: "",
  age: "",
};

const ERROR = {
  /** @type {Error} */
  invalidInput: {
    title: "Invalid input",
    message: "Please enter a valid name and age (non-empty values).",
  },
  /** @type {Error} */
  invalidAge: {
    title: "Invalid age",
    message: "Please enter a valid age (> 0).",
  },
};

/**
 * @typedef Error
 * @property {string} title
 * @property {string} message
 */

/**
 * @typedef AddUserProps
 * @property {(fullName: string, age: string) => void} onAddUser
 */

/**
 * @type {React.FC<AddUserProps>}
 */
const AddUser = (props) => {
  const [userInputs, setUserInputs] = useState(DEFAULT_USER_INPUTS);
  /** @type {ReturnType<typeof useState<Error>>} */
  const [error, setError] = useState(null);

  /**
   * @type {React.FormEventHandler}
   */
  const handleChangeUserInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInputs((prevUserInputs) => ({ ...prevUserInputs, [name]: value }));
  };

  /**
   * @param {keyof userInputs} name
   */
  const getInputHandler = (name) => ({
    name,
    value: userInputs[name],
    onChange: handleChangeUserInputs,
  });

  /**
   * @type {React.MouseEventHandler}
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInputs.username || !userInputs.age) {
      setError(ERROR.invalidInput);
    } else if (userInputs.age <= 0) {
      setError(ERROR.invalidAge);
    } else {
      props.onAddUser(userInputs.username, Number(userInputs.age));
      setUserInputs(DEFAULT_USER_INPUTS);
    }
  };

  const handleConfirmErrorModal = () => {
    setError(null);
  };

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label>
            <h4>Username</h4>
            <input type="text" {...getInputHandler("username")} />
          </label>
          <label>
            <h4>Age (Years)</h4>
            <input type="number" {...getInputHandler("age")} />
          </label>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {error &&
        createPortal(
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={handleConfirmErrorModal}
          />,
          document.getElementById("modal"),
        )}
    </>
  );
};

AddUser.propTypes = {
  onAddUser: PropTypes.func,
};

export default AddUser;
