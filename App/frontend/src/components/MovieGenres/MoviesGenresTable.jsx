import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./MoviesGenresTableRow";
import axios from "axios";

const MoviesGenresTable = () => {
  const [moviesGenres, setMoviesGenres] = useState([]);

  const fetchMoviesGenres = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "moviegenres";
      const response = await axios.get(URL);
      setMoviesGenres(response.data);
    } catch (error) {
      alert("Error fetching movie genres from the server.");
      console.error("Error fetching movie genres:", error);
    }
  };

  useEffect(() => {
    fetchMoviesGenres();
  }, []);

  return (
    <div>
      <h2>Movie Genres</h2>
      {moviesGenres.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No movie genres found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>genre</th>
              <th>movie</th>
            </tr>
          </thead>
          <tbody>
            {moviesGenres.map((moviesGenres, i) => (
              <TableRow key={moviesGenres.movie_genre_id} moviesGenres={moviesGenres}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MoviesGenresTable;
