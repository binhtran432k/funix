import mealsImage from "@/assets/meals.jpg";
import PropTypes from "prop-types";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

/**
 * @typedef HeaderProps
 * @property {Function} onShowCart
 */

/** @type {React.FC<HeaderProps>} */
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

Header.propTypes = {
  onShowCart: PropTypes.func,
};

export default Header;
