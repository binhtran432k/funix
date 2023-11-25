import PropTypes from "prop-types";

/**
 * @typedef FooterColumnProp
 * @property {number} col_number
 * @property {string[]} col_values
 */

/** @type {React.FC<FooterColumnProp>} */
const FooterColumn = (props) => {
  return (
    <ul className="footer-col" style={{ order: props.col_number }}>
      {props.col_values.map((col) => (
        <li className="footer-col__item" key={col}>
          {col}
        </li>
      ))}
    </ul>
  );
};

FooterColumn.propTypes = {
  col_number: PropTypes.number,
  col_values: PropTypes.arrayOf(PropTypes.string),
};

export default FooterColumn;
