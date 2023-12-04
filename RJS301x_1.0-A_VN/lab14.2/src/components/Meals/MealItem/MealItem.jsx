import CartContext from "@/store/cart-context";
import PropTypes from "prop-types";
import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

/**
 * @typedef MealItem
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 */

/** @type {React.FC<MealItem>} */
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}`;

  /** @param {number} amount */
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

MealItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default MealItem;
