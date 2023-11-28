import PropTypes from "prop-types";
import { Card } from "../";
import classes from "./UsersList.module.css";

/**
 * @typedef {import("../../App").User} User
 */

/**
 * @typedef UsersListProps
 * @property {User[]} users
 */

/**
 * @type {React.FC<UsersListProps>}
 */
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((u) => (
          <li key={u.id}>
            {u.fullName} ({u.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.any),
};

export default UsersList;
