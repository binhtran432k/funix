import classes from "./Card.module.css";
import PropTypes from "prop-types";

/**
 * @typedef CardProps
 * @property {string} className
 */

/** @type {React.FC<React.PropsWithChildren<CardProps>>} */
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
