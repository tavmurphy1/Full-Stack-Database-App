import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./TelevisionsActorsTableRow";
import axios from "axios";

const TelevisionsActorsTable = () => {
  const [televisionsActors, setTelevisionsActors] = useState([]);

  const fetchTelevisionsActors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "televisionactors";
      const response = await axios.get(URL);
      setTelevisionsActors(response.data);
    } catch (error) {
      alert("Error fetching television actors from the server.");
      console.error("Error fetching television actors:", error);
    }
  };

  useEffect(() => {
    fetchTelevisionsActors();
  }, []);

  return (
    <div>
      <h2>Television Actors</h2>
      {televisionsActors.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No television actors found.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>actor</th>
              <th>TV show</th>
            </tr>
          </thead>
          <tbody>
            {televisionsActors.map((televisionsActors, i) => (
              <TableRow key={televisionsActors.television_actor_id} televisionsActors={televisionsActors}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TelevisionsActorsTable;
