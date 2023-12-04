import { Component } from "react";
import classes from "./Users.module.css";
import User from "./User";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
    this.toggleUserHandler = this.toggleUserHandler.bind(this);
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided");
    }
  }

  toggleUserHandler() {
    this.setState((curState) => ({ showUsers: !curState.showUsers }));
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUserHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
