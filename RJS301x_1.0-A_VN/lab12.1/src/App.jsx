import { useCallback, useEffect, useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

const URL = "https://react-http-96576-default-rtdb.firebaseio.com/movies.json";

/**
 * @typedef {import("./components/Movie").Movie} Movie
 */

function App() {
  /** @type {ReturnType<typeof useState<Movie[]>>} */
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedMovies = Object.entries(data).map(([id, v]) => ({
        ...v,
        id: id,
        releaseDate: new Date(v.releaseDate),
      }));

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addMovieHandler = useCallback(async (movie) => {
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const content = (() => {
    if (error) {
      return <p>{error}</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (movies.length === 0) {
      return <p>Found no movies.</p>;
    }
    return <MoviesList movies={movies} />;
  })();

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
}

export default App;
