import { createContext } from "react";

/**
 * @typedef Cart
 * @property {string} id
 * @property {string} name
 * @property {number} amount
 * @property {number} price
 */

/**
 * @typedef CartContextType
 * @property {Cart[]} items
 * @property {number} totalAmount
 * @property {(item: Cart) => void} addItem
 * @property {(id: Cart["id"]) => void} removeItem
 */

/** @type {React.Context<CartContextType>} */
const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
