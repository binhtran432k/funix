import Modal from "@/components/UI/Modal";
import CartContext from "@/store/cart-context";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

/**
 * @typedef CartProps
 * @property {React.MouseEventHandler} onClose
 */

/** @type {React.FC<CartProps>} */
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  /** @param {import("@/store/cart-context").Cart} item */
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  /** @param {string} id */
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const makeOrderHandler = () => {
    setIsCheckout(true);
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

  const submitSuccessHandler = () => {
    cartCtx.reset();
    setIsCheckout(false);
  };

  const formOrActions = (() => {
    if (isCheckout) {
      return (
        <Checkout
          onClose={props.onClose}
          onSubmitSuccess={submitSuccessHandler}
        />
      );
    }
    return (
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={makeOrderHandler}>
            Order
          </button>
        )}
      </div>
    );
  })();

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {formOrActions}
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func,
};

export default Cart;
