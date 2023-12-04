import Modal from "@/components/UI/Modal";
import CartContext from "@/store/cart-context";
import PropTypes from "prop-types";
import { useContext } from "react";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

/**
 * @typedef CartProps
 * @property {Function} onClose
 */

/** @type {React.FC<CartProps>} */
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cart) => (
        <CartItem
          key={cart.id}
          name={cart.name}
          amount={cart.amount}
          price={cart.price}
          onAdd={cartItemAddHandler.bind(null, cart)}
          onRemove={cartItemRemoveHandler.bind(null, cart.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func,
};

export default Cart;
