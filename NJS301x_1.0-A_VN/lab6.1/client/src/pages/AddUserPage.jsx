import { useState } from "react";
import { url } from "../constants/url";

const AddUserPage = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    fetch(url.user, {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        setInputs({});
      })
      .catch((err) => console.error(err));

    e.preventDefault();

    return false;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="name"
          value={inputs.name ?? ""}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export { AddUserPage };
