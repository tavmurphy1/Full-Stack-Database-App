import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./MoviesActorsTableRow";
import axios from "axios";

const MoviesActorsTable = () => {
  const [moviesActors, setMoviesActors] = useState([]);

  const fetchMoviesActors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "movieactors";
      const response = await axios.get(URL);
      setMoviesActors(response.data);
    } catch (error) {
      alert("Error fetching movie actor from the server.");
      console.error("Error fetching movie actor:", error);
    }
  };

  useEffect(() => {
    fetchMoviesActors();
  }, []);

  return (
    <div>
      <h2>Movie Actors</h2>
      {moviesActors.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No movie actors found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>actor</th>
              <th>movie</th>
            </tr>
          </thead>
          <tbody>
            {moviesActors.map((moviesActors, i) => (
              <TableRow key={moviesActors.movie_actor_id} moviesActors={moviesActors}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MoviesActorsTable;
