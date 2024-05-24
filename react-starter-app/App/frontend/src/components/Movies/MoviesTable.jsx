import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./MovieTableRow";
import axios from "axios";

const MoviesTable = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "movies";
      console.log(URL)
      const response = await axios.get(URL);
      setMovies(response.data);
    } catch (error) {
      alert("Error fetching movies from the server.");
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movies Table</h2>
      {movies.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No movies found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Length</th>
              <th>Total Views</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <TableRow key={movie.movie_id} movie={movie} fetchMovies={fetchMovies} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MoviesTable;
