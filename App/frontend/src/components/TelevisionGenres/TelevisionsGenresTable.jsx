import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./TelevisionsGenresTableRow";
import axios from "axios";

const TelevisionsGenresTable = () => {
  const [televisionsGenres, setTelevisionsGenres] = useState([]);

  const fetchTelevisionsGenres = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisiongenres";
      const response = await axios.get(URL);
      setTelevisionsGenres(response.data);
    } catch (error) {
      alert("Error fetching television genres from the server.");
      console.error("Error fetching television genres:", error);
    }
  };

  useEffect(() => {
    fetchTelevisionsGenres();
  }, []);

  return (
    <div>
      <h2>Television Genres</h2>
      {televisionsGenres.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No television genres found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>genre</th>
              <th>TV show</th>
            </tr>
          </thead>
          <tbody>
            {televisionsGenres.map((televisionsGenres, i) => (
              <TableRow key={televisionsGenres.television_genre_id} televisionsGenres={televisionsGenres}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TelevisionsGenresTable;
