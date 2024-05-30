import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./ActorsTableRow";
import axios from "axios";

const ActorsTable = () => {
  const [actors, setActors] = useState([]);

  const fetchActors = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL + "actors";
      const response = await axios.get(URL);
      setActors(response.data);
    } catch (error) {
      alert("Error fetching actors from the server.");
      console.error("Error fetching actors:", error);
    }
  };

  useEffect(() => {
    fetchActors();
  }, []);

  return (
    <div>
      <h2>Actors</h2>
      {actors.length === 0 ? (
        <div>
          <RiCreativeCommonsZeroFill size={70} color="#ccc" />
          <p>No actors found.</p>
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
            {actors.map((actor, i) => (
              <TableRow key={actor.actor_id} actor={actor} fetchActors={fetchActors}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ActorsTable;
