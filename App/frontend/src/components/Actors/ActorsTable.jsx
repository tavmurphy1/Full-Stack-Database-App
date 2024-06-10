//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of fetch requests and table elements to match our project's mySQL Actors table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

import { useState, useEffect } from "react";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";
import TableRow from "./ActorsTableRow";
import axios from "axios";

const ActorsTable = () => {
  const [actors, setActors] = useState([]);
  const [moviesActors, setMoviesActors] = useState([]);
  const [televisionsActors, setTelevisionsActors] = useState([]);

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
    fetchActors(), fetchMoviesActors(), fetchTelevisionsActors();
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
              <TableRow key={actor.actor_id} actor={actor} fetchActors={fetchActors} moviesActors={moviesActors} televisionsActors={televisionsActors}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ActorsTable;
