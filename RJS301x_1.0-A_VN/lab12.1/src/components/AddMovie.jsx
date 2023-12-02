import { useState } from "react";
import classes from "./AddMovie.module.css";

const DEFAULT_FORM = {
  title: "",
  openingText: "",
  releaseDate: "",
};

/**
 * @type {React.FC<{onAddMovie: Function}>}
 */
const AddMovie = (props) => {
  const [movieForm, setMovieForm] = useState(DEFAULT_FORM);

  /** @type {React.ChangeEventHandler} */
  const changeMovieFormHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMovieForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  /**
   * @param {keyof movieForm} name
   */
  const getAddMovieFormProps = (name) => {
    return {
      name: name,
      value: movieForm[name],
      onChange: changeMovieFormHandler,
    };
  };

  /** @type {React.FormEventHandler} */
  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddMovie(movieForm);
    setMovieForm(DEFAULT_FORM);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label>
          Title
          <input type="text" {...getAddMovieFormProps("title")} />
        </label>
      </div>
      <div className={classes.control}>
        <label>
          Opening Text
          <textarea
            rows="5"
            {...getAddMovieFormProps("openingText")}
          ></textarea>
        </label>
      </div>
      <div className={classes.control}>
        <label>
          Release Date
          <input type="text" {...getAddMovieFormProps("releaseDate")} />
        </label>
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
