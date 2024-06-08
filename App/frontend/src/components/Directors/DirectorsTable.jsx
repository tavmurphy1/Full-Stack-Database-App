import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./DirectorsTableRow";
import axios from "axios";

const DirectorsTable = () => {
  const [directors, setDirectors] = useState([]);
  const [moviesDirectors, setMoviesDirectors] = useState([]);
  const [televisionsDirectors, setTelevisionsDirectors] = useState([]);

  const fetchDirectors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "directors";
      const response = await axios.get(URL);
      setDirectors(response.data);
    } catch (error) {
      alert("Error fetching directors from the server.");
      console.error("Error fetching directors:", error);
    }
  };

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

  const fetchTelevisionsDirectors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisiondirectors";
      const response = await axios.get(URL);
      setTelevisionsDirectors(response.data);
    } catch (error) {
      alert("Error fetching television directors from the server.");
      console.error("Error fetching television directors:", error);
    }
  };

  useEffect(() => {
    fetchDirectors(), fetchMoviesDirectors(), fetchTelevisionsDirectors();
  }, []);

  return (
    <div>
      <h2>Directors</h2>
      {directors.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No directors found.</p>
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
            {directors.map((director, i) => (
              <TableRow key={director.director_id} director={director} fetchDirectors={fetchDirectors} moviesDirectors={moviesDirectors} televisionsDirectors={televisionsDirectors}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DirectorsTable;
