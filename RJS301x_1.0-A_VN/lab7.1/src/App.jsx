import { useState } from "react";
import "./App.css";
import { AddUser, UsersList } from "./components/";

/**
 * @typedef User
 * @property {string} id
 * @property {string} fullName
 * @property {number} age
 */

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
}

const App = () => {
  /** @type {ReturnType<typeof useState<User[]>>} */
  const [users, setUsers] = useState([]);

  /**
   * @param {string} fullName
   * @param {number} age
   */
  const addUserHandler = (fullName, age) => {
    setUsers((oldUsers) => [...oldUsers, { id: uuidv4(), fullName, age }]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  );
};

export default App;
