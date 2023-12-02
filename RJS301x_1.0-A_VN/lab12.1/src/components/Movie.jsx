import classes from "./Movie.module.css";

/**
 * @typedef Movie
 * @property {string} id
 * @property {string} title
 * @property {string} openingText
 * @property {Date|string} releaseDate
 */

/**
 * @param {Date} date
 */
function getDate(date) {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

/** @type {React.FC<Movie>} */
const Movie = (props) => {
  const date =
    typeof props.releaseDate === "string"
      ? props.releaseDate
      : getDate(props.releaseDate);
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{date}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
