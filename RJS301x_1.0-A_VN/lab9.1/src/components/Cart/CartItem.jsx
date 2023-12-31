import PropTypes from "prop-types";

import classes from "./CartItem.module.css";

/**
 * @typedef CartItemProps
 * @property {string} name
 * @property {number} price
 * @property {number} amount
 * @property {Function} onRemove
 * @property {Function} onAdd
 */

/** @type {React.FC<CartItemProps>} */
const CartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

export default CartItem;
