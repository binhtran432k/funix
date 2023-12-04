import { Component } from "react";
import UsersContext from "../store/users-context";
import classes from "./UserFinder.module.css";
import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      const filteredUsers = this.context.users.filter((user) =>
        user.name.includes(this.state.searchTerm),
      );
      this.setState({ filteredUsers });
    }
  }

  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input
            type="search"
            value={this.state.searchTerm}
            onChange={this.searchChangeHandler}
          />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </>
    );
  }
}

export default UserFinder;
