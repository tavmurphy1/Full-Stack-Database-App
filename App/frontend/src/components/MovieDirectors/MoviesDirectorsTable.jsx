import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./MoviesDirectorsTableRow";
import axios from "axios";

const MoviesDirectorsTable = () => {
  const [moviesDirectors, setMoviesDirectors] = useState([]);

  const fetchMoviesDirectors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "moviedirectors";
      const response = await axios.get(URL);
      setMoviesDirectors(response.data);
    } catch (error) {
      alert("Error fetching movie director from the server.");
      console.error("Error fetching movie director:", error);
    }
  };

  useEffect(() => {
    fetchMoviesDirectors();
  }, []);

  return (
    <div>
      <h2>Movie Directors</h2>
      {moviesDirectors.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No movie directors found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>director</th>
              <th>movie</th>
            </tr>
          </thead>
          <tbody>
            {moviesDirectors.map((moviesDirectors, i) => (
              <TableRow key={moviesDirectors.movie_director_id} moviesDirectors={moviesDirectors}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MoviesDirectorsTable;
