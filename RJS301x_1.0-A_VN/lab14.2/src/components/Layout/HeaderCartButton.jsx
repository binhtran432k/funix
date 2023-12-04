import CartIcon from "@/components/Cart/CartIcon";
import CartContext from "@/store/cart-context";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";

/**
 * @typedef HeaderCartButtonProps
 * @property {Function} onClick
 */

/** @type {React.FC<HeaderCartButtonProps>} */
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((p, c) => p + c.amount, 0);

  const btnClasses = [classes.button, btnIsHighlighted && classes.bump]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

HeaderCartButton.propTypes = {
  onClick: PropTypes.func,
};

export default HeaderCartButton;
