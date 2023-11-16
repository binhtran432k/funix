import { useEffect, useState } from "react";
import { url } from "../constants/url";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url.user)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div className="UsersPage">
      <h1>Users</h1>
      <ul style={{ marginLeft: "1.25rem" }}>
        {users.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </div>
  );
};

export { UsersPage };
