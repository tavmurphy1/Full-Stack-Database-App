import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./TelevisionsDirectorsTableRow";
import axios from "axios";

const TelevisionsDirectorsTable = () => {
  const [televisionsDirectors, setTelevisionsDirectors] = useState([]);

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
    fetchTelevisionsDirectors();
  }, []);

  return (
    <div>
      <h2>Television Directors</h2>
      {televisionsDirectors.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No television directors found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>director</th>
              <th>TV show</th>
            </tr>
          </thead>
          <tbody>
            {televisionsDirectors.map((televisionsDirectors, i) => (
              <TableRow key={televisionsDirectors.television_director_id} televisionsDirectors={televisionsDirectors}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TelevisionsDirectorsTable;
