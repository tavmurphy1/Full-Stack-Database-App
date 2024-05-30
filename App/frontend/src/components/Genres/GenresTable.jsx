import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./GenresTableRow";
import axios from "axios";

const GenresTable = () => {
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "genres";
      const response = await axios.get(URL);
      setGenres(response.data);
    } catch (error) {
      alert("Error fetching genres from the server.");
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div>
      <h2>Genres</h2>
      {genres.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No genres found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre, i) => (
              <TableRow key={genre.genre_id} genre={genre} fetchGenres={fetchGenres}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GenresTable;
